# AllHands Robotics

Static startup website grounded in Unified Hand Action Space (UHAS) research. No build step or dependencies required. The original research website is preserved at `/UHAS/`.

## Preview

Open `index.html` in a browser, or serve this folder using any static HTTP server. The muted hero demo autoplays and loops. Reduced-motion preferences disable automatic playback.

## Publish on GitHub Pages

1. Create a public repository named `allhandsrobotics.github.io` in the `allhandsrobotics` organization.
2. Upload this project's `index.html`, `assets/`, `UHAS/`, `.nojekyll`, and `.github/workflows/pages.yml` to the repository's `main` branch.
3. In repository **Settings → Pages**, select **GitHub Actions** as the source.
4. Run the **Deploy GitHub Pages** workflow, or push another commit to `main`.

The organization site will be at https://allhandsrobotics.github.io/ after a successful deployment. The workflow also supports a project repository because all local asset URLs are relative.

## Content

Edit startup copy and links in `index.html`, styles in `assets/site.css`, and playback behavior in `assets/site.js`. The contact address is `contact@allhandsrobotics.com`. The five sections cover company vision, the problem, technology, data and foundation models, and team/contact.

The hero combines 15 seconds of the supplied Allegro and LEAP demonstrations. Founder profiles link to their personal websites; Jikai's portrait is sourced from the IRVL people page at labs.utdallas.edu/irvl/people/ and stored locally. The startup page has no analytics or external libraries. The original UHAS page retains its existing libraries and analytics.




