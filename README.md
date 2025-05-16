# Smart Cooking – Prototype

Static preview of the site built with [Astro](https://astro.build), featuring UI components and hosted on [GitHub Pages](https://pages.github.com).

This repository serves as the **visual prototype** of the [Smart Cooking](https://github.com/TheSmartCooking) project. It provides a static, frontend-only version of the website, showcasing the user interface, design elements, and layout without backend or dynamic functionality.

---

## 🌟 About Smart Cooking

**Smart Cooking** is a project dedicated to helping everyone — especially students — cook healthy, enjoyable meals on a budget.

Our goal is to build a collaborative platform where users can share:

- 🥘 Recipes
- 💡 Tips & tricks
- 🧑‍🍳 Practical cooking advice

We aim to make healthy, budget-friendly cooking accessible and fun, without requiring specialized culinary knowledge.

🗓️ **Started:** June 2024
🚀 **Status:** In active development

## 📦 What’s in this Repository?

- Static frontend pages built using **Astro**
- Reusable UI components (e.g., headers, cards, buttons)
- Responsive layout and design previews
- Hosted via **GitHub Pages**

> [!NOTE]
> This repo does not include the backend logic, authentication, or database features. For that, see our main repositories and documentation below.

## 🧭 Project Resources

- 📚 [Smart Cooking Wiki](https://github.com/TheSmartCooking/.github/wiki) — Full documentation, database models, API reference, and development guides.
- 🏠 [TheSmartCooking Organization](https://github.com/TheSmartCooking) — Explore all repositories related to the project.
- 🌐 [GitHub Pages Preview](https://thesmartcooking.github.io/Prototype/)

## 🛠️ Tech Stack

- [Astro](https://astro.build) — Static site generator
- [GitHub Pages](https://pages.github.com) — Hosting platform
- [Docker](https://www.docker.com) — Dev container support
- [Dev Containers](https://containers.dev) — Reproducible development environment
- [GitHub Actions](https://docs.github.com/en/actions) — CI/CD and code quality workflows

## 🧪 Tooling & Automation

This repository includes development and automation tooling:

### ⚙️ Devcontainer

A Docker-based development container is defined in `.devcontainer/` for consistent onboarding and live-preview development. Features:

- 🐧 Alpine-based image with Node.js and Bash
- 🧱 VS Code extensions auto-installed (Astro, Trigger Tasks on Save)
- 🚀 Auto-forwarded port for local live server

### ✅ GitHub Workflows

- `deploy-to-pages.yml`: Build and deploy site to GitHub Pages on release
- `devcontainer-verification.yml`: Scan and validate `.devcontainer` image using a reusable workflow
- `super-linter.yml`: Run [Super Linter](https://github.com/github/super-linter) for static analysis and code consistency

## 🤝 Contributing

If you’d like to contribute to the UI or suggest improvements:

1. Fork this repository
2. Create a feature branch
3. Submit a pull request with a clear description

We welcome feedback, designs, and accessibility improvements!

## 📄 License

This **repository** is licensed under the [MIT License](LICENSE).
Please note that other repositories in the Smart Cooking project may use different licenses. Refer to the license file in each individual repository for details.

---

Thanks for checking out **Smart Cooking – Prototype**!
For full-stack development, roadmap, and community efforts, head over to our [Wiki](https://github.com/TheSmartCooking/.github/wiki).
