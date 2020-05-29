import React, { useState } from "react";
import { Grommet, Box, Button, Collapsible, Heading, ResponsiveContext, Layer, Paragraph, Footer, Grid, Nav, Image } from 'grommet';
import { Text } from "../components/Text";
import { Anchor } from "../components/Anchor";
// import { Box } from "../components/Box";
// import { normalizeColor } from 'grommet/utils';
// import { rgba } from 'polished';
import { FormClose, Menu, Facebook, Instagram, Linkedin } from 'grommet-icons';
// import { ThemeProvider } from 'styled-components';
// import { deepMerge } from "grommet/utils";
// import { Link } from "react-router-dom";
import '../App.css';
import logo from '../sfflogo.svg';

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


// Grid setup
const columns = {
  small: ["320px"],
  medium: ["360px", "360px"],
  large: ["222px", "222px", "222px", "222px", "222px", "222px"],
  xlarge: ["222px", "222px", "222px", "222px", "222px", "222px"]
};
const rows = {
  small: ["1025px", "990px", "550px", "550px", "550px", "550px", "550px", "550px", "550px"],
  medium: ["900px", "550px", "550px", "550px", "550px"],
  large: ["900px", "550px", "550px", "550px"],
  xlarge: ["900px", "550px", "550px", "550px"]
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
    { name: "nine", start: [0, 4], end: [0, 4] }
  ],
  large: [
    { name: "one", start: [1, 0], end: [2, 0] },
    { name: "two", start: [3, 0], end: [4, 0] },
    { name: "three", start: [1, 1], end: [2, 1] },
    { name: "four", start: [3, 1], end: [4, 1] },
    { name: "five", start: [0, 2], end: [1, 2] },
    { name: "six", start: [2, 2], end: [3, 2] },
    { name: "seven", start: [4, 2], end: [5, 2] },
    { name: "eight", start: [1, 3], end: [2, 3] },
    { name: "nine", start: [3, 3], end: [4, 3] }
  ],
  xlarge: [
    { name: "one", start: [0, 0], end: [0, 0] },
    { name: "two", start: [1, 0], end: [1, 0] },
    { name: "three", start: [0, 1], end: [0, 1] },
    { name: "four", start: [1, 1], end: [1, 1] },
    { name: "five", start: [0, 2], end: [0, 2] },
    { name: "six", start: [1, 2], end: [1, 2] },
    { name: "seven", start: [1, 1], end: [1, 1] },
    { name: "eight", start: [0, 2], end: [0, 2] },
    { name: "nine", start: [1, 2], end: [1, 2] }
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

// Footer Grid setup
const columnsFooter = {
  small: ["small"],
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
    { name: "oneFooter", start: [0, 0], end: [0, 0] },
    { name: "twoFooter", start: [0, 1], end: [0, 1] },
    { name: "threeFooter", start: [0, 2], end: [0, 2] }
  ],
  medium: [
    { name: "oneFooter", start: [0, 0], end: [0, 0] },
    { name: "twoFooter", start: [1, 0], end: [1, 0] },
    { name: "threeFooter", start: [2, 0], end: [2, 0] }
  ],
  large: [
    { name: "oneFooter", start: [0, 0], end: [0, 0] },
    { name: "twoFooter", start: [1, 0], end: [1, 0] },
    { name: "threeFooter", start: [2, 0], end: [2, 0] }
  ],
  xlarge: [
    { name: "oneFooter", start: [0, 0], end: [0, 0] },
    { name: "twoFooter", start: [1, 0], end: [1, 0] },
    { name: "threeFooter", start: [2, 0], end: [2, 0] }
  ]
};
const ResponsiveGrid = ({
  children,
  overrideColumns,
  overrideRows,
  areasFooter,
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
          areasFooter={!areasVal ? undefined : areasVal}
          rowsFooter={!rowsVal ? size : rowsVal}
          columnsFooter={!columnsVal ? size : columnsVal}
        >
          {children}
        </Grid>
      );
    }}
  </ResponsiveContext.Consumer>
);


