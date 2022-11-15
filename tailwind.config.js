/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './public/index.html'
  ],
  theme: {
    extend: {
      backgroundColor: {
        custompurple: '#A02279'
      },
      textColor: {
        custompurple: '#A02279'
      },
      height: {
        1: '1px'
      },
      borderColor : {
        custompurple: '#A02279'
      },
      maxWidth: {
        646 : '646px',
        476: '476px'
      },
      width : {
        476: '476px',
        480: '480px',
        400: '400px',
        292: '292px',
        222: '222px',
        111: '111px',
        214: '214px',
        107: '107px',
        198: '198.32px',
        99: '99px'

      }
    },
  },
  plugins: [],
}
