import React, { useState, useRef } from "react";
import { Grommet, Box, Collapsible, Heading, ResponsiveContext, Layer, Paragraph, Footer, Grid, Nav, Image } from 'grommet';
import { Text } from "../components/Text";
import { Anchor } from "../components/Anchor";
// import Particles from 'react-particles-js';
// import { normalizeColor } from 'grommet/utils';
// import { rgba } from 'polished';
import { Menu, Facebook, Instagram, Linkedin } from 'grommet-icons';
// import { ThemeProvider } from 'styled-components';
// import { deepMerge } from "grommet/utils";
// import { Link } from "react-router-dom";
import Vimeo from '@u-wave/react-vimeo'
// import YouTube from '@u-wave/react-youtube';
// import ReactPlayer from 'react-player'

import '../App.css';
import logo from '../sfflogo.png';

import SFFtheme from '../Theme.js';

// class YouTubePlayer extends React.Component {
//   render() {
//     return (
//       <div className='player-wrapper'>
//         <ReactPlayer
//           url='https://www.youtube.com/watch?v=hWLFtJoSgDk'
//           className='react-player'
//           width='100%'
//           height='100%'
//         />
//       </div>
//     )
//   }
// }

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    // background='red'
    pad={{ left: 'medium', right: 'small', vertical: 'none' }}
    elevation='none'
    style={{ zIndex: '1' }}
    {...props}
  />
);

const today = new Date();

// *****************
// Grid setup
// *****************
// const columns = {
//   small: ["medium", "medium", "medium"],
//   medium: ["medium", "medium", "medium"],
//   large: ["auto", "auto", "auto"],
//   xlarge: ["medium", "medium", "medium"]
// };
// const rows = {
//   small: ["auto", "auto", "auto"],
//   medium: ["auto"],
//   large: ["auto"],
//   xlarge: ["auto"]
// };
// const areas = {   // [column, row]
//   small: [
//     { name: "one", start: [0, 0], end: [1, 0] },
//     // { name: "two", start: [0, 1], end: [0, 1] },
//     // { name: "three", start: [0, 2], end: [0, 2] },
//     // { name: "four", start: [0, 3], end: [0, 3] },
//     // { name: "five", start: [0, 4], end: [0, 4] },
//     // { name: "six", start: [0, 5], end: [0, 5] },
//     // { name: "seven", start: [0, 6], end: [0, 6] },
//     // { name: "eight", start: [0, 7], end: [0, 7] },
//     // { name: "nine", start: [0, 8], end: [0, 8] }
//   ],
//   medium: [
//     { name: "one", start: [0, 0], end: [1, 0] },
//     // { name: "two", start: [1, 0], end: [1, 0] },
//     // { name: "three", start: [0, 1], end: [0, 1] },
//     // { name: "four", start: [1, 1], end: [1, 1] },
//     // { name: "five", start: [0, 2], end: [0, 2] },
//     // { name: "six", start: [1, 2], end: [1, 2] },
//     // { name: "seven", start: [0, 3], end: [0, 3] },
//     // { name: "eight", start: [1, 3], end: [1, 3] },
//     // { name: "nine", start: [0, 4], end: [0, 4] }
//   ],
//   large: [
//     { name: "one", start: [0, 0], end: [1, 0] },
//     // { name: "two", start: [3, 0], end: [4, 0] },
//     // { name: "three", start: [1, 1], end: [2, 1] },
//     // { name: "four", start: [3, 1], end: [4, 1] },
//     // { name: "five", start: [0, 2], end: [1, 2] },
//     // { name: "six", start: [2, 2], end: [3, 2] },
//     // { name: "seven", start: [4, 2], end: [5, 2] },
//     // { name: "eight", start: [1, 3], end: [2, 3] },
//     // { name: "nine", start: [3, 3], end: [4, 3] }
//   ],
//   xlarge: [
//     { name: "one", start: [0, 0], end: [0, 0] },
//     // { name: "two", start: [1, 0], end: [1, 0] },
//     // { name: "three", start: [0, 1], end: [0, 1] },
//     // { name: "four", start: [1, 1], end: [1, 1] },
//     // { name: "five", start: [0, 2], end: [0, 2] },
//     // { name: "six", start: [1, 2], end: [1, 2] },
//     // { name: "seven", start: [1, 1], end: [1, 1] },
//     // { name: "eight", start: [0, 2], end: [0, 2] },
//     // { name: "nine", start: [1, 2], end: [1, 2] }
//   ]
// };
// const ResponsiveGrid = ({
//   children,
//   overrideColumns,
//   overrideRows,
//   areas,
//   ...props
// }) => (
//     <ResponsiveContext.Consumer>
//       {size => {
//         // take into consideration if not array is sent but a simple string
//         let columnsVal = columns;
//         if (columns) {
//           if (columns[size]) {
//             columnsVal = columns[size];
//           }
//         }

