# Whitebrew Design Specification (v1)

## 🎨 Color Palette (Future-Oriented IT)

We will move away from the "Gold/Agency" look towards a "Deep Tech/Innovation" aesthetic. 

### Core Colors (Dark Mode First approach)
- **Background Primary:** `#0a0b10` (Deep Midnight Black)
- **Background Secondary:** `#161821` (Soft Dark Slate)
- **Surface/Card:** `rgba(255, 255, 255, 0.05)` (Glassmorphism effect)

### Accent Colors
- **Primary Accent:** `#6366f1` (Electric Indigo) - For main buttons and highlights.
- **Secondary Accent:** `#a855f7` (Vibrant Purple) - For gradients and secondary highlights.
- **Success/Innovation:** `#22d3ee` (Cyan/Electric Teal) - For tech-focused callouts.

### Text Colors
- **Text Primary:** `#f8fafc` (Off-white)
- **Text Secondary:** `#94a3b8` (Slate Gray)
- **Text Muted:** `#64748b`

---

## 🔠 Typography

We need fonts that communicate engineering precision and modern simplicity.

### 1. Primary Sans-Serif: **Inter**
- **Usage:** Body text, Navigation, UI elements.
- **Why:** Highly readable, modern, and widely used in top-tier tech products.
- **Google Font:** `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap`

### 2. Display/Heading: **Montserrat** or **Space Grotesk**
- **Choice:** **Space Grotesk**
- **Usage:** Main Headlines (Hero section), Section Titles.
- **Why:** "Space Grotesk" has a slightly "techy" and "futuristic" feel without being over-the-top.
- **Google Font:** `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap`

---

## ✨ UI/UX Elements

### 1. Glassmorphism
- Use `backdrop-filter: blur(12px)` for the sticky navigation bar and service cards.
- Subtle `1px` border with `rgba(255, 255, 255, 0.1)`.

### 2. Gradients
- Use linear gradients for the Hero section text (Indigo to Purple).
- Subtle glow effects (radial gradients) behind key product sections (Monolinc).

### 3. Interactions
- Hover states for buttons: Slight scale up (`1.05`) and glow effect.
- Smooth transitions for all state changes (0.3s ease-in-out).

---

## 🛠️ Implementation Strategy (CSS Variables)

We will define these in a new `css/theme.css` or inject them into `:root` in `style.css`.

```css
:root {
  --color-bg-primary: #0a0b10;
  --color-bg-secondary: #161821;
  --color-accent-primary: #6366f1;
  --color-accent-secondary: #a855f7;
  --color-accent-tech: #22d3ee;
  --color-text-primary: #f8fafc;
  --color-text-secondary: #94a3b8;
  --font-main: 'Inter', sans-serif;
  --font-heading: 'Space Grotesk', sans-serif;
  --glass-bg: rgba(255, 255, 255, 0.03);
  --glass-border: rgba(255, 255, 255, 0.1);
}
```
