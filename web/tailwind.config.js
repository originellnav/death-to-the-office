module.exports = {
  theme: {
    colors: {
      primary: "#3E80FE",
      border: "#E9E9E9",
      grey: "#F5F5F5",
      black: "black",
      white: "white",
    },
    fontFamily: {
      heading: ["Agrandir Grand", "sans-serif"],
      body: ["Plain", "sans-serif"],
      serif: ["Times LT Std", "serif"],
    },
    boxShadow: {
      input: "0px 7px 15px rgba(0, 0, 0, 0.04)",
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
        10: "0.1",
        20: "0.2",
        30: "0.3",
        40: "0.4",
        50: "0.5",
        60: "0.6",
        70: "0.7",
        80: "0.8",
        90: "0.9",
      },
    },
  },
  variants: {
    extend: {
      rotate: ["hover"],
    },
  },
};
