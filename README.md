# Jeff Malley QB Development Mockup

Single-page website mockup for a quarterback coaching side hustle concept.

## Local preview

Open `index.html` in your browser.

## Payment setup

1. Create Stripe Payment Links for each package.
2. Replace placeholder URLs in `script.js` under `paymentLinks`.

## Lead capture setup

1. Create a Formspree form (or your preferred form endpoint).
2. Replace the placeholder form action in `index.html`.

## Deploy to GitHub Pages

This repo includes `.github/workflows/deploy-pages.yml`.

1. Push to `main`.
2. In GitHub repo settings, go to `Pages` and set source to `GitHub Actions`.
3. Wait for the workflow to complete.

Your site will publish at: `https://<username>.github.io/<repo-name>/`
