/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        page: "#0b0b0c",
        surface: "#141416",
        raised: "#1c1c1f",
        line: "#2a2a2e",
        ink: "#f0efec",
        ink2: "#b9b8b2",
        muted: "#86857f",
        accent: "#3987e5",
        accent2: "#6da7ec",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      maxWidth: { page: "1120px" },
      keyframes: { fade: { "0%": { opacity: 0, transform: "translateY(6px)" }, "100%": { opacity: 1, transform: "none" } } },
    },
  },
  plugins: [],
};