//         let rowsVal = rows;
//         if (rows) {
//           if (rows[size]) {
//             rowsVal = rows[size];
//           }
//         }

//         // also if areas is a simple array not an object of arrays for different sizes
//         let areasVal = areas;
//         if (areas && !Array.isArray(areas)) areasVal = areas[size];

//         return (
//           <Grid
//             {...props}
//             areas={!areasVal ? undefined : areasVal}
//             rows={!rowsVal ? size : rowsVal}
//             columns={!columnsVal ? size : columnsVal}
//           >
//             {children}
//           </Grid>
//         );
//       }}
//     </ResponsiveContext.Consumer>
//   );

// *****************    
// Footer Grid setup
// *****************
const columnsFooter = {
  small: ["auto"],
  medium: ["auto", "auto", "auto"],
  large: ["auto", "auto", "auto"],
  xlarge: ["auto", "auto", "auto"]
};
const rowsFooter = {
  small: ["xxsmall", "xxsmall", "xxsmall"],
  medium: ["xxsmall"],
  large: ["xxsmall"],
  xlarge: ["xxsmall"]
};
const areasFooter = {
  small: [
    { name: "address", start: [0, 0], end: [0, 0] },
    { name: "contact", start: [0, 1], end: [0, 1] },
    { name: "social", start: [0, 2], end: [0, 2] }
  ],
  medium: [
    { name: "address", start: [0, 0], end: [0, 0] },
    { name: "contact", start: [1, 0], end: [1, 0] },
    { name: "social", start: [2, 0], end: [2, 0] }
  ],
  large: [
    { name: "address", start: [0, 0], end: [0, 0] },
    { name: "contact", start: [1, 0], end: [1, 0] },
    { name: "social", start: [2, 0], end: [2, 0] }
  ],
  xlarge: [
    { name: "address", start: [0, 0], end: [0, 0] },
    { name: "contact", start: [1, 0], end: [1, 0] },
    { name: "social", start: [2, 0], end: [2, 0] }
  ]
};
const ResponsiveGridFooter = ({
  children,
  overrideColumns,
  overrideRows,
  areas,
  ...props
}) => (
    <ResponsiveContext.Consumer>
      {size => {
        // take into consideration if not array is sent but a simple string
        let columnsVal = columnsFooter;
        if (columnsFooter) {
          if (columnsFooter[size]) {
            columnsVal = columnsFooter[size];
          }
        }

        let rowsVal = rowsFooter;
        if (rowsFooter) {
          if (rowsFooter[size]) {
            rowsVal = rowsFooter[size];
          }
        }

        // also if areas is a simple array not an object of arrays for different sizes
        let areasVal = areasFooter;
        if (areasFooter && !Array.isArray(areasFooter)) areasVal = areasFooter[size];

        return (
          <Grid
            {...props}
            areas={!areasVal ? undefined : areasVal}
            rows={!rowsVal ? size : rowsVal}
            columns={!columnsVal ? size : columnsVal}
          >
            {children}
          </Grid>
        );
      }}
    </ResponsiveContext.Consumer>
  );

