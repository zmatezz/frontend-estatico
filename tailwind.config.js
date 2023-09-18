/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        greatVibes: ['Great Vibes', 'cursive'],
      },

      backgroundImage: {
        'hero': "url('https://res.cloudinary.com/dgeeyohmv/image/upload/v1693963744/fs6fghc2bzwoltyxetnb.jpg')",
        'slider': "url('https://res.cloudinary.com/dgeeyohmv/image/upload/v1693963847/fuvme37nrpeqcsnbsnnc.jpg')",
      },

      button: {
        'outline': '',
        'solid': 'none',
      }

      
    },
  },
  plugins: [],
}

