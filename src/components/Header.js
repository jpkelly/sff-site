import React, { useState } from "react";
import { grommet, Box, Button, Collapsible, Heading, Grommet, ResponsiveContext, Layer, Paragraph, Footer, Text, Anchor, Grid, Nav } from 'grommet';
// import { normalizeColor } from 'grommet/utils';
// import { rgba } from 'polished';
import { FormClose, Menu, Facebook, Instagram, Linkedin } from 'grommet-icons';
// import { ThemeProvider } from 'styled-components';
import { deepMerge } from "grommet/utils";
import { Link } from "react-router-dom";
import '../App.css';
import logo from '../sfflogo.svg';

import SFFtheme from '../Theme.js';

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='black'
    pad={{ left: 'medium', right: 'small', vertical: 'none' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={SFFtheme} full>
    <ResponsiveContext.Consumer>
    {size => (
      <Box primary fill>
        <AppBar primary>
          <Heading level='3' margin='none'></Heading>
          <Button secondary
            icon={<Menu />}
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </AppBar>
        
      </Box>
      )}
    </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default Header;
