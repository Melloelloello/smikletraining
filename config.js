/* ============================================================
   EDIT THIS FILE TO CHANGE WHAT SHOWS UP ON THE WEBSITE.
   ============================================================
   This is the ONLY file you should need to touch for everyday
   updates — new prices, new testimonials, a different headline,
   a new Calendly link, etc.

   Rules for editing safely:
   1. Only change the text INSIDE the quotes " "
   2. Keep the quotes, commas, and curly braces { } exactly as they are
   3. If you delete a comma or a quote by accident, the whole site
      can break — if that happens, undo your change
   4. To add a new testimonial/program/stat, copy an existing block
      (the part between { and }, including the comma after it),
      paste it, then edit the text inside

   After you save this file and push it to GitHub, Netlify will
   automatically rebuild the live site within a minute or two.
   ============================================================ */

window.SITE_CONFIG = {

  // ----------------------------------------------------------
  // BUSINESS BASICS — shows up in the nav, footer, and hero
  // ----------------------------------------------------------
  business: {
    firstName: "Marlon",
    lastName: "Smikle",
    shortName: "Smikle Training",          // used in nav logo
    location: "Brooklyn, NYC",
    instagramHandle: "@melloelloello",
    instagramUrl: "https://www.instagram.com/melloelloello/",
    email: "marlon@smikle.co",             // <-- put Marlon's real inbox here
    phone: "(555) 000-0000",                // <-- put Marlon's real number here

    // Real Calendly scheduling link. This single line controls
    // EVERY booking button/embed across the whole site.
    calendlyUrl: "https://calendly.com/marlon-smikle-rzrv",

    // Shown on the contact page to make sure people know the first
    // consult doesn't cost anything.
    freeConsultNote: "Free consultations available — reach out below or book a no-cost intro call to talk through your goals before committing to a package."
  },

  // ----------------------------------------------------------
  // HOME PAGE — HERO SECTION
  // ----------------------------------------------------------
  hero: {
    eyebrow: "Personal Training Suited To You",
    headlineLine1: "Built",
    headlineLine2: "for",
    headlineLine3: "Results.",
    subtext: "Coaching built around your schedule, your goals, and accountability that actually holds. Strength, conditioning, and nutrition — programmed by Marlon.",
    primaryButtonLabel: "Book a Free Consult",
    secondaryButtonLabel: "View Programs"
  },

  // ----------------------------------------------------------
  // HOME PAGE — QUICK STATS ROW UNDER THE HERO
  // ----------------------------------------------------------
  stats: [
    { value: "100+",  label: "Clients Coached" },
    { value: "9 yrs", label: "Training Experience" },
    { value: "4.9★",  label: "Avg. Client Rating" }
  ],

  // ----------------------------------------------------------
  // PROGRAMS — shown as 3 cards on the home page,
  // and in more detail on programs.html
  // ----------------------------------------------------------
  programs: [
    {
      number: "01",
      tag: "One-Time",
      title: "Single Session",
      description: "One-off 1:1 in-person training session. Ideal for a form check, a trial run, or a one-time push.",
      details: "Best for someone who wants to test the coaching style before committing, or who just needs a single focused session — a form fix, a program check-in, or prep for something specific.",
      price: "$45",
      priceUnit: "/ session"
    },
    {
      number: "02",
      tag: "Best Value",
      title: "4-Session Pack",
      description: "Four in-person sessions, bundled and discounted. The most booked way to start real, consistent training.",
      details: "Four 1:1 sessions bought together at a lower per-session rate than booking one at a time. Sessions are scheduled around your calendar — no set end date, just a block of training in the bank.",
      price: "$150",
      priceUnit: "/ 4 sessions"
    },
    {
      number: "03",
      tag: "Virtual",
      title: "Online Session",
      description: "1:1 remote coaching session over video — same coaching, no commute.",
      details: "For clients outside the area or who just prefer training from home or the gym they already go to. Same live 1:1 coaching as in-person, delivered over video call.",
      price: "$25",
      priceUnit: "/ session"
    }
  ],

  // ----------------------------------------------------------
  // TESTIMONIALS — shown as 3 cards on the home page,
  // and a larger list on results.html
  // ----------------------------------------------------------
  testimonials: [
    {
      stars: 5,
      quote: "Placeholder testimonial copy — real quotes and before/after results go here.",
      name: "Client Name",
      meta: "8-Week Build · 3 months"
    },
    {
      stars: 5,
      quote: "Placeholder testimonial copy — real quotes and before/after results go here.",
      name: "Client Name",
      meta: "Remote Coaching · 6 months"
    },
    {
      stars: 5,
      quote: "Placeholder testimonial copy — real quotes and before/after results go here.",
      name: "Client Name",
      meta: "8-Week Build · 4 months"
    }
  ],

  // ----------------------------------------------------------
  // FAQ — shown on book.html
  // ----------------------------------------------------------
  faq: [
    {
      question: "What happens after I book a consult?",
      answer: "You'll get a confirmation through Calendly right away, and Marlon will follow up before the session to confirm goals and location."
    },
    {
      question: "Is the first consult really free?",
      answer: "Yes — the intro consult is a no-cost conversation to figure out the right program, not a sales pitch disguised as a session."
    },
    {
      question: "Do you train in-person or virtually?",
      answer: "Both. In-person sessions are based in Montclair, NJ; remote coaching is available anywhere with weekly programming and video form checks."
    },
    {
      question: "Can I reschedule a session?",
      answer: "Yes, through the same Calendly link used to book — just find the confirmation email and use the reschedule option."
    }
  ]

};
