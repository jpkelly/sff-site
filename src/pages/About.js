import React, { useState, createRef } from "react";
import { Grommet, Box, Collapsible, Heading, ResponsiveContext, Layer, Paragraph, Footer, Grid, Nav, Image } from 'grommet';
import { Text } from "../components/Text";
import { Anchor } from "../components/Anchor";
// import { Box } from "../components/Box";
// import { normalizeColor } from 'grommet/utils';
// import { rgba } from 'polished';
import { Menu, Facebook, Instagram, Linkedin } from 'grommet-icons';
// import Gallery from 'react-photo-gallery';
// import { ThemeProvider } from 'styled-components';
// import { deepMerge } from "grommet/utils";
// import { Link } from "react-router-dom";
import '../App.css';
import logo from '../sfflogo.png';

// import lisa from '../img/team/Lisa.jpg';
// import ethan from '../img/team/Ethan.jpg';

import SFFtheme from '../Theme.js';



const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='background-back'
    pad={{ left: 'medium', right: 'small', vertical: 'none' }}
    elevation='none'
    style={{ zIndex: '1' }}
    {...props}
  />
);

const today = new Date();

// function columnsGal(containerWidth) {
//   let columns = 1;
//   if (containerWidth >= 500) columns = 1;
//   if (containerWidth >= 900) columns = 2;
//   if (containerWidth >= 1500) columns = 2;
//   return columns;
// }


// Grid setup
const columns = {
  small: ["auto"],
  medium: ["auto", "auto"],
  large: ["222px", "222px", "222px", "222px", "222px", "222px"],
  xlarge: ["222px", "222px", "222px", "222px", "222px", "222px"]
};
const rows = {
  small: ["auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto"],
  medium: ["auto", "auto", "auto", "auto", "auto"],
  large: ["auto", "auto", "auto", "0px"],
  xlarge: ["auto", "auto", "auto", "0px"]
};
const areas = {
  small: [
    { name: "one", start: [0, 0], end: [0, 0] },
    { name: "two", start: [0, 1], end: [0, 1] },
    { name: "three", start: [0, 2], end: [0, 2] },
    { name: "four", start: [0, 3], end: [0, 3] },
    { name: "five", start: [0, 4], end: [0, 4] },
    { name: "six", start: [0, 5], end: [0, 5] },
    { name: "seven", start: [0, 6], end: [0, 6] },
    { name: "eight", start: [0, 7], end: [0, 7] },
    { name: "nine", start: [0, 8], end: [0, 8] }
  ],
  medium: [
    { name: "one", start: [0, 0], end: [0, 0] },
    { name: "two", start: [1, 0], end: [1, 0] },
    { name: "three", start: [0, 1], end: [0, 1] },
    { name: "four", start: [1, 1], end: [1, 1] },
    { name: "five", start: [0, 2], end: [0, 2] },
    { name: "six", start: [1, 2], end: [1, 2] },
    { name: "seven", start: [0, 3], end: [0, 3] },
    { name: "eight", start: [1, 3], end: [1, 3] },
    // { name: "nine", start: [0, 4], end: [0, 4] }
  ],
  large: [
    { name: "one", start: [1, 0], end: [2, 0] },
    { name: "two", start: [3, 0], end: [4, 0] },
    { name: "three", start: [0, 1], end: [1, 1] },
    { name: "four", start: [2, 1], end: [3, 1] },
    { name: "five", start: [4, 1], end: [5, 1] },
    { name: "six", start: [0, 2], end: [1, 2] },
    { name: "seven", start: [2, 2], end: [3, 2] },
    { name: "eight", start: [4, 2], end: [5, 2] },
    // { name: "nine", start: [3, 4], end: [4, 4] }
  ],
  xlarge: [
    { name: "one", start: [1, 0], end: [2, 0] },
    { name: "two", start: [3, 0], end: [4, 0] },
    { name: "three", start: [0, 1], end: [1, 1] },
    { name: "four", start: [2, 1], end: [3, 1] },
    { name: "five", start: [4, 1], end: [5, 1] },
    { name: "six", start: [0, 2], end: [1, 2] },
    { name: "seven", start: [2, 2], end: [3, 2] },
    { name: "eight", start: [4, 2], end: [5, 2] },
  ]
};

