import React, { useState } from "react";
import { Grommet, Box, ResponsiveContext, Footer, Text, Anchor } from 'grommet';
// import { normalizeColor } from 'grommet/utils';
// import { rgba } from 'polished';
import { Link } from "react-router-dom";
import '../App.css';
import logo from '../sfflogo.svg';

import SFFtheme from '../Theme.js';

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Grommet theme={SFFtheme} full>
    <ResponsiveContext.Consumer>
    {size => (
      <Box primary fill>
        
        <Box primary direction='row' flex overflow={{ horizontal: 'hidden' }}>
          <Box primary flex align='center' justify='center' background='black'>
            
            <Footer primary background="black" pad="medium">
              <Text size='xsmall'>Copyright &copy; 2020 Studio Firefly</Text>
              {/* <Anchor size='xsmall' label="About" /> */}
            </Footer>
          </Box>

          
        </Box>
      </Box>
      )}
    </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default Footer;
