# HTML + Tailwind Landing Page Boilerplate

This is a flexible and modern HTML boilerplate for single-page websites. It uses **TailwindCSS v4**, **Vite** as the build tool, and **Handlebars** for templating. It’s designed to power the landing page tutorials on my YouTube channel — and it’s perfect for developers looking to build fast, customisable, static websites with dynamic structure.

## 🚀 Features

- ⚡ Built with Vite for super-fast development
- 🎨 TailwindCSS v4 for styling
- 🯙 Handlebars for templating with support for partials
- 📂 Dynamic content sections driven by JSON data
- 📨 Contact form powered by Formspree
- 🔁 Live reload on changes (including partials)

## Here from my Youtube video? Here are the scripts I use:

📂 Mac Users script to setup initial files:
mkdir -p public src/data src/js src/pages src/partials/icons src/styles && touch src/pages/index.html src/partials/footer.html src/partials/form-field.html src/partials/head.html src/partials/header-navlink.html src/partials/header.html src/partials/logo.html src/partials/logocloud.html src/partials/mobile-menu.html src/partials/section-about.html src/partials/section-contact.html src/partials/section-faq.html src/partials/section-features.html src/partials/section-hero.html src/partials/section-pricing.html src/partials/section-testimonials.html src/partials/section-wrapper.html src/partials/subtitle.html src/partials/title.html src/styles/animations.css src/styles/button.css src/styles/main.css src/styles/mobile-menu.css src/styles/navbar.css src/styles/tailwind-config.css src/js/contact.js src/js/main.js src/js/mobile-menu.js

📂 Windows users script to setup initial files:
mkdir public && mkdir src && mkdir src\data && mkdir src\js && mkdir src\pages && mkdir src\partials && mkdir src\partials\icons && mkdir src\styles && type nul > src\pages\index.html && for %f in (footer form-field head header-navlink header logo logocloud mobile-menu section-about section-contact section-faq section-features section-hero section-pricing section-testimonials section-wrapper subtitle title) do type nul > src\partials\%f.html && for %f in (animations button main mobile-menu navbar tailwind-config) do type nul > src\styles\%f.css && for %f in (contact main mobile-menu) do type nul > src\js\%f.js

📂 NPM Install scripts:
npm install @tailwindcss/typography @tailwindcss/vite tailwindcss && npm install --save-dev prettier vite vite-plugin-handlebars

---

## App Preview

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit-brightgreen?style=for-the-badge)](https://html-tailwind-landing-boilerplate.vercel.app/)

---

## 📦 Installation & Usage

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or higher)
- [npm](https://www.npmjs.com/)

### Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/PixelRocket-Shop/youtube-html-tailwind-landing-boilerplate.git
   cd youtube-html-tailwind-landing-boilerplate
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for Production**

   ```bash
   npm run build
   ```

   Output files will be available in the `dist` directory.

5. **Preview the Production Build**

   ```bash
   npm run preview
   ```

---

## 🯙️ Dynamic Sections via JSON

The homepage layout is dynamically generated from a JSON file located at:

```
src/data/sections.json
```

Each object in this file represents a page section and includes:

- An `id`
- A `partial` (the name of the Handlebars partial to use)
- Optional `section-classes` for custom styling

**Example:**

```json
[
  {
    "id": "hero",
    "partial": "section-hero",
    "section-classes": "pt-16 lg:pt-32"
  },
  {
    "id": "about",
    "partial": "section-about"
  },
  {
    "id": "features",
    "partial": "section-features"
  }
]
```

This is rendered in your `index.html` like so:

```handlebars
<main>
  {{#each sections}}
    {{#> section-wrapper}}
      {{> (lookup . "partial") }}
    {{/section-wrapper}}
  {{/each}}
</main>
```

To add, remove, or reorder sections, simply update the `sections.json` file.

---

## 📨 Contact Form (Formspree)

This project includes a ready-to-go contact form using [Formspree](https://formspree.io/).

You **must update** the form `action` attribute with your own Formspree endpoint URL for the form to work correctly.

**Example:**

```html
<form
  action="https://formspree.io/f/your-form-id"
  method="POST"
  id="contact-form"
  class="grid gap-x-6 gap-y-8 lg:grid-cols-2 w-full md:w-md lg:w-lg"
>
  <!-- form fields here -->
</form>
```

**Setup:**

- Sign up at [Formspree](https://formspree.io/)
- Create a new form
- Replace the `action` URL with your new Formspree endpoint

Form submissions are handled using a standalone JavaScript file which displays a confirmation message without reloading the page.

---

## 🛠️ Troubleshooting

### Hot Module Reload (HMR) Not Working?

If changes stop appearing automatically in the browser:

1. Stop the development server.
2. Restart the server:

   ```bash
   npm run dev
   ```

---

## 📄 License

This project is open source and licensed under the MIT License.

---

## 💬 Contact Me

You can find my website [here](https://www.pixelrocket.store) for more web development resources and tutorials.

If you have any questions, feel free to email me at [support@pixelrocket.store](mailto:support@pixelrocket.store).
