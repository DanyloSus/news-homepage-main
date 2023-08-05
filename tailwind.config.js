/** @type {import('tailwindcss')".Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-orange": "hsl(35, 77%, 62%)",
        "soft-red": "hsl(5, 85%, 63%)",

        "off-white": "hsl(36, 100%, 99%)",
        "grayish-blue": "hsl(233, 8%, 79%)",
        "dark-grayish-blue": "hsl(236, 13%, 42%)",
        "very-dark-blue": "hsl(240, 100%, 5%)",
      },
      screens: {
        md: { max: "768px" },
      },
      spacing: {
        menu: "calc(100vh - 65vh)",
      },
      dropShadow: {
        "3xl": "0 0 0 1000px hsla(0, 0%, 0%, 0.5)",
      },
    },
  },
  plugins: [],
};
