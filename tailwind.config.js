module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        blob: {
          0: {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": { transform: "translate(10px, -20px) scale(1.1)" },
          "66%": { transform: "translate(-15px, 10px) scale(0.9)" },
          "100%": { transform: "(0px, 0px) scale(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 3s ease-in-out",
        blob: "blob 9s infinite",
      },
      fontFamily: {
        mono: ["space mono", "monospace"],
        exo: ["exo", "monospace"],
      },
      backgroundImage: {
        "night-sky": "url('/src/images/nightsky.jpg')",
      },
      colors: {
        "theme-dark": "#0A0F22",
        "theme-dark-minor": "#1D2233",
        "theme-blue": "#56B2BB",
        text: "#e6fbff",
        background: "#040e10",
        primary: "#9fe9f9",
        secondary: "#00262e",
        accent: "#ca2159",
      },
      backgroundSize: {
        "size-200": "200% 200%",
        half: "0% 0%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      screens: {
        phone: "250px",
      },
    },
  },
  plugins: [],
};
