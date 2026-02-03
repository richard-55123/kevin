/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* =======================
   COULEURS – RAF 2026
======================= */
      colors: {
        primary: "#0A1B3D",     // Bleu nuit institutionnel
        secondary: "#1E40AF",   // Bleu Québec / business
        accent: "#C1121F",      // Rouge Canada (CTA, important)
        gold: "#D4AF37",        // Or premium (événement, badges)
        background: "#FFFFFF",

        raf: {
          dark: "#0A1B3D",      // Titres / footer
          blue: "#1E40AF",      // Boutons principaux
          red: "#C1121F",       // CTA / alertes
          gold: "#D4AF37",      // Highlights / prix / badges
          light: "#E8EDFF",     // Sections claires
          white: "#FFFFFF",
          black: "#000000",
        },

        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },

      /* =======================
         POLICES
      ======================= */
      fontFamily: {
        sans: ["Poppins", "Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Lora", "serif"],
      },

      /* =======================
         BREAKPOINTS
      ======================= */
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      /* =======================
         CONTAINER
      ======================= */
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          md: "2rem",
          lg: "3rem",
          xl: "4rem",
        },
      },

      /* =======================
         BORDER RADIUS
      ======================= */
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },

      /* =======================
         SHADOWS
      ======================= */
      boxShadow: {
        soft: "0 4px 12px rgba(11, 15, 43, 0.08)",
        bold: "0 6px 20px rgba(11, 15, 43, 0.15)",
        card: "0 10px 25px rgba(11, 15, 43, 0.12)",
        primary: "0 8px 30px rgba(79, 99, 255, 0.35)",
      },

      /* =======================
         ANIMATIONS
      ======================= */
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },

      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        slideUp: "slideUp 0.8s ease-in-out",
        slideDown: "slideDown 0.8s ease-in-out",
      },

      /* =======================
         SPACING
      ======================= */
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
}

