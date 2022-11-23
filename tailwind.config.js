/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "aboutImage2": "url('/src/Components/Assets/Group 37432.svg')",
        "chatBg": "url('/src/Components/Assets/trabajoequipoteam-4200837_1920 3.svg')",

       
      },
      colors: {
      black:"#000000",
      white:"#FFFFFF",
       green:"#19683B",
       lineOrange:"#FDAA60",
       homePageCardGreen:"#AAE5C3",
       iconGreen:"#387351",
       lBrown:"#FFE8D3",
       lblue:"#DDE7FA",
       lgray:"#D9D9D9"
       
      },
      width: {
        layoutWidth:"83.333333%",
        homePageWidth:"100%",
        whoWeAreCardWidth:"744px",
        aboutusCardWidth:"343px",
        productsCardWidth:"551px",
        productsCardWidth2:"447px"
      },
      height: {
        whoWeAreCardheight:"326px",
        aboutCardsHeight:"546px",
        productsCardHeight:"588px",
        productscardHeight2:"546px"

      },
    },
  },
  // screens:{
  //   'sm':"540px"
  // },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

