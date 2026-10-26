# Malcolm Sim — Personal Website

Personal website for Malcolm Sim Kah Kiek, a Network Computing undergraduate at Universiti Malaysia Sarawak (UNIMAS), mathematics tutor and chess coach.

**Live site:** https://malcolmskk.pages.dev/

## Pages

- Home: introduction and service overview
- About: education, interests and experience
- Services: mathematics tutoring and chess coaching
- Tutoring: school, pre-university and Competitive Mathematics (including Kangaroo Math and IMONST)
- Coaching: chess coaching and playing/coaching experience
- Research: wireless networks, traditional cryptography and post-quantum cryptography
- Contact: public contact details and social profiles
- Guided enquiry: prepares a tutoring or coaching message locally for visitors to copy and paste into WhatsApp

## Run locally

This is a static HTML, CSS and JavaScript site. No installation or build step is required.

With Python installed, run from this directory:

```sh
python -m http.server 8000
```

Then visit http://localhost:8000.

## Deployment

The live website is hosted on Cloudflare Pages. Upload the files in this directory as a static project; no build command is needed. The _headers file supplies Cloudflare security headers.

This repository does not configure automatic deployments. Updating it alone does not update the live Cloudflare site.

## Design

- Silk & Champagne palette
- Light, dark and device appearance settings
- Responsive layouts
- Custom flowing m + integral SVG monogram
- No analytics or external JavaScript dependencies

The appearance preference is saved in browser local storage. Public email addresses and profile links are intentionally included on the contact page.

## Guided enquiry privacy

Enquiry answers stay in page memory and are not submitted or saved. Visitors explicitly copy their prepared message and open the WhatsApp share link to paste and send it themselves. The website does not send messages automatically.
