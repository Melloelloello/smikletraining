/* ============================================================
   SITE RENDERER — reads config.js and fills in the page.
   You shouldn't need to edit this file. To change website
   content, edit config.js instead.
   ============================================================ */

(function () {
  const cfg = window.SITE_CONFIG;
  if (!cfg) {
    console.error("config.js did not load — check the <script> order in the HTML.");
    return;
  }

  const stars = (n) => "★".repeat(n) + "☆".repeat(5 - n);

  // ---- simple text/attr binding: <el data-cfg="hero.subtext">
  function applyBindings() {
    document.querySelectorAll("[data-cfg]").forEach((el) => {
      const path = el.getAttribute("data-cfg");
      const val = path.split(".").reduce((o, k) => (o ? o[k] : undefined), cfg);
      if (val !== undefined) el.textContent = val;
    });
    document.querySelectorAll("[data-cfg-href]").forEach((el) => {
      const path = el.getAttribute("data-cfg-href");
      const val = path.split(".").reduce((o, k) => (o ? o[k] : undefined), cfg);
      if (val !== undefined) el.setAttribute("href", val);
    });
  }

  // ---- nav logo / footer / instagram links present on every page
  function renderGlobals() {
    document.querySelectorAll("[data-ig-link]").forEach((el) => {
      el.setAttribute("href", cfg.business.instagramUrl);
    });
    document.querySelectorAll("[data-ig-handle]").forEach((el) => {
      el.textContent = cfg.business.instagramHandle;
    });
    document.querySelectorAll("[data-year]").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  }

  // ---- Calendly embeds: build the data-url from config so the
  // real link only has to live in one place (config.js)
  function renderCalendly() {
    document.querySelectorAll(".calendly-inline-widget").forEach((el) => {
      const params = "?hide_gdpr_banner=1&background_color=383937&text_color=f5f1ed&primary_color=508991";
      el.setAttribute("data-url", cfg.business.calendlyUrl + params);
    });
  }

  // ---- hero stats row (home page)
  function renderStats() {
    const wrap = document.querySelector("[data-render='stats']");
    if (!wrap) return;
    wrap.innerHTML = cfg.stats.map(s => `
      <div class="hero-stat"><b>${s.value}</b><span>${s.label}</span></div>
    `).join("");
  }

  // ---- stats grid (results.html — same data, bigger cards)
  function renderStatsGrid() {
    const wrap = document.querySelector("[data-render='stats-grid']");
    if (!wrap) return;
    const extra = [{ value: "100%", label: "Programs Custom-Built" }];
    wrap.innerHTML = cfg.stats.concat(extra).map(s => `
      <div class="stat-cell"><b>${s.value}</b><span>${s.label}</span></div>
    `).join("");
  }

  // ---- program cards (home page — short version)
  function renderPrograms() {
    const wrap = document.querySelector("[data-render='programs']");
    if (!wrap) return;
    wrap.innerHTML = cfg.programs.map(p => `
      <div class="program">
        <div class="num">${p.number} / ${p.tag.toUpperCase()}</div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="price">${p.price} <span>${p.priceUnit}</span></div>
      </div>
    `).join("");
  }

  // ---- program detail cards (programs.html — expanded version)
  function renderProgramDetails() {
    const wrap = document.querySelector("[data-render='program-details']");
    if (!wrap) return;
    wrap.innerHTML = cfg.programs.map(p => `
      <div class="program-detail">
        <div class="pd-left">
          <span class="num">${p.number} / PROGRAM</span>
          <span class="tag">${p.tag}</span>
          <h3>${p.title}</h3>
          <div class="price">${p.price} <span>${p.priceUnit}</span></div>
        </div>
        <div class="pd-right">
          <p>${p.description}</p>
          <p>${p.details}</p>
          <a class="btn-ghost" href="book.html">Book This Program →</a>
        </div>
      </div>
    `).join("");
  }

  // ---- testimonial cards (home page — short version)
  function renderTestimonials() {
    const wrap = document.querySelector("[data-render='testimonials']");
    if (!wrap) return;
    wrap.innerHTML = cfg.testimonials.map(t => `
      <div class="quote-card">
        <div class="stars">${stars(t.stars)}</div>
        <p>"${t.quote}"</p>
        <div class="who"><div class="avatar"></div><div><b>${t.name}</b><span>${t.meta}</span></div></div>
      </div>
    `).join("");
  }

  // ---- testimonial cards (results.html — wide version, same data)
  function renderTestimonialsWide() {
    const wrap = document.querySelector("[data-render='testimonials-wide']");
    if (!wrap) return;
    wrap.innerHTML = cfg.testimonials.map(t => `
      <div class="quote-card">
        <div class="stars">${stars(t.stars)}</div>
        <p>"${t.quote}"</p>
        <div class="who"><div class="avatar"></div><div><b>${t.name}</b><span>${t.meta}</span></div></div>
      </div>
    `).join("");
  }

  // ---- FAQ (book.html)
  function renderFAQ() {
    const wrap = document.querySelector("[data-render='faq']");
    if (!wrap) return;
    wrap.innerHTML = cfg.faq.map(f => `
      <div class="faq-item">
        <div class="q">${f.question}</div>
        <div class="a">${f.answer}</div>
      </div>
    `).join("");
  }

  // ---- contact info cells (contact.html)
  function renderContactInfo() {
    const wrap = document.querySelector("[data-render='contact-info']");
    if (!wrap) return;
    wrap.innerHTML = `
      <div class="contact-cell">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${cfg.business.email}">${cfg.business.email}</a></div>
      </div>
      <div class="contact-cell">
        <div class="label">Phone</div>
        <div class="value"><a href="tel:${cfg.business.phone}">${cfg.business.phone}</a></div>
      </div>
      <div class="contact-cell">
        <div class="label">Instagram</div>
        <div class="value"><a href="${cfg.business.instagramUrl}" target="_blank">${cfg.business.instagramHandle}</a></div>
      </div>
    `;
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyBindings();
    renderGlobals();
    renderCalendly();
    renderStats();
    renderStatsGrid();
    renderPrograms();
    renderProgramDetails();
    renderTestimonials();
    renderTestimonialsWide();
    renderFAQ();
    renderContactInfo();

    // Calendly's own script (loaded async in each page) sometimes
    // finishes before this file sets the data-url — nudge it to
    // re-scan the page once the URL is in place.
    if (window.Calendly && document.querySelector(".calendly-inline-widget")) {
      window.Calendly.initInlineWidgets && window.Calendly.initInlineWidgets();
    }
  });
})();
