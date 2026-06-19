# Agent Instructions: Gemini API Key Onboarding UI

Hello Agent! 👋 

You are tasked with building a "dummy-proof" onboarding section on the user's Landing Page (built with React/Next.js, Tailwind, and likely Framer Motion). 
The goal is to explain to non-technical users how to get a Google Gemini API Key and insert it into the Focus App, without intimidating them with technical jargon.

## 🎯 The Objective
We need a visually appealing, interactive guide. Users must realize that getting "Free AI Access" takes exactly 3 clicks. If it looks like reading developer documentation, they will leave.

## 🛠 Tech Stack & Libraries to Use
- **Tailwind CSS:** For styling (use dark-mode themes, glassmorphism `backdrop-blur-xl`, purple/neon accents to match the desktop app).
- **Framer Motion:** Highly recommended for smooth step transitions, modal popups, and micro-interactions.
- **Lucide React:** For icons (e.g., `Key`, `ExternalLink`, `CheckCircle`).

## 📐 Implementation Plan

### 1. The Trigger Button
Place a highly visible, glowing button on the landing page (e.g., in a "Features" section or under the Download button).
- **Copy:** "Jak získat AI funkce zdarma?" or "Unlock Free AI Features"
- **Style:** Neon borders or a subtle pulse animation.

### 2. The Modal / Accordion Design
When the button is clicked, open a Modal or a horizontal step-by-step Carousel. 

**Structure the guide into EXACTLY 3 Steps:**

#### Step 1: Login to Google
- **Icon:** Link / User Icon
- **Copy:** "Přejdi na stránku Google AI Studio a přihlas se svým normálním Google účtem."
- **Action:** A big blue button saying `Otevřít Google AI Studio` linking to `https://aistudio.google.com/app/apikey` (with `target="_blank"`).

#### Step 2: Generate the Key
- **Icon:** Key
- **Copy:** "Klikni na modré tlačítko 'Create API Key' a zkopíruj si vygenerovaný text."
- **Visual:** You MUST use a placeholder image or a simple CSS mockup showing a blue button "Create API Key". Visuals are critical here. Do not rely just on text.

#### Step 3: Paste into App
- **Icon:** Settings / Paste
- **Copy:** "Otevři nastavení ve Focus App a vlož kód do políčka. Hotovo!"
- **Visual:** Show a small screenshot/mockup of the Focus App Settings screen with the API Key input field highlighted.

## ✨ UX Best Practices to Follow
- **No Developer Jargon:** Do not use words like "JSON, Requests, REST, Endpoints". Just call it a "Speciální Kód" or "Klíč".
- **Progressive Disclosure:** Use `framer-motion` to reveal Step 2 only after they read Step 1, or use an elegant horizontal slider. Don't dump a wall of text on them.
- **Copy to Clipboard:** If possible, tell them they just need to press `Ctrl+C` and `Ctrl+V`. 

## 📝 Example Code Structure (Mental Model)
```jsx
import { motion } from 'framer-motion';

export default function ApiGuideModal({ isOpen, onClose }) {
  // Use framer-motion <AnimatePresence> for the modal background
  // Map through an array of 3 steps
  // Use <motion.div layout> to seamlessly transition between steps
}
```

Good luck! Make it look premium, fast, and incredibly simple! 🚀