function App() {
  const [isDark] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={SFFtheme} themeMode={isDark ? 'light' : 'dark'} full={true}>
    <ResponsiveContext.Consumer>
    {size => (
      <Box primary fill={true}>
        <AppBar primary>
          <Heading level='3' margin='none'></Heading>
          <Anchor onClick={() => setShowSidebar(!showSidebar)} icon={<Menu />}　hoverColor="#ff00ff" />
        </AppBar>
        <Box primary direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box primary flex align='center' justify='center' background='background-back'>


          <Box secondary
                flex={true}
                align='center'
                width='95%'
                pad={{ horizontal: '2px', vertical: '2px' }}
                background='red'
              >  
              <Box primary
              flex={true}
              // border={{ color: 'red' }}
              align='center'
              width='100%'
            > 


              <Box primary // MAIN CONTENT BOX
              flex={true}
              // border={{ color: 'green' }}
              align='center'
              width='100%'
              overflow={{ horizontal: 'hidden' }}
              pad={{ horizontal: '15px' }}
              background='black'
              >
              <Box primary
                flex={false}
                // border={{ color: 'blue' }}
                width={{ min: '320px', max: '750px' }}
                // background='red'
              >

                <Anchor href="https://www.studiofirefly.com">
                  <img src={logo} className="logo-image" alt="Logo" />
                </Anchor>

                <Paragraph size='large' fill={true} margin={{ vertical: 'none' }}>
                  <h3 margin="none">We decode visions, craft experiences, and deliver with precision, passion, and joy. We are world builders.</h3>
                </Paragraph>

                {/* <Image fit='contain' src={ '../img/team/Lisa.jpg'} /> */}
                {/* <Image fit='contain' src={ethan} /> */}

              </Box> 

                {/* <Box primary background='red'>
                <Image fit='contain' src={ethan} />
                </Box> */}
              <Box primary
                // flex={false}
                // border={{ color: '#00ffff' }}
                
                // style={{width:'100%', height:20}}/>
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
                        // pad={{ horizontal: 'small', vertical: 'small' }}
                      >
                        <Box primary 
                        >
                          <Image fit="contain" src={ require('../img/team/Lisa.jpg')} />
                          
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
                        justify="start"
                        pad={{ horizontal: '20px' }}
                        // background="red"
                        // margin={{ horizontal: 'none', vertical: 'none' }}
                        >
                          <Text>
                          With 20 years of experience in live events, Lisa has developed a proven event strategy, content development, and creative process. She also has an uncanny ability to push creative beyond rectangular screens, while still approaching a project holistically and maintaining a cohesive message through every aspect of a project. Although she has a passion for creating wonderment, she knows that this cannot be achieved without production excellence, which is why she believes in the importance of empowered producers to manage client relationships. Before founding Studio Firefly, and leading our production team, Lisa was the Chief Dreamer for satoriteller, a multifaceted media arts and production company.
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
                        // pad={{ horizontal: 'small', vertical: 'small' }}
                      >
                        <Box primary 
                        >
                          <Image fit="contain" src={ require('../img/team/Ethan.jpg')} />
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
                        justify="start"
                        pad={{ horizontal: '20px' }}
                        // background="red"
                        // margin={{ horizontal: 'none', vertical: 'none' }}
                        >
                          <Text>
                          Ethan has devoted his artistic talents to more than 800 corporate, theatrical, and television productions over the past 20+ years. With a diverse background in production and content design, he ably balances his creative and technical skills to execute excellence on every Studio Firefly project. Ethan has a keen eye for design mixed with a practical approach that ensures every moment of a branding experience is not only compelling and filled with wonderment, but also achievable. Before founding Studio Firefly, and leading our team of designers and artists, Ethan was the founder and Creative Director for Firefly Arts, a media arts and design company.
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
                        // background='redark-1d'
                        >
                          <Image fit="contain" src={ require('../img/team/Sully.jpg')} />
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
                        // background='dark-1'
                        >
                          <Image fit="contain" src={ require('../img/team/Reba.jpg')} />
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
                          <Image fit="contain" src={ require('../img/team/Robin.jpg')} />
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
                          <Image fit="contain" src={ require('../img/team/Claudia.jpg')} />
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
                        // background='dark-1'
                        >
                          <Image fit="contain" src={ require('../img/team/Julie.jpg')} />
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
                        // background="dark-1"
                        >
                          <Image fit="contain" src={ require('../img/team/Paris.jpg')} />
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
                      </Box>
                      <Box primary
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
                          <Image fit="contain" src={ require('../img/team/Natalie.jpg')} />
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
                      </Box>
                    </ResponsiveGridTeam>

                    <Box primary ///*** FOOTER */
                    // border={{ color: 'red' }}
                    flex={false}
                    // border={{ color: 'blue' }}
                    alignSelf="center"
                    width="750px"
                    margin={{top: "50px"}}
                    >
                        <Box primary 
                        // border={{ color: 'green' }}
                        >
                            {/* <ResponsiveGrid primary
                            border={{ color: 'red' }}
                            rowsFooter={rowsFooter}
                            columnsFooter={columnsFooter}
                            gap="small"
                            areasFooter={areasFooter}
                            margin={{ horizontal: 'none', vertical: 'medium' }}
                            >
                                <Box primary 
                                    gridArea="oneFooter"
                                    // background="black"
                                    border='left'{...{ color: 'light-1' }}
                                    justify="center"
                                    // align="left"
                                    pad={{ horizontal: 'small', vertical: 'small' }}
                                >
                                    <Anchor hoverColor="#007fff" href="https://goo.gl/maps/59mHnN4Bp3soz3Hb8">
                                    480 Gate 5 Road #104<br></br>
                                    Sausalito, CA 94965
                                    </Anchor>
                                </Box>
                                <Box primary
                                    gridArea="twoFooter"
                                    // background="black"
                                    border='left'{...{ color: 'neutral-3' }}
                                    justify="center"
                                    // align="left"
                                    pad={{ horizontal: 'small', vertical: 'small' }}
                                >
                                    <Anchor hoverColor="#ff7f00" href="tel:415-944-2286"><strong>+1.415.944.2286</strong></Anchor>
                                    <Anchor hoverColor="#ff00ff" href="mailto:studio@studiofirefly.com"><strong>studio@studiofirefly.com</strong></Anchor>
                                </Box>
                                <Box primary border={{ color: 'red' }}
                                    gridArea="threeFooter"
                                    // background="black"
                                    border='left'{...{ color: '#ffffff' }}
                                    justify="center"
                                    // align="left"
                                    pad={{ horizontal: 'small', vertical: 'small' }}
                                >
                                    <Nav primary direction="row" background="background-back" pad="none" gap="none">
                                        <Anchor href="http://instagram.com/bystudiofirefly" icon={<Instagram />}　hoverColor="#ff00ff" />
                                        <Anchor href="http://facebook.com/bystudiofirefly" icon={<Facebook />} hoverColor="#ff00ff"　/>
                                        <Anchor href="http://linkedin.com/company/studiofirefly" icon={<Linkedin />} hoverColor="#ff00ff" />
                                    </Nav>
                                </Box>
                            </ResponsiveGrid> */}
                            <Footer primary justify="center" pad={{top: "30px", bottom: "15px"}}>
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
              border='right'
              elevation='none'
              align='start'
              justify='start'
            >
              <Nav primary background="background-back"  gap="small">
                <Anchor hoverColor="#ff00ff" href="/" alignSelf='start' label="Home" >Home</Anchor>
                <Anchor hoverColor="#ff00ff" href="/projects" alignSelf='start' label="Projects">Projects</Anchor>
                <Anchor hoverColor="#ff00ff" href="/about" alignSelf='start' label="Team">Team</Anchor>
              </Nav>
            </Box>
          </Collapsible>
          ): (
            <Layer>
              <Box primary
              background='black'
              tag='header'
              justify='end'
              align='center'
              direction='row'
            >
              <Button secondary
                icon={<FormClose />}
                onClick={() => setShowSidebar(false)}
              />
              </Box>
              <Box primary
                fill
                background='black'
                align='center'
                justify='start'
              >
                <Nav align='center' primary background="background-back"  gap="xlarge">
                  <Anchor margin={{ vertical: 'large' }} size="xxlarge" hoverColor="#ff00ff" href="/" alignSelf='start' label="Home" >Home</Anchor>
                  <Anchor margin={{ vertical: 'medium' }} size="xxlarge" hoverColor="#ff00ff" href="/projects" alignSelf='start' label="Projects">Projects</Anchor>
                  <Anchor margin={{ vertical: 'large' }} size="xxlarge" hoverColor="#ff00ff" href="/about" alignSelf='start' label="Team">Team</Anchor>
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
