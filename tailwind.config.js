module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./Components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/bg.svg')",
        "phone-svg": "url('/phoneblob.svg')",
        products: "url('/Confetti-Doodles.svg')",
      }),
      animation: {
        float: "float 4s ease-in-out 0s infinite",
      },
      keyframes: {
        float: {
          "0%": {
            transform: "translatey(0px)",
          },
          "50%": {
            transform: "translatey(-10px)",
          },
          "100%": {
            transform: "translatey(0px)",
          },
        },
      },
      height: {
        98: "30rem",
        102: "34rem",
      },
    },
  },
  variants: {
    extend: {
      translate: ["motion-safe"],
    },
  },
  plugins: [],
};
