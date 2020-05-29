import React, { useState } from "react";
import { Box, Button, Collapsible, Grommet, ResponsiveContext, Layer, Paragraph, Anchor, Grid, Nav } from 'grommet';
// import { normalizeColor } from 'grommet/utils';
// import { rgba } from 'polished';
import { FormClose, Facebook, Instagram, Linkedin } from 'grommet-icons';
// import { ThemeProvider } from 'styled-components';
// import { deepMerge } from "grommet/utils";
// import { Link } from "react-router-dom";
import '../App.css';
import logo from '../sfflogo.svg';

import SFFtheme from '../Theme.js';

// Grid setup
const columns = {
  small: ["auto"],
  medium: ["auto", "auto"],
  large: ["auto", "auto", "auto"],
  xlarge: ["auto", "auto", "auto"]
};
const rows = {
  small: ["xxsmall", "xxsmall", "xxsmall"],
  medium: ["xxsmall", "xxsmall"],
  large: ["xxsmall"],
  xlarge: ["xxsmall"]
};
const areas = {
  small: [
    { name: "header", start: [0, 0], end: [0, 0] },
    { name: "test", start: [0, 1], end: [0, 1] },
    { name: "test1", start: [0, 2], end: [0, 2] }
  ],
  medium: [
    { name: "header", start: [0, 0], end: [1, 0] },
    { name: "test", start: [0, 1], end: [0, 1] },
    { name: "test1", start: [1, 1], end: [1, 1] }
  ],
  large: [
    { name: "header", start: [0, 0], end: [0, 0] },
    { name: "test", start: [1, 0], end: [1, 0] },
    { name: "test1", start: [2, 0], end: [2, 0] }
  ],
  xlarge: [
    { name: "header", start: [0, 0], end: [0, 0] },
    { name: "test", start: [1, 0], end: [1, 0] },
    { name: "test1", start: [2, 0], end: [2, 0] }
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

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={SFFtheme} full>
    <ResponsiveContext.Consumer>
    {size => (
      <Box primary fill>
        
        <Box primary direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box primary flex align='center' justify='center' background='black'>
            <Box secondary
              flex
              border={{ color: 'red' }}
              align='center'
              width='95%'
              overflow={{ horizontal: 'hidden' }}
              pad={{ horizontal: '5%' }}
              background='black'
              >
              <Box primary
                border={{ color: 'black' }}
                align='left'
                width={{ min: '200px', max: '750px' }}
                background='black'
              >
                <img src={logo} className="logo-image" alt="Logo" />
                <Paragraph size='large' fill='true' margin={{ vertical: '15px' }}>
                  SIDEBAR 
                </Paragraph>
                <Paragraph size='large' fill='true' margin={{ vertical: '15px' }}>
                  So, using our internal resources, we decided to build our own. While we aren't advocating that we can ever replicate or replace the experience of a live show, we think we can come closer to making the digital experience as compelling as the live experience. After all, at Studio Firefly, we are all about wonderment. 
                </Paragraph>
                <Paragraph size='large' fill='true' margin={{ vertical: '15px' }}>
                   More coming in the next few months, with a launch and full Digital Event Experience Demo coming this July, 2020. In the meantime, here's a sneak peek at what our designers, coders, producers, and technicians have been working on:
                </Paragraph>
                <Button primary variant="outlined" label='vevomo.com' alignSelf='start' />

                <Box primary>
                  <ResponsiveGrid primary
                    rows={rows}
                    columns={columns}
                    gap="small"
                    areas={areas}
                    margin={{ horizontal: 'none', vertical: 'medium' }}
                  >
                    <Box 
                      gridArea="header"
                      // background="black"
                      border='left'{...{ color: 'light-1' }}
                      justify="center"
                      align="left"
                      pad={{ horizontal: 'small', vertical: 'small' }}
                    >
                      <Anchor href="https://goo.gl/maps/59mHnN4Bp3soz3Hb8">
                      480 Gate 5 Road #104<br></br>
                      Sausalito, CA 94965
                      </Anchor>
                    </Box>
                    <Box
                      gridArea="test"
                      // background="black"
                      border='left'{...{ color: 'neutral-3' }}
                      justify="center"
                      align="left"
                      pad={{ horizontal: 'small', vertical: 'small' }}
                    >
                      <Anchor href="tel:415-944-2286"><strong>+1.415.944.2286</strong></Anchor>
                      <Anchor href="mailto:studio@studiofirefly.com"><strong>studio@studiofirefly.com</strong></Anchor>
                    </Box>
                    <Box
                      gridArea="test1"
                      // background="black"
                      border='left'{...{ color: 'neutral-4' }}
                      justify="center"
                      align="left"
                      pad={{ horizontal: 'small', vertical: 'small' }}
                    >
                      <Nav  direction="row" background="black" pad="xsmall">
                          <Anchor  icon={<Instagram />} hoverIndicator={{"dark": "light-2", "light": "dark-2"}} >TEST</Anchor>
                          <Anchor  icon={<Facebook />} hoverIndicator={{"dark": "light-2", "light": "dark-2"}} />
                          <Anchor  icon={<Linkedin />} hoverIndicator={{"dark": "light-2", "light": "dark-2"}} />
                      </Nav>
                    </Box>
                  </ResponsiveGrid>
                </Box>
                
              </Box> 
            </Box> 
            
          </Box>

          {(!showSidebar || size !== 'small') ? (
            <Collapsible border={{ color: 'black' }} direction="horizontal" open={showSidebar}>
            <Box 
              flex
              width='xsmall'
              background='black'
              border='right'
              elevation='small'
              align='start'
              justify='start'
            >
              <Nav background="black"  gap="small">
                <Anchor href="/" alignSelf='start' label="Main" >Main</Anchor>
                <Anchor href="/projects" alignSelf='start' label="Projects">Projects</Anchor>
                <Anchor href="/about" alignSelf='start' label="About">About</Anchor>
              </Nav>
            </Box>
          </Collapsible>
          ): (
            <Layer>
              <Box 
              background=''
              tag='header'
              justify='center'
              align='center'
              direction='row'
            >
              <Button 
                icon={<FormClose />}
                onClick={() => setShowSidebar(false)}
              />
              </Box>
              <Box 
                fill
                background=''
                align='center'
                justify='center'
              >
                sidebar
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

export default Sidebar;
