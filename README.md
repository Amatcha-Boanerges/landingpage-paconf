# Fivesixfive PA Conference Website

A modern, performant website for the Fivesixfive PA Conference built with Next.js 13+.

## 🚀 Tech Stack

- **Framework**: Next.js 13+ (App Router, TypeScript)
- **Styling**: Tailwind CSS + Headless UI
- **Animation**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Email**: SendGrid
- **Data**: JSON / Markdown (flat files)
- **Analytics**: Plausible / Vercel Analytics
- **Deployment**: Vercel

## 📁 Current Project Structure

```
fivesixfive-website/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js 13 app directory
│   │   ├── components/ # App-level components
│   │   ├── page.tsx    # Home page
│   │   └── layout.tsx  # Root layout
│   └── ...
├── project_setup/      # Project documentation
└── [config files]      # Various config files
```

## 🎯 Project Goals

1. Create a modern, responsive conference website
2. Implement RSVP functionality with email confirmations
3. Build modular, reusable components
4. Ensure excellent performance and SEO
5. Provide smooth animations and transitions

## 🛠️ Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Build for production: `npm run build`

## 📝 Tasks

See `project_setup/tasks.md` for detailed development tasks and progress.

## 🔒 Environment Variables

Required environment variables:

- `NEXT_PUBLIC_SITE_URL`: The base URL of the site
- `SENDGRID_API_KEY`: For email functionality (coming soon)

## 📄 License

MIT

## 📦 Prerequisites

Ensure the following are installed:

- [Node.js (LTS version)](https://nodejs.org/)
- [Git](https://git-scm.com/)

---

## 🔁 Clone the Repository and move to the develop branch

```bash
git clone https://github.com/Amatcha-Boanerges/landingpage-paconf.git
cd landingpage-paconf
git checkout develop
git pull origin develop

```

## 📂 Install Dependencies

Run the following in the root directory of the project:

```bash

npm install

```

This installs all required packages into node_modules.

## 🔐 Set Up Environment Variables

Environment files (like .env) are not committed to the repository.
Check for an .env.example file, or
Contact the project maintainer to get the .env file, then:

## 🏗️ Build and Run the App

```bash
Run in Development Mode
npm run dev

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

```

<!-- Build for Production
npm run build

Start in Production
npm start -->

## Getting Started

First, run the development server:

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Check the Project setup folder: Architecture, Git cheat sheet, UI-UX Guidelines to understand the structure.

## Next Steps - Create a new feature branch, push first to initialize the branch, start working on it

```bash
git checkout -b feat/hero-section
git checkout -b feat/awaityou
git checkout -b feat/whyattend
git commit -m "first version of why attend"
git push --set-upstream origin [your-branch-name]

```
