# Whitebrew Tailwind CSS & daisyUI Refactoring Plan

## 🎯 Goal
Refactor the current plain CSS/HTML structure into a modern, maintainable design using **Tailwind CSS v4** and **daisyUI**.

## 🚀 Strategy
1.  **Framework Integration:** Use Tailwind CSS v4 and daisyUI via CDN for a "no-build" plain HTML experience (as requested).
2.  **Theme Selection:** Use the daisyUI `business` or `night` theme to match the "Future IT" aesthetic.
3.  **Component Migration:**
    - Replace custom grid/column classes with Tailwind `grid` and `flex`.
    - Replace buttons with daisyUI `btn` components.
    - Replace the navigation bar with a daisyUI `navbar`.
    - Replace cards/sections with daisyUI `card` and `hero` components.

## 🏛️ New Structure (Tailwind + daisyUI)

### 1. Global Setup
- Add Tailwind CSS v4 Play CDN.
- Add daisyUI CDN.
- Define a custom Tailwind config (if needed) for specific brand colors.

### 2. Layout Refactor
- **Navbar:** daisyUI `navbar` with glassmorphism (`bg-base-100/80 backdrop-blur`).
- **Hero:** daisyUI `hero` with a refined background and centered content.
- **Sections:** Standardized spacing using Tailwind `py-20` or `py-32`.
- **Cards:** daisyUI `card` with `bg-base-200` or `bg-neutral`.

### 3. Design System Alignment (Refined)
- **Primary Color:** Electric Indigo (`#6366f1`) - mapped to daisyUI `primary`.
- **Secondary Color:** Vibrant Purple (`#a855f7`) - mapped to daisyUI `secondary`.
- **Accent Color:** Cyan (`#22d3ee`) - mapped to daisyUI `accent`.
- **Background:** Deep Dark (`#0a0b10`) - handled by `night` or `business` theme.

## 🛠️ Step-by-Step Execution

1.  **Draft the new HTML structure** in a temporary file (e.g., `index-new.html`).
2.  **Integrate Tailwind & daisyUI** scripts in the head.
3.  **Refactor Hero section** to use daisyUI `hero`.
4.  **Refactor About/Vision section** using `card` and `flex-row`.
5.  **Refactor Capabilities section** using `grid` and `card`.
6.  **Refactor Clients section** using `flex-wrap` and grayscale hover effects.
7.  **Finalize Navigation and Footer**.
8.  **Replace `index.html`** with the new refactored version.

## 📅 Next Steps
1.  Prepare the head of `index.html` with Tailwind/daisyUI.
2.  Refactor the Hero and Navbar.
