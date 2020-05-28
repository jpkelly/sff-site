import React, { useState } from "react";
import { Grommet, Box, Button, Collapsible, Heading, ResponsiveContext, Layer, Paragraph, Footer, Grid, Nav, Image } from 'grommet';
import { Text } from "../components/Text";
import { Anchor } from "../components/Anchor";
// import { Box } from "../components/Box";
import { normalizeColor } from 'grommet/utils';
import { rgba } from 'polished';
import { FormClose, Menu, Facebook, Instagram, Linkedin } from 'grommet-icons';
// import { ThemeProvider } from 'styled-components';
import { deepMerge } from "grommet/utils";
import { Link } from "react-router-dom";
import '../App.css';
import logo from '../sfflogo.svg';

import lisa from '../img/team/Lisa.jpg';
import ethan from '../img/team/Ethan.jpg';

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
  large: ["525px", "525px", "525px"],
  xlarge: ["525px", "525px", "525px"]
};
const rows = {
  small: ["auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto"],
  medium: ["auto", "auto", "auto", "auto", "auto"],
  large: ["auto", "auto", "auto", "auto"],
  xlarge: ["auto", "auto", "auto", "auto"]
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

// **************************
//         PROJECTS
// **************************

// F8Neb
const F8Neb = [
  "Setup-Neb",
  "IMG_2378",
  "F8NebFeatured"
];
const F8NebGrid = F8Neb.map(fileName => (
  <Box primary
  flex={true}
  height="large" width="large"
    elevation="none"
    key={fileName}
    background="background-back"
    flex={false}
    justify="center"
    align="center"
  >
    {/* <Heading level={2}>{memberName}</Heading> */}
    <Image fit='contain' src={require('../img/projects/F8Neb/'+fileName+'.jpg')} />
  </Box>
));

// SLSphere
const SLSphere = [
  "Projection-Study",
  "Beams-and-Rig",
  "Blocks",
  "sphere_exterior",
  "sphere_model",
  "Shadow-Man"
];
const SLSphereGrid = SLSphere.map(fileName => (
  <Box primary
  flex={true}
  height="large" width="large"
    elevation="none"
    key={SLSphere}
    background="background-back"
    flex={false}
    justify="center"
    align="center"
  >
    {/* <Heading level={2}>{memberName}</Heading> */}
    <Image fit='contain' src={require('../img/projects/SLSphere/'+fileName+'.jpg')} />
  </Box>
));

// TOTO
const TOTO = [
  "character",
  "edit",
  "main",
  "prototype",
  "rpi",
  "shiz_box"
];
const TOTOGrid = TOTO.map(fileName => (
  <Box primary
  flex={true}
  height="large" width="large"
    elevation="none"
    key={TOTO}
    background="background-back"
    flex={false}
    justify="center"
    align="center"
  >
    {/* <Heading level={2}>{memberName}</Heading> */}
    <Image fit='contain' src={require('../img/projects/TOTO/'+fileName+'.jpg')} />
  </Box>
));

// BMW
const BMW = [
  "screen_build",
  "model",
  "party"
];
const BMWGrid = BMW.map(fileName => (
  <Box primary
  flex={true}
  height="large" width="large"
    elevation="none"
    key={BMW}
    background="background-back"
    flex={false}
    justify="center"
    align="center"
  >
    {/* <Heading level={2}>{memberName}</Heading> */}
    <Image fit='contain' src={require('../img/projects/BMW/'+fileName+'.jpg')} />
  </Box>
));

// Autodesk
const Autodesk = [
  "bruce",
  "printer",
  "breakthru"
];
const AutodeskGrid = Autodesk.map(fileName => (
  <Box primary
  flex={true}
  height="large" width="large"
    elevation="none"
    key={Autodesk}
    background="background-back"
    flex={false}
    justify="center"
    align="center"
  >
    {/* <Heading level={2}>{memberName}</Heading> */}
    <Image fit='contain' src={require('../img/projects/Autodesk/'+fileName+'.jpg')} />
  </Box>
));

// SAP
const SAP = [
  "gauntlets",
  "demo_space",
  "dancer"
];
const SAPGrid = SAP.map(fileName => (
  <Box primary
  flex={true}
  height="large" width="large"
    elevation="none"
    key={SAP}
    background="background-back"
    flex={false}
    justify="center"
    align="center"
  >
    {/* <Heading level={2}>{memberName}</Heading> */}
    <Image fit='contain' src={require('../img/projects/SAP/'+fileName+'.jpg')} />
  </Box>
));



function App() {
  const [isDark, setIsDark] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={SFFtheme} themeMode={isDark ? 'light' : 'dark'} full={true}>
    <ResponsiveContext.Consumer>
    {size => (
      <Box primary fill={true}>
        <AppBar primary>
          <Heading level='3' margin='none'></Heading>
          <Button secondary
            icon={<Menu />}
            onClick={() => setShowSidebar(!showSidebar)}
          />
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
                  <h3 margin="none">Here is a small sampling of some of the work we are proud of.</h3>
                </Paragraph>

                {/* <Image fit='contain' src={require('../img/team/Lisa.jpg')} /> */}
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
                
                <Heading level={2}>F8 Projection Mapping</Heading>
                <ResponsiveGrid
                  gap="small"
                  margin="medium"
                  columns="medium"
                  rows="xsmall"
                >
                  {F8NebGrid}
                </ResponsiveGrid>

                <Heading level={2}>Silver Legacy Projection Mapping</Heading>
                <ResponsiveGrid
                  gap="small"
                  margin="medium"
                  columns="medium"
                  rows="xsmall"
                >
                  {SLSphereGrid}
                </ResponsiveGrid>

                <Heading level={2}>SAP Interactive Experience</Heading>
                <ResponsiveGrid
                  gap="small"
                  margin="medium"
                  columns="medium"
                  rows="xsmall"
                >
                  {SAPGrid}
                </ResponsiveGrid>

                <Heading level={2}>BMW Projection Mapping</Heading>
                <ResponsiveGrid
                  gap="small"
                  margin="medium"
                  columns="medium"
                  rows="xsmall"
                >
                  {BMWGrid}
                </ResponsiveGrid>

                <Heading level={2}>TOTO Wonderbox</Heading>
                <ResponsiveGrid
                  gap="small"
                  margin="medium"
                  columns="medium"
                  rows="xsmall"
                >
                  {TOTOGrid}
                </ResponsiveGrid>

                <Heading level={2}>Autodesk Projection Mapping</Heading>
                <ResponsiveGrid
                  gap="small"
                  margin="medium"
                  columns="medium"
                  rows="xsmall"
                >
                  {AutodeskGrid}
                </ResponsiveGrid>

                

              </Box>
                
            </Box> 
            
              </Box>
            </Box>

            <Footer primary background="background-back" pad="medium">

              <Text size='xsmall'>Copyright &copy; {today.getFullYear()} Studio Firefly</Text>
              {/* <Anchor size='xsmall' label="About" /> */}
            </Footer>
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
                <Anchor hoverColor="#ff00ff" href="/" alignSelf='start' label="About" >About</Anchor>
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
                  <Anchor margin={{ vertical: 'large' }} size="xxlarge" hoverColor="#ff00ff" href="/" alignSelf='start' label="About" >About</Anchor>
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
