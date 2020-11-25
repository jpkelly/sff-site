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

function App() {
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
                  <Box primary
                    flex={true}
                    // border={{ color: 'red' }}
                    align='center'
                    width='100%'
                  >
                    {/* <Box primary // BG PARTICLES
                      flex={true}
                      align='center'
                      width='100%'
                      background="blue"
                    >  */}
                      {/* <Particles/> */}
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
                          border={{ color: 'black' }}
                          // align='left'
                          width={{ min: '200px', max: '750px' }}
                          background='background-back'
                        >
                          <Anchor href="https://www.studiofirefly.com">
                            <img src={logo} className="logo-image" alt="Logo" />
                          </Anchor>

                          <Paragraph size='large' fill={true} margin={{ vertical: '15px' }}>
                            At Studio Firefly, we never stop innovating. During the “Great Pause” we have pivoted our entire staff to join forces with our sister company, satoriteller. We don't love any of the virtual platforms that we've seen because they fail to produce a sense of community and a level of engagement that a live event creates.
                          </Paragraph>
                          <Paragraph size='large' fill={true} margin={{ vertical: '15px' }}>
                            So, using our internal resources, we decided to build our own. While we aren't advocating that we can ever replicate or replace the experience of a live show, we think we can come closer to making the digital experience as compelling as the live experience. After all, at Studio Firefly, we are all about wonderment.
                          </Paragraph>
                          <Paragraph size='large' fill={true} margin={{ vertical: '15px' }}>
                            More coming in the next few months, with a launch and full Digital Event Experience Demo coming this July, 2020. In the meantime, here's a sneak peek at what our designers, coders, producers, and technicians have been working on:
                          </Paragraph>

                          <Stack >
                            <Button href="https://vevomo.com" margin={{ horizontal: '0px', vertical: '21px' }} primary variant="outlined" label='vevomo.com' alignSelf='start' />
                            <Button href="https://vevomo.com" margin={{ horizontal: '3px', vertical: 'medium' }} secondary variant="outlined" label='vevomo.com' alignSelf='start' />
                          </Stack>
                          <Box primary  >
                            <ResponsiveGrid primary
                              rows={rowsGrommet}
                              columns={columnsGrommet}
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
                                  <Anchor href="http://instagram.com/bystudiofirefly" icon={<Instagram />} hoverColor="#ff00ff" />
                                  <Anchor href="http://facebook.com/bystudiofirefly" icon={<Facebook />} hoverColor="#ff00ff" />
                                  <Anchor href="http://linkedin.com/company/studiofirefly" icon={<Linkedin />} hoverColor="#ff00ff" />
                                </Nav>
                              </Box>
                            </ResponsiveGrid>
                            <Footer primary justify="center" pad={{ top: "30px", bottom: "15px" }}>
                              <Text background="red" size='xsmall'>Copyright &copy; {today.getFullYear()} Studio Firefly</Text>
                            </Footer>
                          </Box>

                        </Box>
                      </Box>
                    </Box>

                  {/* </Box> */}

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

export default App;

