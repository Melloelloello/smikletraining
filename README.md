# Marlon Smikle Training — Website

Black & yellow "Iron Grid" site with a Calendly booking embed. Plain HTML/CSS/JS —
no build step, no npm install required.

## Files

```
index.html        Home page
programs.html      Full program breakdown
book.html          Full Calendly booking + FAQ
results.html       Client results & stats
contact.html        Contact form + contact info
config.js          <-- EDIT THIS to change site content
css/styles.css      Shared styles (theme, layout)
js/site.js          Renders config.js into the pages — no need to edit
netlify.toml        Netlify deploy config
```

## Editing the site

Almost everything on the site — the headline, prices, testimonials, stats,
the Calendly link, contact info, FAQ — lives in **`config.js`**. Open that
file, change the text between the quotes, save, and push to GitHub.
That's it for day-to-day updates.

Only touch `index.html` / `programs.html` / etc. if you want to change the
*layout* (add a new section, reorder things). Only touch `css/styles.css` to
change colors, fonts, or spacing. You shouldn't need to touch `js/site.js`
at all.

## Changing the Calendly link

In `config.js`, find:

```js
calendlyUrl: "https://calendly.com/marlon-smikle-rzrv"
```

Change that one line and every booking embed/button on the whole site
updates automatically.

## Deploying (GitHub + Netlify)

1. Create a new GitHub repo and push this folder to it:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
2. In Netlify: **Add new site → Import an existing project → GitHub** →
   select the repo.
3. Build settings: leave **build command blank** and set **publish
   directory to `.`** (this is already set in `netlify.toml`, so Netlify
   should pick it up automatically).
4. Deploy. Netlify will give you a `*.netlify.app` URL immediately; a
   custom domain can be added afterward under **Domain settings**.
5. From now on, any push to `main` auto-deploys the updated site —
   including edits to `config.js`.

## Notes on the Calendly embed

The embed's colors are set via URL parameters (`background_color`,
`text_color`, `primary_color`) in `js/site.js`. Full color customization
of the *inline* widget is a **Calendly paid-plan feature** — on a free
plan, the widget may fall back to Calendly's default white/blue look
inside the dark card. If that happens, either upgrade the Calendly plan
or swap the inline embed for a **popup button** instead (Calendly popups
respect the site's page background instead of needing a themed iframe).

## Placeholder content still to replace

Search `config.js` for anything written in `XX`, `X`, or "Placeholder" —
those are stand-ins for real pricing, stats, and testimonials that should
be swapped in before this goes live to real clients.
