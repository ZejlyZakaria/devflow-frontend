/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Palette Dark Premium
        dark: {
          900: "#0A0E27",
          800: "#13182B",
          700: "#1C2238",
          600: "#252C45",
        },
        primary: {
          500: "#6366F1",
          600: "#4F46E5",
        },
        secondary: {
          500: "#8B5CF6",
          600: "#7C3AED",
        },
        success: "#10B981",
        warning: "#F59E0B",
        danger: "#EF4444",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(99, 102, 241, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};
