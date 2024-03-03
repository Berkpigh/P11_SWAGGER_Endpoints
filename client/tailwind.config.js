/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      smpb: '720px',
      // => @media (min-width: 720px) { ... }

      mdpb: '920px',
      // => @media (min-width: 920px) { ... }
    },
    fontFamily: {
      sans: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontSize: {
      '0.9rem': '0.9rem',
      '1.1rem': '1.1rem',
      '1.2rem': '1.2rem',
      '2em': '2em',
      '2.5rem': '2.5rem',
    },
    colors: {
      grey: {
        DEFAULT: '#2c3e50',
        222: '#222',
        fff: '#fff',
      },
    },
    top: {
      '50px': '50px',
    },
    right: {
      '50px': '50px',
    },
    width: {
      '30px': '30px',
      '100px': '100px',
      '200px': '200px',
      '220px': '220px',
      '250px': '250px',
      '300px': '300px',
      '364px': '364px',
    },
    height: {
      '44px': '44px',
      '211px': '211px',
      '250px': '250px',
      '300px': '300px',
      '400px': '400px',
    },
    borderWidth: {
      '1px': '1px',
      10: '10px',
    },
    borderColor: {
      green: {
        feature: '#00bc77',
        submit: '#00bc77',
      },
      grey: {
        ccc: '#ccc',
      },
      zero: '#000',
    },
    backgroundColor: {
      dark: '#12002b',
      submit: '#00bc77',
      fff: '#fff',
      zero: '#000',
    },
    padding: {
      '5px': '5px',
      demirem: '0.5rem',
      '2rem': '2rem',
      '2.5rem': '2.5rem',
      left: {
        '500px': '500px',
      },
    },
    flex: {
      zero: '0',
      un: '1',
    },
    minHeight: {
      '6vh': '6vh',
      '10vh': '10vh',
      '55vh': '55vh',
      '80vh': '80vh',
    },
    maxHeight: {
      '10vh': '10vh',
      '80vh': '80vh',
    },
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/img/bank-tree.jpeg')",
      },
    },
  },
  plugins: [],
}
