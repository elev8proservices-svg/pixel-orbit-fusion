# Faisal Media Studio

Build a modern, premium single-page website for "Faisal Media" — a personal digital marketing & creative design services business that works across industries (originally healthcare-focused, now positioned for any business type: retail, restaurants, salons, real estate, education, hospitality).

DESIGN SYSTEM

- Dark, premium, editorial aesthetic — not a generic SaaS template

- Colors: deep ink/charcoal background (#12161c), warm ivory/pale-sage light sections (#eef1ef, #e3e7e3), deep teal accent (#2f6f5e / #3f9683 bright teal), warm amber accent (#e8a33d), muted slate grey text (#6b7280)

- Typography: "Fraunces" serif (Google Font) for headlines with italic accents on key words, "Inter" for body text, "JetBrains Mono" for small labels/eyebrows/stats in uppercase letter-spaced style

- Rounded pill buttons, thin 1px borders with low opacity, soft glow shadows on accent elements

- Sticky nav bar that turns from transparent to a blurred dark bar on scroll

3D REQUIREMENT (important)

- Hero section must include a real interactive 3D graphic built with Three.js (not a static image or CSS animation)

- The 3D scene: a wireframe icosahedron "core" sphere in the center, with 6 smaller octahedron "nodes" of different accent colors orbiting around it in 3D space at slightly different radii/tilts/speeds, plus a sparse starfield of small particles in the background

- User can click-and-drag (mouse or touch) to rotate the whole orbit; when not dragging it auto-rotates slowly

- Add a small caption under the canvas: "drag to rotate — every node is an industry I've worked with"

- Also add a second, smaller decorative rotating wireframe 3D shape near the About section photo

- Add a 3D tilt-on-hover effect (perspective + rotateX/rotateY following cursor position) on all service cards and project cards

SECTIONS (in order)

1. Sticky nav: logo "Faisal Media." with a small circular gradient logo mark, links (About, Services, Work, Process, Pricing, Contact), "Hire me" pill CTA button

2. Hero: eyebrow tag "AVAILABLE FOR PROJECTS" with pulsing dot, big uppercase headline "Faisal.", subheading "Digital Marketing Executive & Creative Designer", short paragraph about 5+ years experience across healthcare and other industries, two CTA buttons ("Start a project", "View my work"), a 4-column stat strip (50+ Projects, 5+ Years exp, 15+ Clients, 6 Verticals), and the 3D orbit graphic on the right

3. Scrolling marquee strip of industry names (Healthcare, Retail, Restaurants, Salons & Spas, Real Estate, Education, Hospitality, Personal Brands) on a dark background, infinite horizontal loop

4. About section: photo placeholder card with name overlay and small 3D accent shape, a row of skill pills (Healthcare Marketing, Brand Strategy, Social Media, Graphic Design, Video Editing, Meta Ads), heading "Design that moves. Marketing that converts.", intro paragraph, and a vertical timeline (2026 Freelancing, 2025 Digital Marketing Executive at Parida Red Lion Pvt, 2023 Graphic Designer at GB Enterprises Pvt Ltd, 2021 Graphic Designer at DDN Media)

5. Services section (dark background) — 6 cards in a 3-column grid: Digital Marketing, Social Media Management, Brand Building & Design, Meta & Google Ads, Exhibition & Event Design, Video Editing & Production — each with an icon, title and short description

6. Selected Projects section with filter pill buttons (All, Healthcare, Social Media, Design, Video, Freelancing) that filter a 3-column grid of project cards (dark gradient thumbnails with a category tag top-left and title/case-study-year bottom overlay)

7. Process section — 4 numbered steps in a row: 01 Discovery, 02 Strategy, 03 Execution, 04 Results, each with a short description

8. Pricing section — 3 tiers: Starter ₹9,999/mo, Growth ₹17,999/mo (marked "Most Popular", visually elevated/featured card), Authority ₹26,999/mo, each with a feature checklist and a CTA button, plus a note that ad spend is billed separately

9. Contact section (dark) — left side: heading "Let's build something great.", paragraph, and a 2x2 grid of contact info cards (Call direct, Email, WhatsApp, Available for Remote worldwide). Right side: a contact form (name, phone/email, service dropdown, project details textarea, submit button) that on submit opens WhatsApp (wa.me link) with the form data pre-filled as a message

10. Simple footer with copyright text and location

Make it fully responsive for mobile, with smooth scroll and subtle scroll-based header transition. Keep all copy professional and specific to a freelance digital marketing/design consultant who wants inbound leads from any type of business.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3a9051ec-a516-42cd-8270-affa04fd276a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
