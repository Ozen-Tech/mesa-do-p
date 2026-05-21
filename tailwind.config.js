/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#D4AF37",
          50: "#FBF6E5",
          100: "#F6ECC4",
          200: "#EDD982",
          300: "#E4C540",
          400: "#D4AF37",
          500: "#B89530",
          600: "#8E7325",
          700: "#65521A",
          800: "#3C320F",
          900: "#1A1605",
        },
        secondary: {
          DEFAULT: "#C67C4E",
          50: "#F8EDE4",
          100: "#F0DAC8",
          200: "#E1B591",
          300: "#D29059",
          400: "#C67C4E",
          500: "#A4633D",
          600: "#7E4C2F",
          700: "#583521",
          800: "#321E13",
          900: "#0C0705",
        },
        foreground: "#3D2817",
        background: "#F5E6D3",
        muted: "#5C4A3D",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Georgia", "serif"],
        serif: ['"Lora"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-divider":
          "linear-gradient(to right, transparent, #D4AF37, transparent)",
      },
      boxShadow: {
        gold: "0 10px 40px -10px rgba(212, 175, 55, 0.45)",
      },
      animation: {
        "bounce-slow": "bounce 2.5s infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "pulse-slow": "pulseSlow 2.5s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSlow: {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 10px 40px -10px rgba(212, 175, 55, 0.45)",
          },
          "50%": {
            transform: "scale(1.03)",
            boxShadow: "0 15px 50px -10px rgba(212, 175, 55, 0.7)",
          },
        },
      },
    },
  },
  plugins: [],
};
