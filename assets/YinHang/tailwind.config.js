/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightBlue: "hsl(219,79%,59%)",
        brightBlueLight: "hsl(219,79%, 69%)",
        brightBlueSupLight: "hsl(219,79%, 95%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDark: "hsl(233, 12%, 13%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
