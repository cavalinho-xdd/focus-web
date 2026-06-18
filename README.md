# Aurora App - Official Website

This is the official landing page for **Aurora**, the hardcore focus companion. 

## About Aurora

Aurora is a productivity application that doesn't just count down a timer—it actively forces you to focus by mercilessly blocking distractions. 

**Key Features:**
- 🛡️ **System Blocker**: Instantly terminates distracting applications (like Discord or games) at the system level.
- 🔒 **Hardcore Mode**: When activated, the application cannot be closed by any means until the focus phase is complete.
- 🧠 **AI Evaluation**: Integrates with Google Gemini. After a session, the AI will test you on what you learned, awarding a rating and XP.

## Tech Stack

This landing page is built with modern web technologies:
- **React** + **Vite** for fast development and rendering.
- **Tailwind CSS** for utility-first styling and responsive design.
- **Framer Motion** for smooth, dynamic animations and micro-interactions.
- **i18next** for internationalization (fully translated into English & Czech).
- **Lucide React** for beautiful, consistent iconography.

## Getting Started

To run the website locally:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Dynamic Downloads

The website automatically pulls the latest alpha/beta release binaries (`.exe`, `.dmg`, `.AppImage`, `.deb`) from the main Aurora GitHub repository via the GitHub API. No manual website deployment is needed when a new app version is released.

## License

All rights reserved.
