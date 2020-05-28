import React, { useState } from "react";
import { Grommet, Box, Button, Collapsible, Heading, ResponsiveContext, Layer, Paragraph, Footer, Grid, Nav, Image, Carousel } from 'grommet';
import { Text } from "../components/Text";
import { Anchor } from "../components/Anchor";
import { normalizeColor } from 'grommet/utils';
import { rgba } from 'polished';
import { FormClose, Menu, Facebook, Instagram, Linkedin } from 'grommet-icons';
// import { ThemeProvider } from 'styled-components';
import { deepMerge } from "grommet/utils";
import { Link } from "react-router-dom";
import '../App.css';
import logo from '../sfflogo.svg';

import SFFtheme from '../Theme.js';





const today = new Date();



function App() {
  const [isDark, setIsDark] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={SFFtheme} themeMode={isDark ? 'light' : 'dark'} full>
                        <Image fit="contain" src={require('../img/team/Paris.jpg')} />
                  <Carousel fill={true}>
                  <Image fit="contain" src={require('../img/team/Paris.jpg')} />
                  <Image fit="contain" src={require('../img/team/Paris.jpg')} />
                  <Image fit="contain" src={require('../img/team/Paris.jpg')} />
                  </Carousel>

    </Grommet>
  );
}

export default App;
