# Whitebrew Homepage Redesign Plan (v1)

## 🎯 Goal
Transform the Whitebrew homepage from a "Digital Agency" into a "Future-Oriented IT SW Company".

## 🚀 Key Themes
1.  **Innovation-First:** Highlight Whitebrew as an engineering-driven software firm.
2.  **Monolinc Spotlight:** Briefly mention the "Monolinc" messenger as a showcase of Whitebrew's technical capability.
3.  **Modern Aesthetic:** Transition from the current design to a clean, dark-themed (or modern-light) interface with accent colors like deep blue, violet, and electric teal.
4.  **Performance:** Keep it lightweight using Plain HTML, CSS, and Vanilla JS for GitHub Pages.

## 🏛️ Structure (One-Page Layout)

1.  **Hero Section:** 
    - **Current:** "Digital Agency"
    - **New:** Bold headline focusing on "Building the Future of Communication and Software" or "Engineering Next-Generation Software". 
    - Background: Subtle tech-inspired animation (e.g., node connections or abstract data flow).

2.  **Product/Innovation (New Section):** 
    - Introduce "Monolinc". 
    - Focus on the technical prowess required for real-time messaging.
    - (Optional) Link to the separate Monolinc product page, but keep it subtle.

3.  **Services (Refactored):**
    - Shift from "Agency" services (planning, web dev) to "Core Engineering Capabilities":
        - Distributed Systems
        - High-Performance Mobile Apps
        - Real-time Communication Architecture
        - Cloud-Native Infrastructure

4.  **Clients (Maintain but Clean):**
    - Keep existing high-profile clients (Sephora, etc.) but update the UI to match the new theme.

5.  **About/Vision:**
    - Whitebrew’s philosophy: Crafting code that solves complex problems.

6.  **Contact:** 
    - Minimalist form or clear contact information.

## 🛠️ Technical Plan

1.  **CSS Overhaul:**
    - Use CSS Variables for the color palette.
    - Implement CSS Grid and Flexbox for a robust, responsive layout.
    - Remove unused legacy CSS from `style.css` and `animate.css`.
    - Introduce "Glassmorphism" or subtle gradients to the UI elements.

2.  **JavaScript Modernization:**
    - Audit existing `js/` directory. 
    - Replace jQuery-heavy logic with Vanilla JS where possible to reduce weight.
    - Implement a custom smooth-scroll and intersection observer for animations.

3.  **Asset Management:**
    - Use SVG icons instead of FontAwesome where possible to improve performance.
    - Optimize current customer logos and images.

4.  **GitHub Pages Ready:**
    - Ensure all paths are relative and the build is ready for zero-config GitHub Pages deployment.

## 📅 Next Steps
1.  Define the final color palette and font pairing (Architect + Design).
2.  Create a detailed wireframe (Design).
3.  Draft the core copy (Marketing).
4.  Begin HTML/CSS refactoring (Developer).
