import React, { useState } from "react";
import { Grommet } from 'grommet';
// import { Text } from "../components/Text";
// import { Anchor } from "../components/Anchor";
// import { normalizeColor } from 'grommet/utils';
// import { rgba } from 'polished';
// import { FormClose, Menu, Facebook, Instagram, Linkedin } from 'grommet-icons';
// import { ThemeProvider } from 'styled-components';
// import { deepMerge } from "grommet/utils";
// import { Link } from "react-router-dom";

import Gallery from 'react-photo-gallery';

import '../App.css';
// import logo from '../sfflogo.svg';

import SFFtheme from '../Theme.js';

// const today = new Date();

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1590594839482-c4036b2892e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
    width: 4,
    height: 3
  },
  {
    src: 'https://images.unsplash.com/photo-1590533181917-b908fadbd785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2765&q=80',
    width: 1,
    height: 1
  }
];

function App() {
  const [isDark] = useState(false);
  // const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={SFFtheme} themeMode={isDark ? 'light' : 'dark'} full>
      
      <Gallery photos={photos} />;             

    </Grommet>
  );
}

export default App;
