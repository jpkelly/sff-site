import React, { useState, createRef } from "react";
import { Grommet, Box, Collapsible, Heading, ResponsiveContext, Layer, Paragraph, Footer, Grid, Nav } from 'grommet';
import { Text } from "../components/Text";
import { Anchor } from "../components/Anchor";
// import Particles from 'react-particles-js';
// import { normalizeColor } from 'grommet/utils';
// import { rgba } from 'polished';
import { Menu, Facebook, Instagram, Linkedin } from 'grommet-icons';
// import { ThemeProvider } from 'styled-components';
// import { deepMerge } from "grommet/utils";
// import { Link } from "react-router-dom";
// import Vimeo from '@u-wave/react-vimeo'
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
  const borderBoxRef = createRef(null);

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
                    background="black"
                  >
                    <Box primary
                      // ref={borderBoxRef}
                      flex={true}
                      // border={{ color: 'red' }}
                      align='end'
                      width='100%'
                      background="url(/img/home/blmBG.png)"
                    >



                      {/* <Layer
                      className='particles'
                      target={ref.current}
                      position="top-right"
                      plain={true}
                      modal={false}
                      animation={"fadeIn"}
                      responsive={false}
                    >
                      <Particles />
                    </Layer> */}

                      <BurgerLayer />

                      <Box primary // MAIN CONTENT BOX
                        flex={true}
                        // border={{ color: 'green' }}
                        align='end'
                        width='100%'
                        overflow={{ horizontal: 'hidden' }}
                        // pad={{ horizontal: '15px' }}
                        pad={{ horizontal: 'xlarge' }}
                      // background='red'
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
                            <Anchor href="https://www.studiofirefly.com">
                              <img src={logo} className="logo-image" alt="Logo" />
                            </Anchor>
                          </Box>


                          <Box primary
                            width="auto"
                            // fill={true}
                            flex={false}
                          // border={{ color: 'green' }}
                          >

                          </Box>


                          <Paragraph
                            size="large"
                            alignSelf="center"

                          >
                            A nation, divided: the cries of protesters permeate our streets while
                            headlines of anger, hate, and division play on our screens. In a
                            moment of clarity we realize; we’ve been here before. Not too long
                            ago, a nation cried out for equality, for justice, and for human
                            rights. The Civil Rights Movement marked the end of segregation,
                            discrimination, and inequality—or so many of us thought.
                        </Paragraph>
                          <Paragraph
                            size="large"
                            alignSelf="center"
                          >
                            We find ourselves here, again, at a crossroads in history. The terrible
                            truth is the vast majority of us are guilty of standing on the sidelines
                            lying to ourselves: that’s not me, that’s “them”.  They are the racists,
                            the bigots, the ones that discriminate.
                        </Paragraph>
                          <Paragraph
                            size="large"
                            alignSelf="center"
                          >
                            We are “them”. Our privilege has allowed us to remain complicit to injustice,
                            racism, and inequality. Our apathy has yet again been the cause of division and
                            strife. We are now faced with a roll call of countless, senseless, tragic deaths.
                        </Paragraph>
                          <Paragraph
                            size="large"
                            alignSelf="center"
                          >
                            On, Monday, May 25th, George Floyd pleaded with police officers for the right to
                            breathe; an essential, physiological human right we rarely ever think of as
                            contested. He begged an officer for 8 minutes and 46 seconds for air. When
                            George Floyd died, he was one of countless Black deaths dealt by the hand of
                            police officers. While he was one of many, his story was met with a resounding
                            cry in response. The past few weeks have been filled with words and action. We
                            know as a company, no matter the size, our duty is to meet that call with words
                            and action as well.
                        </Paragraph>
                          <Paragraph
                            size="large"
                            alignSelf="center"
                          >
                            We know we cannot bring back George Floyd, Breonna Taylor, Treyvon Martin,
                            Ahmaud Arbery, Oscar Grant, Elijah McClain, Riah Milton, Dominique Fells,
                            or any other Black person we have lost to the systemic racism and white supremacy
                            embedded in the roots of our nation. No action, no response, will ever truly
                            balance scales heavy with intergenerational trauma and the trauma of the
                            present day; however, the enormity of this injustice does not mean no action
                            should be taken at all, in fact it necessitates the constant vigilance of
                            continual response.
                        </Paragraph>
                          <Paragraph
                            size="large"
                            alignSelf="center"
                          >
                            We recognize our undertaking as a marathon, not a sprint. We plan to shift our
                            paradigms, not our feet. If something as fundamental as our judicial and
                            policing systems are institutionally racist, it is safe to assume that racism
                            is as pervasive within our industry. It is our job to find ways to respond
                            directly to the world we influence, so we will continually be looking to be an
                            accomplice within the events industry. We do not take the responsibility of
                            our industry lightly. We create community by facilitating spaces for people
                            to gather and share ideas. We help shape how the world communicates at a large scale,
                            so we cannot ignore communities crying out for change. We see the pain on our neighbors
                            faces, we owe it to the ones we lost.
                        </Paragraph>
                          <Paragraph
                            size="large"
                            alignSelf="center"
                            margin={{ bottom: 'xlarge' }}
                          >
                            While we do not have a direct company action to present today, we know we are
                            ready to take individual steps to make institutional change. We are asking
                            the hard questions first of ourselves and then of one another. We come to
                            the table with an open heart, ready to walk alongside and not in front.
                            What we do know is that Black Lives Matter. We understand that the conversation
                            of change starts with one person, with one organization, with one company.
                        </Paragraph>


                          <Box primary
                            width="large"
                            alignSelf="center"
                          >
                            <ResponsiveGridFooter primary
                              alignSelf="center"
                              rows={rowsFooter}
                              columns={columnsFooter}
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
                              <Text background="red" size='xsmall'>Copyright &copy; {today.getFullYear()} Studio Firefly</Text>
                            </Footer>
                          </Box>

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
                      {/* <Button secondary
                        icon={<FormClose />}
                        onClick={() => setShowSidebar(false)}
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
                        <Anchor margin={{ vertical: 'medium' }} size="xxlarge" hoverColor="#ff00ff" href="/" alignSelf='start' label="Home" >Home</Anchor>
                        <Anchor margin={{ vertical: 'medium' }} size="xxlarge" hoverColor="#ff00ff" href="/projects" alignSelf='start' label="Projects">Projects</Anchor>
                        <Anchor margin={{ vertical: 'medium' }} size="xxlarge" hoverColor="#ff00ff" href="/about" alignSelf='start' label="Team">Team</Anchor>
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

