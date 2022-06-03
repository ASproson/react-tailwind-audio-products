module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      ssm: '480px',
      sm: '720px',
      md: '932px',
      mdlg: '980px',
      lg: '1200px',
      xl: '1448px'
    },
    extend: {
      colors: {
        yellowLight: '#fbffa7',
        blueLight: '#b1c5ff',
        greenLight: '#b6ffc0',
        orange: '#ff764d',
        lavender: '#d5b3ff',
        blue: '#0000ff',
        hoverGray: 'hsl(227, 12%, 61%)',
      }
    },
  },
  plugins: [],
}
