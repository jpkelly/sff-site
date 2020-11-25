import React, { useState } from "react";
import { Grommet, Box, Button, Collapsible, Heading, ResponsiveContext, Layer, Paragraph, Footer, Grid, Nav, Stack } from 'grommet';
import { Text } from "../components/Text";
import { Anchor } from "../components/Anchor";
import Particles from 'react-particles-js';
// import { normalizeColor } from 'grommet/utils';
// import { rgba } from 'polished';
import { FormClose, Menu, Facebook, Instagram, Linkedin } from 'grommet-icons';
// import { ThemeProvider } from 'styled-components';
// import { deepMerge } from "grommet/utils";
// import { Link } from "react-router-dom";
import '../App.css';
import logo from '../sfflogo.svg';

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

// Footer Grid setup
const columnsGrommet = {
  small: ["small"],
  medium: ["auto", "auto", "auto"],
  large: ["auto", "auto", "auto"],
  xlarge: ["auto", "auto", "auto"]
};
const rowsGrommet = {
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
        let columnsVal = columnsGrommet;
        if (columnsGrommet) {
          if (columnsGrommet[size]) {
            columnsVal = columnsGrommet[size];
          }
        }

        let rowsVal = rowsGrommet;
        if (rowsGrommet) {
          if (rowsGrommet[size]) {
            rowsVal = rowsGrommet[size];
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
  const [isDark] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={SFFtheme} themeMode={isDark ? 'light' : 'dark'} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box primary fill>
            <AppBar primary>
              <Heading level='3' margin='none'></Heading>
              <Anchor onClick={() => setShowSidebar(!showSidebar)} icon={<Menu />} hoverColor="#ff00ff" />
            </AppBar>
            <Box primary direction='row' flex overflow={{ horizontal: 'hidden' }} >
              <Box primary flex align='center' justify='center' background='background-back'>



                <Box secondary
                  flex={true}
                  align='center'
                  width='95%'
                  pad={{ horizontal: '2px', vertical: '2px' }}
                // background='red'
                >
                  CONTENT

                </Box>
                <Footer primary background="background-back" pad="18px">

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
                    <Nav primary background="background-back" gap="small">
                      <Anchor hoverColor="#ff00ff" href="/" alignSelf='start' label="Home" >Home</Anchor>
                      <Anchor hoverColor="#ff00ff" href="/projects" alignSelf='start' label="Projects">Projects</Anchor>
                      <Anchor hoverColor="#ff00ff" href="/about" alignSelf='start' label="Team">Team</Anchor>
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
                      <Nav align='center' primary background="background-back" gap="xlarge">
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

export default Sidebar;

