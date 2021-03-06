module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        raleway: ["Raleway, sans-serif"],
      },
      colors: {
        "primary-gray": "#F7F7F7",
        "primary-gray-darker": "#F2F2F2",
        "primary-dark": "#c4c4c4",
        "secondary-green": "#00A14B",
        "secondary-green-light": "#59C28A",
        "secondary-green-darker": "#00711F",
        "primary-text": "#4B4D53",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["odd"],
      fontWeight: ["hover"],
    },
  },
  plugins: [],
};
