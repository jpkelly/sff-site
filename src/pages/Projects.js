import React, { useState } from "react";
import { Grommet, Box, Button, Collapsible, Heading, ResponsiveContext, Layer, Paragraph, Footer, Nav, Grid } from 'grommet';
import { Text } from "../components/Text";
import { Anchor } from "../components/Anchor";
// import { Box } from "../components/Box";
// import { normalizeColor } from 'grommet/utils';
// import { rgba } from 'polished';
import { FormClose, Menu, Facebook, Instagram, Linkedin  } from 'grommet-icons';
// import { ThemeProvider } from 'styled-components';
// import { deepMerge } from "grommet/utils";
// import { Link } from "react-router-dom";

import Gallery from 'react-photo-gallery';
// import { photos } from "https://login.studiofirefly.com/img/F8Neb";

/* popout the browser and maximize to see more rows! -> */
// const BasicRows = () => <Gallery photos={photos} />;

import '../App.css';
import logo from '../sfflogo.svg';

// import lisa from 'https://login.studiofirefly.com/img/team/Lisa.jpg';
// import ethan from 'https://login.studiofirefly.com/img/team/Ethan.jpg';

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

// **************************
//         PROJECTS
// **************************

// // F8Neb
const F8Neb = [
  {
    src: 'https://login.studiofirefly.com/img/F8Neb/Setup-Neb.jpg',
    // src: 'https://images.unsplash.com/photo-1590594839482-c4036b2892e4',
    
    width: 3264,
    height: 2448
  },
  {
    src: "https://login.studiofirefly.com/img/F8Neb/IMG_2378.jpg",
    width: 2248,
    height: 3264
  },
  {
    src: "https://login.studiofirefly.com/img/F8Neb/F8NebFeatured.jpg",
    width: 1153,
    height: 1074
  }
];

// // SLSphere
const SLSphere = [
  {
    src: 'https://login.studiofirefly.com/img/SLSphere/Projection-Study.jpg',
    width: 1330,
    height: 998
  },
  {
    src: "https://login.studiofirefly.com/img/SLSphere/Beams-and-Rig.jpg",
    width: 1440,
    height: 1080
  },
  {
    src: "https://login.studiofirefly.com/img/SLSphere/Blocks.jpg",
    width: 1440,
    height: 1080
  },
  {
    src: 'https://login.studiofirefly.com/img/SLSphere/sphere_exterior.jpg',
    width: 1440,
    height: 1080
  },
  {
    src: "https://login.studiofirefly.com/img/SLSphere/sphere_model.jpg",
    width: 810,
    height: 1080
  },
  {
    src: "https://login.studiofirefly.com/img/SLSphere/Shadow-Man.jpg",
    width: 1440,
    height: 1080
  }
];

// // TOTO
const TOTO = [
  {
    src: "https://login.studiofirefly.com/img/TOTO/main.jpg",
    width: 1440,
    height: 1080
  },
  {
    src: 'https://login.studiofirefly.com/img/TOTO/character.jpg',
    width: 1440,
    height: 1080
  },
  {
    src: "https://login.studiofirefly.com/img/TOTO/edit.jpg",
    width: 1440,
    height: 1080
  },
  {
    src: 'https://login.studiofirefly.com/img/TOTO/prototype.jpg',
    width: 1440,
    height: 1080
  },
  {
    src: "https://login.studiofirefly.com/img/TOTO/rpi.jpg",
    width: 1,
    height: 1
  },
  {
    src: "https://login.studiofirefly.com/img/TOTO/shiz_box.jpg",
    width: 1,
    height: 1
  }
];

// // BMW
const BMW = [
  {
    src: "https://login.studiofirefly.com/img/BMW/model.jpg",
    width: 1330,
    height: 998
  },
  {
    src: 'https://login.studiofirefly.com/img/BMW/screen_build.jpg',
    width: 1440,
    height: 1080
  },
  {
    src: "https://login.studiofirefly.com/img/BMW/party.jpg",
    width: 1440,
    height: 1080
  }
];

// // Autodesk
const Autodesk = [
  {
    src: 'https://login.studiofirefly.com/img/Autodesk/bruce.jpg',
    width: 3647,
    height: 2735
  },
  {
    src: "https://login.studiofirefly.com/img/Autodesk/printer.jpg",
    width: 1440,
    height: 1080
  },
  {
    src: "https://login.studiofirefly.com/img/Autodesk/breakthru.jpg",
    width: 1440,
    height: 1080
  }
];

// // SAP
const SAP = [
  {
    src: 'https://login.studiofirefly.com/img/SAP/gauntlets.jpg',
    width: 2016,
    height: 1512
  },
  {
    src: "https://login.studiofirefly.com/img/SAP/demo_space.jpg",
    width: 2016,
    height: 1512
  },
  {
    src: "https://login.studiofirefly.com/img/SAP/dancer.jpg",
    width: 1036,
    height: 988
  },
];