function App() {

  const [showBurger, setShowBurger] = React.useState(true)
  const onClick = () => {
    setShowSidebar(!showSidebar)
    setShowBurger(false)
  }
  const BurgerLayer = () => {
    console.log(borderBoxRef.current);
    return (
      <Layer
        target={borderBoxRef.current}
        position="top-right"
        plain={true}
        modal={false}
        animation={"fadeIn"}
        onClickOutside={() => setShowSidebar(!showSidebar)}
        onEsc={() => setShowSidebar(!showSidebar)}
        responsive={false}
      >
        {showBurger ? <Burger /> : null}
      </Layer>
    )
  }
  const Burger = () => (
    <div className='menu-wrapper'>
      <Anchor onClick={onClick} icon={<Menu />} hoverColor="#ff00ff" />
    </div>
  )
  const closeSidebar = () => {
    setShowSidebar(!showSidebar)
  }
  const borderBoxRef = useRef(null);

  const [isDark] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Grommet theme={SFFtheme} themeMode={isDark ? 'light' : 'dark'} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box primary fill>
            <AppBar primary>
              <Heading level='3' margin='none'>&nbsp;</Heading>
              {/* <Anchor onClick={() => setShowSidebar(!showSidebar)} icon={<Menu />} hoverColor="#ff00ff" /> */}
            </AppBar>
            <Box primary direction='row' flex overflow={{ horizontal: 'hidden' }} >
              <Box primary flex align='center' justify='center' background='background-back'>



                <Box secondary
                  // ref={ref}
                  flex={true}
                  align='end'
                  width='95%'
                  pad={{ horizontal: '2px', vertical: '2px' }}
                  background='url(/img/gradient.png)'
                >

                  <Box primary
                    ref={borderBoxRef}
                    flex={true}
                    // border={{ color: 'red' }}
                    align='end'
                    width='100%'
                    background='none'
                  >



                    {/* <Layer
                      // className='particles'
                      full={true}
                      position="center"
                      plain={true}
                      modal={false}
                      animation={"fadeIn"}
                      responsive={false}
                    >
                      <Particles
                        params={{
                          "particles": {
                            "number": {
                              "value": 5,
                              "density": {
                                "enable": false
                              }
                            },
                            "size": {
                              "value": 3,
                              "random": true,
                              "anim": {
                                "speed": 4,
                                "size_min": 0.3
                              }
                            },
                            "color": {
                              "value": "#ffff00"
                            },
                            "line_linked": {
                              "enable": false
                            },
                            "move": {
                              "random": true,
                              "speed": 1,
                              "direction": "top",
                              "out_mode": "out"
                            }
                          },
                          "interactivity": {
                            "events": {
                              "onhover": {
                                "enable": true,
                                "mode": "bubble"
                              },
                              "onclick": {
                                "enable": false,
                                "mode": "repulse"
                              }
                            },
                            "modes": {
                              "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 0
                              },
                              "repulse": {
                                "distance": 400,
                                "duration": 4
                              }
                            }
                          }
                        }}
                      />
                    </Layer> */}

                    <BurgerLayer />
                    {/* <Button width="xlarge" onClick={()=> console.log(borderBoxRef)}>Click</Button> */}
                    <Box primary // MAIN CONTENT BOX
                      flex={true}
                      // border={{ color: 'green' }}
                      align='end'
                      width='100%'
                      overflow={{ horizontal: 'hidden' }}
                      // pad={{ horizontal: '15px' }}
                      pad={{ horizontal: 'xlarge' }}
                      background='black'
                    >





                      <Box primary
                        // border={{ color: 'yellow' }}
                        // align='left'
                        // width={{ min: '200px', max: '750px' }}
                        width='100%'

                      // background='green'
                      >


                        <Box primary
                          width="auto"
                          align='center'
                          flex={false}
                        // border={{ color: 'green' }}
                        >
                          <div className='logo-wrapper'>
                          <Anchor href="https://www.studiofirefly.com">
                            <img src={logo} className="logo-image" alt="Logo" />
                          </Anchor>
                          </div>
                        </Box>




                        <Box primary
                          alignSelf="center"
                          width="xlarge"
                          // height="large"
                          // height="auto"
                          flex={false}
                          margin={{ bottom: 'xlarge' }}
                        >
                          <Vimeo
                            className='video'
                            video="https://vimeo.com/431538538/54156c0592"
                            responsive="true"
                          />
                          {/* <ReactPlayer
                           url='https://youtu.be/SXgeX2WC7us' 
                           responsive="true"
                           /> */}
                          {/* <YouTube
                            video="hWLFtJoSgDk"
                            autoplay={false}
                            height="xlarge"
                            responsive="true"
                          /> */}
                          {/* <ReactPlayer
                            url='https://www.youtube.com/watch?v=hWLFtJoSgDk'
                            width="auto"
                            height="750px"
                            controls={true}
                          /> */}
                          {/* <div className='player-wrapper'>
                            <ReactPlayer
                              url='https://youtu.be/zXmNf7R4Uko'
                              className='react-player'
                              width='100%'
                              height='100%'
                              controls={true}
                            />
                          </div> */}
                        </Box>


                        <Box primary
                          flex={false}
                          width="xlarge"
                          height="auto"
                          alignSelf="center"
                          margin={{ horizontal: 'none', vertical: 'large' }}
                        >
                          <Anchor href="/blm">
                            <Image fit="contain" fill="false" src={'/img/home/blmBanner.png'} />
                          </Anchor>
                        </Box>

                        <Paragraph
                          size="large"
                          alignSelf="center"
                          margin={{ top: 'xlarge' }}
                        >
                          &nbsp;
                        </Paragraph>
                        {/* <Paragraph
                          size="large"
                          alignSelf="center"
                        >
                          So, using our internal resources, we decided to build our own. While we aren't advocating that we can ever replicate or replace the experience of a live show, we think we can come closer to making the digital experience as compelling as the live experience. After all, at Studio Firefly, we are all about wonderment.
                        </Paragraph>
                        <Paragraph
                          size="large"
                          alignSelf="center"
                        >
                          More coming in the next few months, with a launch and full Digital Event Experience Demo coming this July, 2020. In the meantime, here's a sneak peek at what our designers, coders, producers, and technicians have been working on:
                        </Paragraph> */}




                        <Box primary
                          width="large"
                          alignSelf="center"
                        >
                          <ResponsiveGridFooter primary
                            rows={rowsFooter}
                            columns={columnsFooter}
                            alignSelf="center"
                            gap="small"
                            areas={areasFooter}
                            margin={{ horizontal: 'none', vertical: 'medium' }}
                          >
                            <div>
                              <Box primary
                                gridArea="address"
                                align="center"
                                pad={{ horizontal: 'small', vertical: 'small' }}
                              >
                                <Nav primary direction="row" background="none" pad="none" gap="medium">
                                  <Anchor hoverColor="#ffffff" >Sausalito</Anchor>
                                  <Anchor hoverColor="#ffffff" >Boston</Anchor>
                                  <Anchor hoverColor="#ffffff" >Barcelona</Anchor>
                                </Nav>
                              </Box>
                            </div>
                            <div className='footer-wrapper'>
                              <Box primary
                                gridArea="contact"
                                // border='left'{...{ color: 'neutral-3' }}
                                align="center"
                                // align="left"
                                pad={{ horizontal: 'small', vertical: 'none' }}
                              >
                                <Anchor hoverColor="#ff7f00" href="tel:415-944-2286"><strong>+1.415.944.2286</strong></Anchor>
                                <Anchor hoverColor="#ff00ff" href="mailto:studio@studiofirefly.com"><strong>studio@studiofirefly.com</strong></Anchor>
                              </Box>
                            </div>
                            <div>
                              <Box primary
                                gridArea="social"
                                // background="black"
                                // border='left'{...{ color: '#ffffff' }}
                                align="center"
                                // align="left"
                                pad={{ horizontal: 'none', vertical: 'none' }}
                              >
                                <Nav primary direction="row" background="none" pad="none" gap="none">
                                  <Anchor href="http://instagram.com/bystudiofirefly" icon={<Instagram />} hoverColor="#ff00ff" />
                                  <Anchor href="http://facebook.com/bystudiofirefly" icon={<Facebook />} hoverColor="#ff00ff" />
                                  <Anchor href="http://linkedin.com/company/studiofirefly" icon={<Linkedin />} hoverColor="#ff00ff" />
                                </Nav>
                              </Box>
                            </div>
                          </ResponsiveGridFooter>
                          <Footer primary justify="center" pad={{ top: "30px", bottom: "15px" }}>
                            <Text background="black" size='xsmall'>Copyright &copy; {today.getFullYear()} Studio Firefly</Text>
                          </Footer>
                        </Box>

                      </Box>
                    </Box>

                  </Box>
                </Box>
                <Footer primary background="background-back" pad="18px">

                </Footer>
              </Box>

              {(!showSidebar || size !== 'small') ? (
                <Collapsible border={{ color: 'black' }} direction="horizontal" open={showSidebar} >
                  <Box primary
                    className='sidebar'
                    flex
                    width='xsmall'
                    background='background-back'
                    border={{ style: 'hidden' }}
                    elevation='none'
                    align='start'
                    justify='start'
                  >
                    <Nav primary background="background-back" gap="small">
                      <Anchor onClick={closeSidebar} hoverColor="#ff00ff" href="/" alignSelf='start' label="Home" ></Anchor>
                      <Anchor onClick={closeSidebar} hoverColor="#ff00ff" href="/projects" alignSelf='start' label="Projects"></Anchor>
                      <Anchor onClick={closeSidebar} hoverColor="#ff00ff" href="/about" alignSelf='start' label="Team"></Anchor>
                    </Nav>
                  </Box>
                </Collapsible>
              ) : (
                  <Layer>
                    <Box primary
                      background='black'
                      tag='header'
                      justify='end'
                      align='center'
                      direction='row'
                    >
                      {/* <Anchor primary
                        icon={<FormClose />}
                        onClick={onClick}
                      /> */}
                      &nbsp;
                    </Box>
                    <Box primary
                      fill
                      background='black'
                      align='center'
                      justify='start'
                    >
                      <Nav align='center' primary background="background-back" gap="xlarge">
                        <Anchor margin={{ vertical: 'medium' }} size="xxlarge" hoverColor="#ff00ff" href="/" alignSelf='start' label="Home" ></Anchor>
                        <Anchor margin={{ vertical: 'medium' }} size="xxlarge" hoverColor="#ff00ff" href="/projects" alignSelf='start' label="Projects"></Anchor>
                        <Anchor margin={{ vertical: 'medium' }} size="xxlarge" hoverColor="#ff00ff" href="/about" alignSelf='start' label="Team"></Anchor>
                      </Nav>

                    </Box>
                  </Layer>
                )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;

