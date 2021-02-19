module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing:{
      "widest": ".15em"
    },
    extend: {
      boxShadow:{
        "messenger": "0px -2px 20px rgba(163, 25, 91, 0.1);"
      },
      
      colors:{
        "chat-bg": "#F1F5F1",
        "chat-message-bg": "#F6F6F6",
        "wine": "#A3195B",
        "pastel-wine": "#DEC0CF",
        "file-name": "#333333",
        "placeholder-gray": "#BDBDBD",
        "notice-gray": " #ECF0F3",
        "indicator-bg" : "#F2D7E4",
        "indicator-ball": "#DEA4C0"
      },
      spacing:{
        14: "3.5rem",
        15: "3.375rem",
        23: "5.75rem",
        25: "6.25rem",
        31: "7.75rem",
        41.5: "10.375rem",
        18.5: "4.625rem",
        5.5: "1.375rem",
        "30px": "30px",
        "10px": "10px",
        "450px" : "450px",
        "260px": "260px"
      },
      minHeight:{
        "450px" : "450px"
      },
      maxHeight:{
        "675px" : "675px",
        "450px" : "450px"

      },
      maxWidth: {
        "375px": "375px",
        "850px" : "850px"
      },
      minWidth: {
        "1000px" : "1000px",

      },
      borderRadius: {
        "30px": "30px",
        "20px": "20px"
      },
      letterSpacing:{
        "lang": "0.14em"
      },
      backgroundSize: {
        "fill-full": "100% 100% !important",
        "fill-half": "100% auto !important"
      },
      
      fontSize: {
        "h1": ["2rem", {
          lineHeight: '40px',
        }],
        "lead": ["1.5rem", {
          lineHeight: "146.4%",
          fontWeight: "500"
        }],
        "h2": ["1.5rem", {
          lineHeight: "auto"
        }],
        "h2-big": ["3rem", {
          lineHeight: "auto"
        }],
        "chat-name": ["14px",{
          lineHeight: "146.4%",
        }],
        "chat-message":["15px", {
          lineHeight: "145%"
        }],
        "caption": ["12px", {
          lineHeight: "150%"
        }],
        "regular": ["18px", {
          lineHeight: "150%",
          fontWeight: "500"
        }],
      },
      animation : {
        "ball-bounce": "ball-bounce 1.5s ease-in-out infinite 0.5s"
      },

      keyframes: {
        "ball-bounce" : {
          "50%,80%,100%": 
          {
              transform: "translateY(0)"
          },

          "20%":{
            transform: "translateY(2px)"
          },
          "40%": {
              transform: "translateY(-8px)"
          },
          "70%" :{
              transform: "translateY(-5px)"
          },
          "90%": {
              transform: "translateY(-4px)"
          }
      }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