function columns(containerWidth) {
  let columns = 1;
  if (containerWidth >= 500) columns = 1;
  if (containerWidth >= 900) columns = 2;
  if (containerWidth >= 1500) columns = 3;
  return columns;
}

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
const areas = {
  small: [
    { name: "one", start: [0, 0], end: [0, 0] },
    { name: "two", start: [0, 1], end: [0, 1] },
    { name: "three", start: [0, 2], end: [0, 2] }
  ],
  medium: [
    { name: "one", start: [0, 0], end: [0, 0] },
    { name: "two", start: [1, 0], end: [1, 0] },
    { name: "three", start: [2, 0], end: [2, 0] }
  ],
  large: [
    { name: "one", start: [0, 0], end: [0, 0] },
    { name: "two", start: [1, 0], end: [1, 0] },
    { name: "three", start: [2, 0], end: [2, 0] }
  ],
  xlarge: [
    { name: "one", start: [0, 0], end: [0, 0] },
    { name: "two", start: [1, 0], end: [1, 0] },
    { name: "three", start: [2, 0], end: [2, 0] }
  ]
};
const ResponsiveGrid = ({
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
                width="large"
                // background='red'
              >
                
                <Anchor href="https://www.studiofirefly.com">
                  <img src={logo} className="logo-image" alt="Logo" />
                </Anchor>

                <Paragraph size='large' fill={true} margin={{ vertical: 'none' }}>
                  <h3 margin="none">Here is a small sampling of some of the work we are proud of</h3>
                </Paragraph>

              </Box> 

                {/* <Box primary background='red'>
                <Image fit='contain' src={ethan} />
                </Box> */}
              <Box primary
                // flex={true}
                width='100%'
              >
                
                
                <Box primary
                flex={false}
                alignSelf="center"
                width="large"
                height="xsmall"
                margin={{top: "50px"}}
                >
                  <Heading level={1}>F8 Projection Mapping</Heading>
                </Box>
                <Gallery photos={F8Neb} direction="column" columns={columns}/>

                <Box primary
                flex={false}
                alignSelf="center"
                width="large"
                height="xsmall"
                margin={{top: "50px"}}
                >
                  <Heading level={1}>Silver Legacy Projection Mapping</Heading>
                </Box>
                <Gallery photos={SLSphere} direction="column" columns={columns}/>
                
                <Box primary
                flex={false}
                alignSelf="center"
                width="large"
                height="xsmall"
                margin={{top: "50px"}}
                >
                  <Heading level={1}>SAP Interactive Experience</Heading>
                </Box>
                <Gallery photos={SAP} direction="column" columns={columns}/>

                <Box primary
                flex={false}
                alignSelf="center"
                width="large"
                height="xsmall"
                margin={{top: "50px"}}
                >
                  <Heading level={1}>BMW Projection Mapping</Heading>
                </Box>
                <Gallery photos={BMW} direction="column" columns={columns}/>

                <Box primary
                flex={false}
                alignSelf="center"
                width="large"
                height="xsmall"
                margin={{top: "50px"}}
                >
                  <Heading level={1}>TOTO Wonderbox</Heading>
                </Box>
                <Gallery photos={TOTO} direction="column" columns={columns}/>

                <Box primary
                flex={false}
                alignSelf="center"
                width="large"
                height="xsmall"
                margin={{top: "50px"}}
                >
                  <Heading level={1}>Autodesk Projection Mapping</Heading>
                </Box>
                <Gallery photos={Autodesk} direction="column" columns={columns}/>

                <Box primary ///*** FOOTER */
                flex={false}
                // border={{ color: 'blue' }}
                alignSelf="center"
                width="750px"
                margin={{top: "50px"}}
                >
                    <Box primary  >
                        <ResponsiveGrid primary
                        rows={rowsFooter}
                        columns={columnsFooter}
                        gap="small"
                        areas={areas}
                        margin={{ horizontal: 'none', vertical: 'medium' }}
                        >
                            <Box primary
                                gridArea="one"
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
                                gridArea="two"
                                // background="black"
                                border='left'{...{ color: 'neutral-3' }}
                                justify="center"
                                // align="left"
                                pad={{ horizontal: 'small', vertical: 'small' }}
                            >
                                <Anchor hoverColor="#ff7f00" href="tel:415-944-2286"><strong>+1.415.944.2286</strong></Anchor>
                                <Anchor hoverColor="#ff00ff" href="mailto:studio@studiofirefly.com"><strong>studio@studiofirefly.com</strong></Anchor>
                            </Box>
                            <Box primary
                                gridArea="three"
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
                        </ResponsiveGrid>
                        <Footer primary justify="center" pad={{top: "30px", bottom: "15px"}}>
                            <Text background="red" size='xsmall'>Copyright &copy; {today.getFullYear()} Studio Firefly</Text>
                        </Footer>
                    </Box>
                </Box>  
                 {/* END FOOTER  */}

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
                <Nav align='start' primary background="background-back"  gap="xlarge">
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