const ResponsiveGridTeam = ({
  children,
  overrideColumns,
  overrideRows,
  areas,
  ...props
}) => (
    <ResponsiveContext.Consumer>
      {size => {
        // take into consideration if not array is sent but a simple string
        let columnsVal = columns;
        if (columns) {
          if (columns[size]) {
            columnsVal = columns[size];
          }
        }

        let rowsVal = rows;
        if (rows) {
          if (rows[size]) {
            rowsVal = rows[size];
          }
        }

        // also if areas is a simple array not an object of arrays for different sizes
        let areasVal = areas;
        if (areas && !Array.isArray(areas)) areasVal = areas[size];

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
    <Grommet theme={SFFtheme} themeMode={isDark ? 'light' : 'dark'} full={true}>
      <ResponsiveContext.Consumer>
        {size => (
          <Box primary fill={true}>
            <AppBar primary>
              <Heading level='3' margin='none'>&nbsp;</Heading>
              {/* <Anchor onClick={() => setShowSidebar(!showSidebar)} icon={<Menu />} hoverColor="#ff00ff" /> */}
            </AppBar>
            <Box primary direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <Box primary flex align='center' justify='center' background='background-back'>


                <Box secondary
                  flex={true}
                  align='center'
                  width='95%'
                  pad={{ horizontal: '2px', vertical: '2px' }}
                  background='url(/img/gradient.png)'
                >
                  <Box primary
                    ref={borderBoxRef}
                    flex={true}
                    // border={{ color: 'red' }}
                    align='center'
                    width='100%'
                  >

                    <BurgerLayer />
                    <Box primary // MAIN CONTENT BOX
                      flex={true}
                      // border={{ color: 'green' }}
                      align='center'
                      width='100%'
                      overflow={{ horizontal: 'hidden' }}
                      // pad={{ horizontal: '15px' }}
                      pad={{ horizontal: 'xlarge' }}
                      background='black'
                    >
                      <Box primary
                        flex={false}
                        // border={{ color: 'blue' }}
                        width="100%"
                        margin={{ bottom: 'none' }}
                      // background='red'
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


                        <Paragraph
                          size='large'
                          fill={false}
                          margin={{ bottom: 'large' }}
                          alignSelf="center"
                        >
                          <h3 margin="none">We decode visions, craft experiences,
                          and deliver with precision, passion, and joy. We are world builders.</h3>
                        </Paragraph>
                      </Box>

                      <Box primary
                        flex={false}
                        width="100%"
                        height="auto"
                        margin={{ bottom: 'large' }}
                      >
                        <Image fit="contain" fill="false" src={'/img/team/beach.jpg'} />
                      </Box>



                      <Box primary
                        // flex={false}
                        // border={{ color: '#00ffff' }}

                        // style={{width:'100%', height:20}}/>
                        width={{ "min": "320px" }}
                      >



                        <ResponsiveGridTeam primary
                          rows={rows}
                          columns={columns}
                          gap="small"
                          areas={areas}
                          margin={{ horizontal: 'none', vertical: 'medium' }}

                        >


                          <Box primary
                            gridArea="one"
                            flex={false}
                            overflow="visible"
                            // height="xsmall" 
                            // background="black"
                            // border='left'{...{ color: 'light-1' }}
                            // justify="center"
                            // align="center"
                            pad={{ horizontal: 'medium', vertical: 'small' }}
                          >
                            <Box primary
                            >
                              <Image fit="contain" src={'/img/team/Lisa.jpg'} />

                            </Box>
                            <Box primary
                              flex={false}
                              height="xxsmall"
                              justify="center"
                              align="center"
                              // background="blue"
                              pad={{ horizontal: 'none', vertical: 'none' }}
                              margin={{ horizontal: 'none', vertical: 'none' }}
                            >
                              <h2>Lisa Sato</h2>
                            </Box>
                            <Box primary
                              flex={false}
                              height="30px"
                              justify="center"
                              align="center"
                              // background="green"
                              pad={{ bottom: 'medium' }}
                            >
                              <h4>Chief Dreamer/Event Strategist</h4>
                            </Box>
                            <Box primary
                              flex={false}
                              height="medium"
                              // justify="start"
                              alignSelf="center"
                              // pad={{ horizontal: 'small' }}
                              width={{ "max": "medium" }}
                            // background="red"
                            // margin={{ horizontal: 'none', vertical: 'none' }}
                            >
                              <Text>
                                CEO and Creative Director, Lisa Sato, has over twenty years
                                experience in live shows, having worn every professional hat
                                in the business, advising clients on their production & event
                                strategy, content development/brand messaging, design and
                                production. She challenges creative norms while remaining focused
                                on ensuring there’s a cohesive message through every aspect of a
                                project and the results are visually spectacular. She has a
                                sincere passion for creating experiences and finds herself fortunate
                                to be in her dream job.
                              </Text>
                            </Box>
                          </Box>
                          <Box primary
                            gridArea="two"
                            flex={false}
                            overflow="visible"
                            // background="black"
                            // border='left'{...{ color: 'neutral-3' }}
                            // justify="center"
                            // align="left"
                            pad={{ horizontal: 'small', vertical: 'small' }}
                          >
                            <Box primary
                            >
                              <Image fit="contain" src={'/img/team/Ethan.jpg'} />
                            </Box>
                            <Box primary
                              flex={false}
                              height="xxsmall"
                              justify="center"
                              align="center"
                              // background="blue"
                              pad={{ horizontal: 'none', vertical: 'none' }}
                              margin={{ horizontal: 'none', vertical: 'none' }}
                            >
                              <h2>Ethan Hoerneman</h2>
                            </Box>
                            <Box primary
                              flex={false}
                              height="30px"
                              justify="center"
                              align="center"
                              // background="green"
                              pad={{ bottom: 'medium' }}
                            >
                              <h4>Principal, Chief of Creative</h4>
                            </Box>
                            <Box primary
                              flex={false}
                              height="medium"
                              // justify="start"
                              alignSelf="center"
                              // pad={{ horizontal: 'small' }}
                              width={{ "max": "medium" }}
                            // background="red"
                            // margin={{ horizontal: 'none', vertical: 'none' }}
                            >
                              <Text>
                                Ethan has devoted his artistic talents to
                                more than 800 corporate, theatrical, and
                                television productions over the past 20+ years.
                                With a diverse background in production and
                                content design, he ably balances his creative and
                                technical skills to execute excellence on every
                                Studio Firefly project. Ethan has a keen eye for
                                design mixed with a practical approach that
                                ensures every moment of a branding experience is
                                not only compelling and filled with wonderment,
                                but also achievable.
                              </Text>
                            </Box>
                          </Box>

                          <Box primary
                            gridArea="three"
                            flex={false}
                            // background="black"
                            // border='left'{...{ color: 'neutral-4' }}
                            justify="center"
                            // align="left"
                            pad={{ horizontal: 'small', vertical: 'small' }}
                          >
                            <Box primary
                            // background='dark-1'
                            >
                              <Image fit="contain" src={'/img/team/Reba.jpg'} />
                            </Box>
                            <Box primary
                              flex={false}
                              height="xxsmall"
                              justify="center"
                              align="center"
                              // background="blue"
                              pad={{ horizontal: 'none', vertical: 'none' }}
                              margin={{ horizontal: 'none', vertical: 'none' }}
                            >
                              <h2>Reba Aronne</h2>
                            </Box>
                            <Box primary
                              flex={false}
                              height="30px"
                              justify="center"
                              align="center"
                              // background="green"
                              pad={{ bottom: 'medium' }}
                            >
                              <h4>VP, Culture & Operations/Producer</h4>
                            </Box>
                            <Box primary
                              flex={false}
                              height="medium"
                              // justify="start"
                              alignSelf="center"
                              // pad={{ horizontal: 'small' }}
                              width={{ "max": "medium" }}
                            // background="red"
                            // margin={{ horizontal: 'none', vertical: 'none' }}
                            >
                              <Text>
                                With almost twenty years of
                                experience in event production
                                and live events, Reba Aronne has
                                honed her Executive Producer/
                                Project Director skills into what we
                                like to refer to as a true Production
                                Unicorn. Her empathetic style, and
                                collaborative approach combined
                                with her natural leadership ability,
                                ensures team cohesion while placing
                                her clients’ goals first. While she
                                demands excellence from her team,
                                she does it in a way that we all want
                                to follow. Best: Reba is as quick with
                                the “dad” jokes as she is with revised
                                accurate budget numbers. (Full
                                disclosure: her budget numbers are
                                better than her jokes.)
                              </Text>
                            </Box>
                          </Box>
                          <Box primary
                            gridArea="four"
                            flex={false}
                            // background="black"
                            // border='left'{...{ color: 'neutral-4' }}
                            justify="center"
                            // align="left"
                            pad={{ horizontal: 'small', vertical: 'small' }}
                          >
                            <Box primary
                            // background='redark-1d'
                            >
                              <Image fit="contain" src={'/img/team/Sully.jpg'} />
                            </Box>
                            <Box primary
                              flex={false}
                              height="xxsmall"
                              justify="center"
                              align="center"
                              // background="blue"
                              pad={{ horizontal: 'none', vertical: 'none' }}
                              margin={{ horizontal: 'none', vertical: 'none' }}
                            >
                              <h2>Sully Taylor</h2>
                            </Box>
                            <Box primary
                              flex={false}
                              height="30px"
                              justify="center"
                              align="center"
                              // background="green"
                              pad={{ bottom: 'medium' }}
                            >
                              <h4>VP, Creative Services</h4>
                            </Box>
                            <Box primary
                              flex={false}
                              height="medium"
                              // justify="start"
                              alignSelf="center"
                              // pad={{ horizontal: 'small' }}
                              width={{ "max": "medium" }}
                            // background="red"
                            // margin={{ horizontal: 'none', vertical: 'none' }}
                            >
                              <Text>
                                Sully Taylor has a talent unlike any we’ve ever seen in
                                our industry. He has an uncanny ability to walk into any
                                space and visualize an event masterpiece. With only six
                                years in the industry, and unstoppable enthusiasm and
                                incomparable work ethic, he has risen quickly to the ranks
                                of a top production designer, and SVP Creative Services at
                                Studio Firefly. His excitement for a really good idea is
                                infectious, and he just makes work fun. Couple this insane
                                talent with a geek-ish passion for production technology,
                                and the ability to bridge the production and art teams, and
                                you get only Sully.
                              </Text>
                            </Box>
                          </Box>
                          <Box primary
                            gridArea="five"
                            flex={false}
                            // background="black"
                            // border='left'{...{ color: 'neutral-4' }}
                            justify="center"
                            // align="left"
                            pad={{ horizontal: 'small', vertical: 'small' }}
                          >
                            <Box primary
                            // background='dark-1'
                            >
                              <Image fit="contain" src={'/img/team/Robin.jpg'} />
                            </Box>
                            <Box primary
                              flex={false}
                              height="xxsmall"
                              justify="center"
                              align="center"
                              // background="blue"
                              pad={{ horizontal: 'none', vertical: 'none' }}
                              margin={{ horizontal: 'none', vertical: 'none' }}
                            >
                              <h2>Robin Harrigan</h2>
                            </Box>
                            <Box primary
                              flex={false}
                              height="30px"
                              justify="center"
                              align="center"
                              // background="green"
                              pad={{ bottom: 'medium' }}
                            >
                              <h4>Director of Production/Producer</h4>
                            </Box>
                            <Box primary
                              flex={false}
                              height="medium"
                              // justify="start"
                              alignSelf="center"
                              // pad={{ horizontal: 'small' }}
                              width={{ "max": "medium" }}
                            // background="red"
                            // margin={{ horizontal: 'none', vertical: 'none' }}
                            >
                              <Text>
                                Robin Harrigan began her production
                                career supporting commercial
                                & feature film visual effects
                                projects. After moving back to
                                the SF Bay Area, she worked on
                                feature & commercial productions
                                before accepting a staff position
                                at Dreamworks Animation where
                                she helped manage the workflow
                                pipeline on animated feature films
                                like Antz and Shrek. For the last
                                ten years Robin has supported live
                                event experiences all around the
                                world, always bringing a calm voice
                                and thoughtful insight. While she
                                claims to have an outside-of-work
                                life (volunteering, photography,
                                travel), we’re convinced she just
                                clones herself. Otherwise, we just
                                don’t know how she does it all so
                                effortlessly.
                              </Text>
                            </Box>
                          </Box>
                          <Box primary
                            gridArea="six"
                            flex={false}
                            // background="black"
                            // border='left'{...{ color: 'neutral-4' }}
                            justify="center"
                            // align="left"
                            pad={{ horizontal: 'small', vertical: 'small' }}
                          >
                            <Box primary
                            // background='redark-1d'
                            >
                              <Image fit="contain" src={'/img/team/Claudia.jpg'} />
                            </Box>
                            <Box primary
                              flex={false}
                              height="xxsmall"
                              justify="center"
                              align="center"
                              // background="blue"
                              pad={{ horizontal: 'none', vertical: 'none' }}
                              margin={{ horizontal: 'none', vertical: 'none' }}
                            >
                              <h2>Claudia Anaya</h2>
                            </Box>
                            <Box primary
                              flex={false}
                              height="30px"
                              justify="center"
                              align="center"
                              // background="green"
                              pad={{ bottom: 'medium' }}
                            >
                              <h4>Lead Production Coordinator</h4>
                            </Box>
                            <Box primary
                              flex={false}
                              height="medium"
                              // justify="start"
                              alignSelf="center"
                              // pad={{ horizontal: 'small' }}
                              width={{ "max": "medium" }}
                            // background="red"
                            // margin={{ horizontal: 'none', vertical: 'none' }}
                            >
                              <Text>
                                Claudia Anaya spent the first 13 years of her career in
                                live events supporting in the background, and mostly on
                                the event logistics and registration side of things. This
                                gave her a great foundation for our business and a deep
                                understanding of the necessity for collaboration between
                                events and production teams. She’s now our Lead Production
                                Coordinator, and a proven force to be reckoned with. Don’t
                                let her sweet and seemingly quiet demeanor fool you. Claudia
                                can keep all the plates spinning, and catch the juggling balls,
                                all without blinking. In short, she’s magic.
                              </Text>
                            </Box>
                          </Box>


                          <Box primary
                            gridArea="seven"
                            flex={false}
                            // background="black"
                            // border='left'{...{ color: 'neutral-4' }}
                            justify="center"
                            // align="left"
                            pad={{ horizontal: 'small', vertical: 'small' }}
                          >
                            <Box primary
                            // background="dark-1"
                            >
                              <Image fit="contain" src={'/img/team/Paris.jpg'} />
                            </Box>
                            <Box primary
                              flex={false}
                              height="xxsmall"
                              justify="center"
                              align="center"
                              // background="blue"
                              pad={{ horizontal: 'none', vertical: 'none' }}
                              margin={{ horizontal: 'none', vertical: 'none' }}
                            >
                              <h2>Paris Coyne</h2>
                            </Box>
                            <Box primary
                              flex={false}
                              height="30px"
                              justify="center"
                              align="center"
                              // background="green"
                              pad={{ bottom: 'medium' }}
                            >
                              <h4>Creative Developer</h4>
                            </Box>
                            <Box primary
                              flex={false}
                              height="medium"
                              // justify="start"
                              alignSelf="center"
                              // pad={{ horizontal: 'small' }}
                              width={{ "max": "medium" }}
                            // background="red"
                            // margin={{ horizontal: 'none', vertical: 'none' }}
                            >
                              <Text>
                                Paris Coyne grew up in a family
                                of artists, plumbers, engineers, &
                                rocket scientists. The proximity of
                                so many different disciplines in her
                                life has informed her sensibilities
                                as a content creator and given her
                                the license to expand her horizons
                                without fear of mixing mediums.
                                After graduating with a degree
                                in Communications and Digital
                                Filmmaking, Paris knew she wanted
                                to pursue a life and career that
                                included all the art forms she grew
                                up with and found joy in. We’re lucky
                                she found her home at Studio Firefly,
                                and to be inspired by her energy,
                                talent, and vivacity. Lately, on our
                                virtual staff meetings, we play a
                                game of who can knock Paris off her
                                seat through sheer enthusiasm over
                                a creative idea.
                              </Text>
                            </Box>
                          </Box>
                          <Box primary
                            gridArea="eight"
                            flex={false}
                            // background="black"
                            // border='left'{...{ color: 'neutral-4' }}
                            justify="center"
                            // align="left"
                            pad={{ horizontal: 'small', vertical: 'small' }}
                          >
                            <Box primary
                            // background='dark-1'
                            >
                              <Image fit="contain" src={'/img/team/Julie.jpg'} />
                            </Box>
                            <Box primary
                              flex={false}
                              height="xxsmall"
                              justify="center"
                              align="center"
                              // background="blue"
                              pad={{ horizontal: 'none', vertical: 'none' }}
                              margin={{ horizontal: 'none', vertical: 'none' }}
                            >
                              <h2>Julie Thompson</h2>
                            </Box>
                            <Box primary
                              flex={false}
                              height="30px"
                              justify="center"
                              align="center"
                              // background="green"
                              pad={{ bottom: 'medium' }}
                            >
                              <h4>Executive Admin/Coordinator</h4>
                            </Box>
                            <Box primary
                              flex={false}
                              height="medium"
                              // justify="start"
                              alignSelf="center"
                              // pad={{ horizontal: 'small' }}
                              width={{ "max": "medium" }}
                            // background="red"
                            // margin={{ horizontal: 'none', vertical: 'none' }}
                            >
                              <Text>
                                Julie Thompson is the heart of Studio Firefly. She lifts all
                                of us up to be better people and better team players. She’s a
                                master cat wrangler (the literal variety, and the Studio Firefly
                                management variety), and she does it all with great ease and an
                                infectious smile. Julie is like that one cog in the center of the
                                machine that keeps us all going, whether we are all in the same
                                office together, off in various locations around the world, or
                                working remotely from home.
                              </Text>
                            </Box>
                          </Box>
                          {/* <Box primary
                            gridArea="nine"
                            flex={false}
                            // background="black"
                            // border='left'{...{ color: 'neutral-4' }}
                            justify="center"
                            // align="left"
                            pad={{ horizontal: 'small', vertical: 'small' }}
                          >
                            <Box primary
                            // background='dark-1'
                            >
                              <Image fit="contain" src={'/img/team/Natalie.jpg'} />
                            </Box>
                            <Box primary
                              flex={false}
                              height="xxsmall"
                              justify="center"
                              align="center"
                              // background="blue"
                              pad={{ horizontal: 'none', vertical: 'none' }}
                              margin={{ horizontal: 'none', vertical: 'none' }}
                            >
                              <h2>Natalie Steffen</h2>
                            </Box>
                            <Box primary
                              flex={false}
                              height="30px"
                              justify="center"
                              align="center"
                              // background="green"
                              pad={{ bottom: 'medium' }}
                            >
                              <h4>Designer</h4>
                            </Box>
                            <Box primary
                              flex={false}
                              height="medium"
                              justify="start"
                              pad={{ horizontal: 'none' }}
                            // background="red"
                            // margin={{ horizontal: 'none', vertical: 'none' }}
                            >
                              <Text>
                                COPY NEEDED
                              </Text>
                            </Box>
                          </Box> */}
                        </ResponsiveGridTeam>

                        <Box primary ///*** FOOTER */
                          // border={{ color: 'red' }}
                          flex={false}
                          // border={{ color: 'blue' }}
                          alignSelf="center"
                          width="750px"
                          margin={{ top: "50px" }}
                        >
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

                <Footer primary background="background-back" pad="18px"></Footer>
              </Box>

              {(!showSidebar || size !== 'small') ? (
                <Collapsible border={{ color: 'black' }} direction="horizontal" open={showSidebar}>
                  <Box primary
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
                        <Anchor margin={{ vertical: 'large' }} size="xxlarge" hoverColor="#ff00ff" href="/" alignSelf='start' label="Home" ></Anchor>
                        <Anchor margin={{ vertical: 'medium' }} size="xxlarge" hoverColor="#ff00ff" href="/projects" alignSelf='start' label="Projects"></Anchor>
                        <Anchor margin={{ vertical: 'large' }} size="xxlarge" hoverColor="#ff00ff" href="/about" alignSelf='start' label="Team"></Anchor>
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
