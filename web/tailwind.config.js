module.exports = {
  theme: {
    colors: {
      grey: "#F5F5F5",
      black: "black",
      white: "white",
    },
    fontFamily: {
      heading: ["Agrandir Grand", "sans-serif"],
      body: ["Plain", "sans-serif"],
      serif: ["Times LT Std", "sans-serif"],
    },
    extend: {
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "1280px",
        },
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      opacity: {
        5: "0.05",
        15: "0.15",
        35: "0.35",
        65: "0.65",
      },
    },
  },
  variants: {
    extend: {
      rotate: ["hover"],
    },
  },
};
