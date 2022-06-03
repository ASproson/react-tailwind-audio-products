module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1448px'
    },
    extend: {
      colors: {
        yellowLight: '#fbffa7',
        blueLight: '#b1c5ff',
        greenLight: '#b6ffc0',
        orange: '#ff764d',
        lavender: '#d5b3ff',
        blue: '#0000ff'
      }
    },
  },
  plugins: [],
}
