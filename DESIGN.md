---
name: Aurora
description: Hardcore focus companion
colors:
  primary: "#8B5CF6"
  secondary: "#EC4899"
  tertiary: "#0EA5E9"
  neutral-bg: "#0B0A15"
typography:
  display:
    fontFamily: "'Poppins', sans-serif"
    fontWeight: 900
    letterSpacing: "-0.05em"
  body:
    fontFamily: "'Poppins', sans-serif"
    fontWeight: 300
    lineHeight: 1.625
rounded:
  full: "9999px"
  card: "1.5rem"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  button-primary:
    backgroundColor: "rgba(139, 92, 246, 0.2)"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
  card-glass:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    rounded: "{rounded.card}"
---

# Design System: Aurora

## 1. Overview

**Creative North Star: "The Synthwave Terminal"**

The visual identity of Aurora is intense, focused, and neon-lit. It relies on vibrant, glowing, high-contrast elements against a deep, dark canvas to command attention and lock the user into a state of deep focus. The system explicitly rejects playful or childish designs, as well as busy and overwhelming layouts. Everything serves the hardcore nature of the application.

**Key Characteristics:**
- Deep space backgrounds paired with vibrant neon accents
- High contrast and legible typography
- Luminous depth through glowing shadows
- Clean, tactile, and immersive surfaces

## 2. Colors

The palette is intense and glowing, anchoring the application in a digital, terminal-like space.

### Primary
- **Focus Purple** (#8B5CF6): The core brand color. Used for primary actions, ambient glows, and emphasizing key focus states.

### Secondary
- **Alert Magenta** (#EC4899): Used for secondary accents and high-priority alerts where Focus Purple might not provide enough contrast.

### Tertiary
- **Neon Cyan** (#0EA5E9): Used sparingly for accents and data visualization to complement the warmer purples and pinks.

### Neutral
- **Deep Space Black** (#0B0A15): The foundational background color. It creates a vast, infinite canvas that makes the neon colors pop.

## 3. Typography

**Display Font:** 'Poppins', sans-serif
**Body Font:** 'Poppins', sans-serif

**Character:** A modern, geometric sans-serif that balances approachability with technical precision.

### Hierarchy
- **Display** (Black/900, clamp(3.5rem, 8vw, 7rem), -0.05em): Hero sections and massive statements.
- **Headline** (Bold/700, clamp(2.25rem, 5vw, 4.5rem), normal): Section titles and primary dividers.
- **Body** (Light/300, 1.25rem, 1.625): Long-form reading and descriptive text. Maximum line length capped to ensure readability.

## 4. Elevation

Luminous Depth. Surfaces are dark, and elements float using colored glows instead of traditional black drop shadows.

### Shadow Vocabulary
- **Primary Glow** (`box-shadow: 0 0 30px rgba(139, 92, 246, 0.3)`): Used behind primary buttons and active focus elements to create a floating, energized effect.
- **White Glow** (`box-shadow: 0 0 20px rgba(255, 255, 255, 0.2)`): Used sparingly to lift neutral or secondary elements off the deep space background.

**The Glow Rule.** Traditional black drop shadows are prohibited. Depth is exclusively communicated through colored light (glows) and glassmorphism (blurs).

## 5. Components

Components are tactile and immersive, featuring glassy surfaces, soft glows, and responsive hovers.

### Buttons
- **Shape:** Fully rounded pill (9999px)
- **Primary:** Translucent purple background (`rgba(139, 92, 246, 0.2)`) with a solid purple border and a primary glow. Padding is generous (16px 32px).
- **Hover / Focus:** Background transitions to solid Focus Purple; the element scales down slightly (`active:scale-95`) to feel highly tactile.

### Cards / Containers
- **Corner Style:** Softly rounded (1.5rem / 24px)
- **Background:** Barely visible white (`rgba(255, 255, 255, 0.05)`)
- **Shadow Strategy:** Luminous Depth via glows and glassmorphism (12px backdrop blur)
- **Border:** Subtle white stroke (`1px solid rgba(255, 255, 255, 0.1)`)

## 6. Do's and Don'ts

### Do:
- **Do** use OKLCH or hex colors that match the intense, neon-lit Synthwave Terminal aesthetic.
- **Do** rely on glassmorphism and colored glows to separate overlapping elements.
- **Do** keep layouts clean and focused, directing the user to a single primary action per view.

### Don't:
- **Don't** use playful, childish, or overly corporate SaaS design patterns.
- **Don't** create busy, overwhelming layouts with multiple competing calls to action.
- **Don't** use traditional black drop shadows for elevation; always use luminous glows.
