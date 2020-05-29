import { grommet } from 'grommet';
import { deepMerge } from "grommet/utils";


const SFFtheme = deepMerge(grommet, {
    defaultMode: "dark",
    global: {
      colors: {
        brand: '#111111',
        secondary: '#E6E6E6',
        focus: 'rgb(0, 0, 0, 0);',
        
        "tab": {
          dark: "#E5F2FF",
          light: "#E5F2FF"
        },
  
        "background-back": {
          dark: "#000000",
          light: "#dddddd"
        },
        "background-front": {
          dark: "#222938",
          light: "#FFFFFF"
        },
        "background-contrast": {
          dark: "#FFFF08",
          light: "#111108"
        },
        "background-custom": {
          dark: "#0E5265",
          light: "#00C8FF"
        }
     },
      font: {
        family: 'din-2014',
        height: '20px',
      },
      hover: {
        background: {
          color: "pink"
        },
        color: {
          dark: "white",
          light: "white"
        }
      }
    },
    icon: {
      extend: 
        props => `
          font-size: 1.075rem;
    
        ${!props.default && `
          background-color: rgba(0, 0, 0, 0);
          :hover {
            stroke: rgb(255, 0, 255, 1);
            background-color: rgba(0, 0, 0, 0);
            }
          `}
          ${!props.secondary && `
          background-color: rgba(0, 0, 0, 0);
            color: rgba(255, 255, 255, 0.99);
            :hover {
              background-color: rgb(0, 0, 0, 0);
              stroke: rgb(255, 0, 255, 1);
            }
          `}
        `,
    },
    button: {
      border: {
        width: '2px',
        radius: '30px',
      },
      padding: {
        vertical: '10px',
        horizontal: '40px',
      },
      extend: props => `
        font-size: 1.075rem;
        font-weight: 500;
        line-height: normal;
        // min-height: 50px;
  
       ${!props.default && `
       height: 50px;
       width: 169px;
       padding-top: 3px;
       line-height: 42px;
          border: 0px solid #ff00ff;
         color: rgb(255, 255, 255, 0.99);
         background-color: #000000;
         :hover {
          color: rgb(255, 0, 255, 1);
          border: 0px solid #ff00ff;
          stroke: rgb(255, 255, 255, 0);
          box-shadow: none;
          background-color: #eeeeee;
          }
        `}
        // ${!props.primary && `
        //  border-color: rgb(255, 0, 255, 0.75);
        //  color: rgb(255, 255, 255, 0.99);
        //  :hover {
        //     color: rgb(1, 1, 1, 0.99);
        //     box-shadow: none;
        //     background-color: #0ff00;
        //   }
        // `}
        ${!props.secondary && `
          height: 56px;
          width: 176px;
          border: 0px solid #ff00ff;
          color: rgb(255, 255, 255, 1);
          background-image: conic-gradient(from -45deg, #ff7f00, #ff00ff, #007fff, #00ff00, #ff7f00);
          :hover {
            border: 2px solid #ff00ff;
            color: rgb(0, 0, 0, 0.99);
            box-shadow: none;
            background-image: conic-gradient(from -45deg, #ff7f00, #ff00ff, #007fff, #00ff00, #ff7f00);
          }
        `}
      `,
  
    },
    // "anchor": {
    //   // "textDecoration": "none",
    //   "fontWeight": 600,
    //   "color": "#eeeeef",
    //   "hover": {
    //     "textDecoration": "none"
    //   },
    //   extend: props => `
    //     font-size: 1.075rem;
    //     font-weight: 500;
    //     line-height: normal;
    //     // min-height: 50px;
    //     :hover {
    //       color: #ff00ff;
    //     }
    //     `
    // },
    "anchor": {
      // "textDecoration": "none",
      "fontWeight": 600,
      "color": "#eeeeef",
      "hover": {
        "textDecoration": "none",
        "fontWeight": "800",
      },
    },
    box: {
      border: {
        width: '5px',
        radius: '30px',
      },
      padding: {
        vertical: '10px',
        horizontal: '35px',
      },
      extend: props => `
        font-size: 1.075rem;
        font-weight: 500;
        line-height: normal;
  
       ${!props.primary && `
         
         //border-width: 2px;
         //border-image: linear-gradient( to left,  #ff7f00,  #ff00ff ) 1 25%;
         color: rgb(255, 255, 255, 0.99);
         background-image: conic-gradient(from -45deg, #ff7f00, #ff00ff, #007fff, #00ff00, #ff7f00);
        //  background-color: #000000;
        `}
        ${!props.secondary && `
         
         //border-width: none;
         border-color: #ffffff;
         color: rgb(255, 255, 255, 1);
         border-width: 2px;
        //  background-image: conic-gradient(from -45deg, #ff7f00, #ff00ff, #007fff, #00ff00, #ff7f00);
        //  background-color: #000000;
        `}
      `,
    },
  });

  export default SFFtheme