---
name: Ziaa
colors:
  surface: '#15121e'
  surface-dim: '#15121e'
  surface-bright: '#3b3745'
  surface-container-lowest: '#0f0c18'
  surface-container-low: '#1d1a26'
  surface-container: '#211e2b'
  surface-container-high: '#2c2835'
  surface-container-highest: '#373340'
  on-surface: '#e7dff2'
  on-surface-variant: '#dfbec8'
  inverse-surface: '#e7dff2'
  inverse-on-surface: '#322e3c'
  outline: '#a78992'
  outline-variant: '#584048'
  surface-tint: '#ffb0cc'
  primary: '#ffb0cc'
  on-primary: '#640038'
  primary-container: '#ff4fa2'
  on-primary-container: '#5d0033'
  inverse-primary: '#b7056b'
  secondary: '#eab2ff'
  on-secondary: '#510072'
  secondary-container: '#7b00aa'
  on-secondary-container: '#e5a3ff'
  tertiary: '#f0b6cf'
  on-tertiary: '#4a2437'
  tertiary-container: '#b9859c'
  on-tertiary-container: '#462033'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffd9e4'
  primary-fixed-dim: '#ffb0cc'
  on-primary-fixed: '#3e0020'
  on-primary-fixed-variant: '#8d0051'
  secondary-fixed: '#f7d8ff'
  secondary-fixed-dim: '#eab2ff'
  on-secondary-fixed: '#320047'
  on-secondary-fixed-variant: '#7400a0'
  tertiary-fixed: '#ffd8e7'
  tertiary-fixed-dim: '#f0b6cf'
  on-tertiary-fixed: '#320f22'
  on-tertiary-fixed-variant: '#643a4e'
  background: '#15121e'
  on-background: '#e7dff2'
  surface-variant: '#373340'
typography:
  display-lg:
    fontFamily: DM Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-md:
    fontFamily: DM Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: DM Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: DM Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  title-lg:
    fontFamily: DM Sans
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 24px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: auto
---

## Brand & Style
The design system for this private relationship app is built on a foundation of **Romantic Minimalism** and **Digital Intimacy**. It blends the structured logic of Material 3 with the ethereal aesthetics of Glassmorphism to create a space that feels both secure and enchanted. 

The visual direction prioritizes privacy and premium quality. Every interaction is designed to evoke a sense of "us," using soft textures, diffused light, and intentional whitespace to separate the shared digital space from the outside world. The aesthetic is clean and modern, avoiding clutter to allow the couple's personal content—photos, messages, and memories—to become the focal point.

## Colors
The palette is centered around the concept of "Midnight Romance." The primary color, a vibrant Romantic Pink, is used for core actions and emotional highlights. The Secondary Soft Purple provides depth and a sense of mystery, while the Light Blush Accent acts as a delicate highlight for secondary information.

The default mode is **Dark**, utilizing the Deep Midnight background to create a sense of privacy and focus. The Soft Rose White is reserved for light-mode alternates or specific high-contrast "paper" moments within the UI. Gradients should be used sparingly but impactfully on primary buttons and key navigation elements to suggest movement and energy.

## Typography
The typography uses **DM Sans** to maintain a modern, geometric clarity that feels contemporary and approachable. 

- **Headlines:** Use high-weight variants with tight letter spacing for an editorial, premium feel. 
- **Body Text:** Maintains generous line height to ensure readability during long messaging sessions or journal entries.
- **Expressive Use:** In specific romantic contexts (like anniversaries or milestones), headlines may use "Display" sizes to create a sense of occasion. 
- **Hierarchy:** Maintain a clear distinction between the "shared history" (large headlines) and "functional utility" (small, clean labels).

## Layout & Spacing
The layout follows a **Fluid Grid** model with a soft, spacious rhythm. On mobile, the system uses a 4-column grid with 20px side margins to accommodate the high corner radii of containers without clipping content.

Spacing follows an 8px incremental scale, but with a preference for larger gaps (24px, 32px, 48px) to create the "Minimal/Elegant" feel. Components should feel like they are floating within the deep midnight canvas rather than being packed tightly together. Use "Safe Areas" generously to ensure that the interface feels unhurried and calm.

## Elevation & Depth
This design system utilizes **Glassmorphism** as its primary method of establishing hierarchy. Instead of traditional solid shadows, depth is achieved through:

1.  **Glass Layers:** Containers use a background opacity of 8–12% (White) with a `backdrop-filter: blur(20px)`.
2.  **Stroke Definition:** Every glass container must have a 1px solid border at 10% opacity (White) to define its edges against the dark background.
3.  **Soft Layered Shadows:** For high-priority elements like floating action buttons or active cards, use extremely diffused shadows (Blur: 40px, Opacity: 20%) tinted with the Primary Pink color to simulate a "glow" rather than a drop shadow.
4.  **Z-Index Logic:** Higher elevation elements should have a slightly higher background opacity and a stronger blur to appear "closer" to the user.

## Shapes
The shape language is defined by **Extreme Softness**. 
- **Standard Components:** Use a 2xl radius (1.5rem / 24px) for most buttons and small cards.
- **Primary Containers:** Use a 3xl radius (2rem / 32px or higher) for main content areas and glass sheets.
- **Interactive Elements:** Use full pill-shaping (rounded-full) for tags, chips, and small pill-buttons to contrast against the larger structural containers.

## Components
- **Glass Cards:** The signature component. Transparent background, high blur, and subtle border. Content inside should have high contrast (White or Primary Pink).
- **Romantic Buttons:** Primary buttons use the `romantic_glow` gradient with white text. Secondary buttons are "Ghost" style with a glass background and a pink 1px border.
- **Input Fields:** Semi-transparent containers with the same corner radius as cards. On focus, the 1px border transitions from 10% white to 100% Primary Pink.
- **Chips/Tags:** Pill-shaped, using the `soft_blush` gradient or a low-opacity Purple background to categorize memories or shared interests.
- **Floating Heart Action:** A circular, high-elevation button (FAB) that houses the most frequent shared actions, using a soft floating animation.
- **Motion & Micro-interactions:** Use "Soft Fades" (300ms ease-out) for screen transitions. Floating elements should have a subtle 2px vertical "breath" animation to feel alive and organic.