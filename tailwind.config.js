module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      colors: {
        navcolor : 
        {
          50: '#edf1fc',
          100: '#d3d4e1',
          200: '#b6b8c9',
          300: '#989bb2',
          400: '#7c7f9b',
          500: '#636582',
          600: '#4c4f66',
          700: '#363849',
          800: '#21222e',
          900: '#0a0a16',
        },
        premiere:
        {
          50: '#edf0fd',
          100: '#ced3e5',
          200: '#afb6cf',
          300: '#9099bb',
          400: '#707ba7',
          500: '#57628e',
          600: '#444c6f',
          700: '#303650',
          800: '#1c2132',
          900: '#080b17',
        }
      },
    },
  },
  plugins: [],
};
