import React, { useState, useCallback, createRef } from 'react';
import {
  Grommet,
  Box,
  Collapsible,
  Heading,
  ResponsiveContext,
  Layer,
  Paragraph,
  Footer,
  Nav,
  Grid,
  Image
} from 'grommet';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Text } from '../components/Text';
import { Anchor } from '../components/Anchor';
import { logoGallery, columnsLogos } from '../components/Logos';
import ReactPlayer from 'react-player';
// import { Player } from 'video-react'
import Vimeo from '@u-wave/react-vimeo';
// import { Box } from "../components/Box";
// import { normalizeColor } from 'grommet/utils';
// import { rgba } from 'polished';
import { Menu, Facebook, Instagram, Linkedin } from 'grommet-icons';
// import Particles from 'react-particles-js';
// import { ThemeProvider } from 'styled-components';
// import { deepMerge } from "grommet/utils";
// import { Link } from "react-router-dom";

import Gallery from 'react-photo-gallery';
// import { photos } from "/img/projects/F8Neb";

/* popout the browser and maximize to see more rows! -> */
// const BasicRows = () => <Gallery photos={photos} />;

import '../App.css';
import logo from '../sfflogo.png';

// import lisa from '/img/projects/team/Lisa.jpg';
// import ethan from '/img/projects/team/Ethan.jpg';

import SFFtheme from '../Theme.js';

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="background-back"
    pad={{ left: 'medium', right: 'small', vertical: 'none' }}
    elevation="none"
    style={{ zIndex: '1' }}
    {...props}
  />
);

const today = new Date();

// **************************
//         PROJECTS
// **************************

// // Gigamon 18 & 19
const Gigamon = [
  {
    src: '/img/projects/Gigamon/Gigamon_IMG_6267.jpeg',
    width: 2016,
    height: 1512
  },
  {
    src: '/img/projects/Gigamon/EX6A8758.jpg',
    width: 2016,
    height: 1512
  },
  {
    src: '/img/projects/Gigamon/IMG_6245.jpeg',
    width: 2016,
    height: 1512
  },
  {
    src: '/img/projects/Gigamon/IMG_6277.jpeg',
    width: 2016,
    height: 1512
  }
];

// // BMW 17 & 19
const BMW = [
  {
    src: '/img/projects/BMW/EX6A7567.jpg',
    width: 2044,
    height: 1044
  },
  {
    src: '/img/projects/BMW/IMG_20170402_193725.jpeg',
    width: 2044,
    height: 1044
  }
];

// // OSIsoft Pi World
const OSIsoft = [
  {
    src: '/img/projects/OSIsoft_2019/EX6A7628.jpg',
    width: 2048,
    height: 1152
  },
  {
    src: '/img/projects/OSIsoft_2019/EX6A7672.jpg',
    width: 2048,
    height: 1152
  }
];

// // ChefConf
const ChefConf = [
  {
    src: '/img/projects/ChefConf/_EX6A7934.jpg',
    width: 2048,
    height: 1365
  },
  {
    src: '/img/projects/ChefConf/_EX6A7956.jpg',
    width: 2048,
    height: 1365
  },
  {
    src: '/img/projects/ChefConf/_EX6A7974.jpg',
    width: 2048,
    height: 1365
  },
  {
    src: '/img/projects/ChefConf/5W2A7717.jpg',
    width: 2048,
    height: 1365
  },
  {
    src: '/img/projects/ChefConf/5W2A7835.jpg',
    width: 2048,
    height: 1365
  },
  {
    src: '/img/projects/ChefConf/5W2A7891.jpg',
    width: 2048,
    height: 1365
  }
];

// // Epic GDC
const Epic = [
  {
    src: '/img/projects/Epic_Siggraph_2019/Hnet-image.gif',
    width: 600,
    height: 338
  },
  {
    src: '/img/projects/Epic_Siggraph_2019/IMG_0271.jpeg',
    width: 2016,
    height: 1136
  },
  {
    src: '/img/projects/Epic_Siggraph_2019/IMG_0277.jpeg',
    width: 2016,
    height: 1512
  },
  {
    src: '/img/projects/Epic_Siggraph_2019/siggraph-day1-209.jpeg',
    width: 2016,
    height: 1512
  }
  // {
  //   src: "/img/projects/Epic_Siggraph_2019/siggraph-day1-381.jpeg",
  //   width: 3360,
  //   height: 2240
  // },
];

// // MINI Countryman
const MINI = [
  {
    src: '/img/projects/Mini_Countryman/AURELIA-DAMORE_Mini__D1_3129-2w.jpg',
    width: 2016,
    height: 1512
  },
  {
    src: '/img/projects/Mini_Countryman/IMG_4948.jpeg',
    width: 2016,
    height: 1512
  },
  {
    src: '/img/projects/Mini_Countryman/IMG_5056.jpeg',
    width: 2016,
    height: 1512
  },
  {
    src: '/img/projects/Mini_Countryman/IMG_5067.jpeg',
    width: 2016,
    height: 1512
  }
];

// // Host Analytics 19
// const Host = [
//   {
//     src: "https://via.placeholder.com/1920x1080",
//     width: 1920,
//     height: 1080
//   },
//   {
//     src: "https://via.placeholder.com/1920x1080",
//     width: 1920,
//     height: 1080
//   },
//   {
//     src: "https://via.placeholder.com/1920x1080",
//     width: 1920,
//     height: 1080
//   }
// ];

// // SAP Success
const SAP = [
  {
    src: '/img/projects/SAP_SuccessConnect/Collage_4.jpg',
    width: 1036,
    height: 988
  },
  {
    src: '/img/projects/SAP_SuccessConnect/SAP_dancer-e1487195217798.jpg',
    width: 1036,
    height: 988
  }
];

// // Komatsu
const Komatsu = [
  {
    src: '/img/projects/Komatsu/komatsu_sc_framed.jpeg',
    width: 1512,
    height: 2016
  },
  {
    src: '/img/projects/Komatsu/IMG_9465.jpg',
    width: 1512,
    height: 2016
  }
];

function columns(containerWidth) {
  let columns = 1;
  if (containerWidth >= 500) columns = 1;
  if (containerWidth >= 900) columns = 2;
  if (containerWidth >= 1500) columns = 2;
  return columns;
}

// Footer Grid setup
const columnsFooter = {
  small: ['auto'],
  medium: ['auto', 'auto', 'auto'],
  large: ['auto', 'auto', 'auto'],
  xlarge: ['auto', 'auto', 'auto']
};
const rowsFooter = {
  small: ['xxsmall', 'xxsmall', 'xxsmall'],
  medium: ['xxsmall'],
  large: ['xxsmall'],
  xlarge: ['xxsmall']
};
const areas = {
  small: [
    { name: 'one', start: [0, 0], end: [0, 0] },
    { name: 'two', start: [0, 1], end: [0, 1] },
    { name: 'three', start: [0, 2], end: [0, 2] }
  ],
  medium: [
    { name: 'one', start: [0, 0], end: [0, 0] },
    { name: 'two', start: [1, 0], end: [1, 0] },
    { name: 'three', start: [2, 0], end: [2, 0] }
  ],
  large: [
    { name: 'one', start: [0, 0], end: [0, 0] },
    { name: 'two', start: [1, 0], end: [1, 0] },
    { name: 'three', start: [2, 0], end: [2, 0] }
  ],
  xlarge: [
    { name: 'one', start: [0, 0], end: [0, 0] },
    { name: 'two', start: [1, 0], end: [1, 0] },
    { name: 'three', start: [2, 0], end: [2, 0] }
  ]
};
const ResponsiveGrid = ({ children, overrideColumns, overrideRows, areas, ...props }) => (
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
  const [showBurger, setShowBurger] = React.useState(true);
  const onClick = () => {
    setShowSidebar(!showSidebar);
    setShowBurger(false);
  };
  const BurgerLayer = () => {
    console.log(borderBoxRef.current);
    return (
      <Layer
        target={borderBoxRef.current}
        position="top-right"
        plain={true}
        modal={false}
        animation={'fadeIn'}
        onClickOutside={() => setShowSidebar(!showSidebar)}
        onEsc={() => setShowSidebar(!showSidebar)}
        responsive={false}
      >
        {showBurger ? <Burger /> : null}
      </Layer>
    );
  };
  const Burger = () => (
    <div className="menu-wrapper">
      <Anchor onClick={onClick} icon={<Menu />} hoverColor="#ff00ff" />
    </div>
  );
  const closeSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const borderBoxRef = createRef(null);

  const [isDark] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  // const [currentProject, setProject] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Grommet theme={SFFtheme} themeMode={isDark ? 'light' : 'dark'} full={true}>
      <ResponsiveContext.Consumer>
        {size => (
          <Box primary fill={true}>
            <AppBar primary>
              <Heading level="3" margin="none">
                &nbsp;
              </Heading>
              {/* <Anchor onClick={() => setShowSidebar(!showSidebar)} icon={<Menu />} hoverColor="#ff00ff" /> */}
            </AppBar>
            <Box primary direction="row" flex overflow={{ horizontal: 'hidden' }}>
              <Box primary flex align="center" justify="center" background="background-back">
                <Box
                  secondary
                  flex={true}
                  align="center"
                  width="95%"
                  pad={{ horizontal: '2px', vertical: '2px' }}
                  background="url(/img/gradient.png)"
                >
                  <Box
                    primary
                    ref={borderBoxRef}
                    flex={true}
                    // border={{ color: 'red' }}
                    align="center"
                    width="100%"
                  >
                    {/* <Layer
                      className='particles'
                      full={false}
                      position="left"
                      plain={true}
                      modal={false}
                      animation={"fadeIn"}
                      responsive={false}
                    >
                      <Particles
                        params={{
                          "particles": {
                            "number": {
                              "value": 5,
                              "density": {
                                "enable": false
                              }
                            },
                            "size": {
                              "value": 3,
                              "random": true,
                              "anim": {
                                "speed": 4,
                                "size_min": 0.3
                              }
                            },
                            "color": {
                              "value": "#ffff00"
                            },
                            "line_linked": {
                              "enable": false
                            },
                            "move": {
                              "random": true,
                              "speed": 1,
                              "direction": "top",
                              "out_mode": "out"
                            }
                          },
                          "interactivity": {
                            "events": {
                              "onhover": {
                                "enable": true,
                                "mode": "bubble"
                              },
                              "onclick": {
                                "enable": false,
                                "mode": "repulse"
                              }
                            },
                            "modes": {
                              "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 0
                              },
                              "repulse": {
                                "distance": 400,
                                "duration": 4
                              }
                            }
                          }
                        }}
                      />
                    </Layer> */}
                    <BurgerLayer />

                    <Box
                      primary // MAIN CONTENT BOX
                      flex={true}
                      // border={{ color: 'green' }}
                      align="center"
                      width="100%"
                      overflow={{ horizontal: 'hidden' }}
                      // pad={{ horizontal: '15px' }}
                      pad={{ horizontal: 'xlarge' }}
                      background="black"
                    >
                      <Box
                        primary
                        flex={false}
                        // border={{ color: 'blue' }}
                        width="100%"
                        // background='red'
                      >
                        <Box
                          primary
                          width="auto"
                          align="center"
                          flex={false}
                          // border={{ color: 'green' }}
                        >
                          <div className="logo-wrapper">
                            <Anchor href="https://www.studiofirefly.com">
                              <img src={logo} className="logo-image" alt="Logo" />
                            </Anchor>
                          </div>
                        </Box>

                        <Paragraph
                          size="large"
                          fill={false}
                          alignSelf="center"
                          margin={{ vertical: 'none' }}
                          responsive={true}
                        >
                          <h3 margin="none">
                            We have a passion for creating shared audience and brand experiences —
                            anywhere, and in any format, be it live, virtual, or blended/hybrid.
                          </h3>
                        </Paragraph>
                      </Box>

                      <Box
                        primary
                        // flex={true}
                        width="100%"
                      >
                        <Vimeo
                          video="https://vimeo.com/331685449"
                          responsive="true"
                          autoplay="true"
                          autopause="false"
                          controls="false"
                          loop="true"
                          muted="true"
                        />

                        <Box
                          primary // Gigamon
                          flex={false}
                          align="center"
                          width="100%"
                          height="xsmall"
                          margin={{ top: '15%' }}
                        >
                          <Heading level={1}>Gigamon</Heading>
                        </Box>
                        <Box primary flex={false} width="100%" height="auto" margin="none">
                          <Image
                            fit="contain"
                            fill="false"
                            src={'/img/projects/Gigamon/IMG_3059.jpeg'}
                          />
                        </Box>
                        <Gallery
                          photos={Gigamon}
                          direction="column"
                          columns={columns}
                          onClick={openLightbox}
                        />
                        <ModalGateway>
                          {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                              <Carousel
                                currentIndex={currentImage}
                                views={Gigamon.map(x => ({
                                  ...x,
                                  srcset: x.srcSet,
                                  caption: x.title
                                }))}
                              />
                            </Modal>
                          ) : null}
                        </ModalGateway>

                        <Box
                          primary // BMW
                          flex={false}
                          align="center"
                          width="100%"
                          height="xsmall"
                          margin={{ top: '50px' }}
                        >
                          <Heading level={1}>BMW</Heading>
                        </Box>
                        <div className="player-wrapper-1920x720">
                          <ReactPlayer
                            url="https://www.youtube.com/watch?v=P5DIzyQowb4?modestbranding=1"
                            className="react-player"
                            width="100%"
                            height="100%"
                            controls={true}
                          />
                        </div>
                        {/* https://youtu.be/P5DIzyQowb4 */}
                        <Gallery photos={BMW} direction="column" columns={columns} />

                        <Box
                          primary // OSIsoft
                          flex={false}
                          align="center"
                          width="100%"
                          height="xsmall"
                          margin={{ top: '50px' }}
                        >
                          <Heading level={1}>OSIsoft</Heading>
                        </Box>
                        <Box primary flex={false} width="100%" height="auto" margin="none">
                          <Image
                            fit="contain"
                            fill="false"
                            src={'/img/projects/OSIsoft_2019/EX6A7643.jpg'}
                          />
                        </Box>
                        <Gallery photos={OSIsoft} direction="column" columns={columns} />
                        {/* <Vimeo
                          video="https://vimeo.com/323805442"
                          responsive="true"
                        /> */}

                        <Box
                          primary // ChefConf
                          flex={false}
                          align="center"
                          width="100%"
                          height="xsmall"
                          margin={{ top: '50px' }}
                        >
                          <Heading level={1}>ChefConf</Heading>
                        </Box>
                        <Box primary flex={false} width="100%" height="auto" margin="none">
                          <Image
                            fit="contain"
                            fill="false"
                            src={'/img/projects/ChefConf/Featured_EX6A7908.jpg'}
                          />
                        </Box>
                        <Gallery photos={ChefConf} direction="column" columns={columns} />
                        {/* <Vimeo
                          video="https://vimeo.com/323805442"
                          responsive="true"
                        /> */}

                        <Box
                          primary // Epic
                          flex={false}
                          align="center"
                          width="100%"
                          height="xsmall"
                          margin={{ top: '50px' }}
                        >
                          <Heading level={1}>Epic</Heading>
                        </Box>
                        <Box primary flex={false} width="100%" height="auto" margin="none">
                          <Image
                            fit="contain"
                            fill="false"
                            src={'/img/projects/Epic_Siggraph_2019/siggraph-day1-381.jpeg'}
                          />
                        </Box>
                        <Gallery photos={Epic} direction="column" columns={columns} />
                        {/* <Vimeo
                          video="https://vimeo.com/323805442"
                          responsive="true"
                        /> */}

                        <Box
                          primary // MINI
                          flex={false}
                          align="center"
                          width="100%"
                          height="xsmall"
                          margin={{ top: '50px' }}
                        >
                          <Heading level={1}>MINI</Heading>
                        </Box>
                        <div className="player-wrapper-1920x1080">
                          <ReactPlayer
                            url="https://youtu.be/2kHdTOm9Oy4"
                            className="react-player"
                            width="100%"
                            height="100%"
                            controls={true}
                          />
                        </div>
                        <div className="player-wrapper-1920x1080">
                          <ReactPlayer
                            url="https://youtu.be/vn3YeFRm8ww"
                            className="react-player"
                            width="100%"
                            height="100%"
                            controls={true}
                          />
                        </div>
                        <div className="player-wrapper-1920x1080">
                          <ReactPlayer
                            url="https://youtu.be/yGvzCRQDFQA"
                            className="react-player"
                            width="100%"
                            height="100%"
                            controls={true}
                          />
                        </div>
                        <Gallery photos={MINI} direction="column" columns={columns} />

                        <Box
                          primary // SAP
                          flex={false}
                          align="center"
                          width="100%"
                          height="xsmall"
                          margin={{ top: '50px' }}
                        >
                          <Heading level={1}>SAP</Heading>
                        </Box>
                        <Box primary flex={false} width="100%" height="auto" margin="none">
                          <Image
                            fit="contain"
                            fill="false"
                            src={'/img/projects/SAP_SuccessConnect/IMG_3947.jpeg'}
                          />
                        </Box>
                        <Gallery photos={SAP} direction="column" columns={columns} />
                        <Box primary flex={false} width="100%" height="auto" margin="none">
                          <Image
                            fit="contain"
                            fill="false"
                            src={'/img/projects/SAP_SuccessConnect/GeneralSessionLights.jpg'}
                          />
                        </Box>

                        <Box
                          primary // Komatsu
                          flex={false}
                          align="center"
                          width="100%"
                          height="xsmall"
                          margin={{ top: '50px' }}
                        >
                          <Heading level={1}>Komatsu</Heading>
                        </Box>
                        <Box primary flex={false} width="100%" height="auto" margin="none">
                          <Image
                            fit="contain"
                            fill="false"
                            src={'/img/projects/Komatsu/komatsu_sc_main_screen_2.jpeg'}
                          />
                        </Box>
                        <Gallery photos={Komatsu} direction="column" columns={columns} />
                        {/* <Vimeo
                          video="https://vimeo.com/323805442"
                          responsive="true"
                        /> */}
                        <Box
                          primary
                          flex={false}
                          width="100%"
                          height="auto"
                          margin={{ vertical: 'xlarge' }}
                        >
                          <Gallery
                            photos={logoGallery}
                            margin="15"
                            direction="column"
                            columns={columnsLogos}
                          />
                        </Box>
                        <Box
                          primary ///*** FOOTER */
                          flex={false}
                          // border={{ color: 'blue' }}
                          alignSelf="center"
                          width="750px"
                          margin={{ top: '50px' }}
                        >
                          <Box primary>
                            <ResponsiveGrid
                              primary
                              alignSelf="center"
                              rows={rowsFooter}
                              columns={columnsFooter}
                              gap="small"
                              areas={areas}
                              margin={{ horizontal: 'none', vertical: 'medium' }}
                            >
                              <div>
                                <Box
                                  primary
                                  gridArea="address"
                                  align="center"
                                  pad={{ horizontal: 'small', vertical: 'small' }}
                                >
                                  <Nav
                                    primary
                                    direction="row"
                                    background="none"
                                    pad="none"
                                    gap="medium"
                                  >
                                    <Anchor hoverColor="#ffffff">Sausalito</Anchor>
                                    <Anchor hoverColor="#ffffff">Boston</Anchor>
                                    {/* <Anchor hoverColor="#ffffff" >Barcelona</Anchor> */}
                                  </Nav>
                                </Box>
                              </div>
                              <div className="footer-wrapper">
                                <Box
                                  primary
                                  gridArea="contact"
                                  // border='left'{...{ color: 'neutral-3' }}
                                  align="center"
                                  // align="left"
                                  pad={{ horizontal: 'small', vertical: 'none' }}
                                >
                                  <Anchor hoverColor="#ff7f00" href="tel:415-944-2286">
                                    <strong>+1.415.944.2286</strong>
                                  </Anchor>
                                  <Anchor
                                    hoverColor="#ff00ff"
                                    href="mailto:studio@studiofirefly.com"
                                  >
                                    <strong>studio@studiofirefly.com</strong>
                                  </Anchor>
                                </Box>
                              </div>
                              <div>
                                <Box
                                  primary
                                  gridArea="social"
                                  // background="black"
                                  // border='left'{...{ color: '#ffffff' }}
                                  align="center"
                                  // align="left"
                                  pad={{ horizontal: 'none', vertical: 'none' }}
                                >
                                  <Nav
                                    primary
                                    direction="row"
                                    background="none"
                                    pad="none"
                                    gap="none"
                                  >
                                    <Anchor
                                      href="http://instagram.com/bystudiofirefly"
                                      icon={<Instagram />}
                                      hoverColor="#ff00ff"
                                    />
                                    <Anchor
                                      href="http://facebook.com/bystudiofirefly"
                                      icon={<Facebook />}
                                      hoverColor="#ff00ff"
                                    />
                                    <Anchor
                                      href="http://linkedin.com/company/studiofirefly"
                                      icon={<Linkedin />}
                                      hoverColor="#ff00ff"
                                    />
                                  </Nav>
                                </Box>
                              </div>
                            </ResponsiveGrid>
                            <Footer primary justify="center" pad={{ top: '30px', bottom: '15px' }}>
                              <Text background="red" size="xsmall">
                                Copyright &copy; {today.getFullYear()} Studio Firefly
                              </Text>
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

              {!showSidebar || size !== 'small' ? (
                <Collapsible border={{ color: 'black' }} direction="horizontal" open={showSidebar}>
                  <Box
                    primary
                    flex
                    width="xsmall"
                    background="background-back"
                    border={{ style: 'hidden' }}
                    elevation="none"
                    align="start"
                    justify="start"
                  >
                    <Nav primary background="background-back" gap="small">
                      <Anchor
                        onClick={closeSidebar}
                        hoverColor="#ff00ff"
                        href="/"
                        alignSelf="start"
                        label="Home"
                      ></Anchor>
                      <Anchor
                        onClick={closeSidebar}
                        hoverColor="#ff00ff"
                        href="/projects"
                        alignSelf="start"
                        label="Projects"
                      ></Anchor>
                      <Anchor
                        onClick={closeSidebar}
                        hoverColor="#ff00ff"
                        href="/about"
                        alignSelf="start"
                        label="Team"
                      ></Anchor>
                    </Nav>
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box
                    primary
                    background="black"
                    tag="header"
                    justify="end"
                    align="center"
                    direction="row"
                  >
                    {/* <Button secondary
                        icon={<FormClose />}
                        onClick={() => setShowSidebar(false)}
                      /> */}
                    &nbsp;
                  </Box>
                  <Box primary fill background="black" align="center" justify="start">
                    <Nav align="start" primary background="background-back" gap="xlarge">
                      <Anchor
                        margin={{ vertical: 'large' }}
                        size="xxlarge"
                        hoverColor="#ff00ff"
                        href="/"
                        alignSelf="start"
                        label="Home"
                      ></Anchor>
                      <Anchor
                        margin={{ vertical: 'medium' }}
                        size="xxlarge"
                        hoverColor="#ff00ff"
                        href="/projects"
                        alignSelf="start"
                        label="Projects"
                      ></Anchor>
                      <Anchor
                        margin={{ vertical: 'large' }}
                        size="xxlarge"
                        hoverColor="#ff00ff"
                        href="/about"
                        alignSelf="start"
                        label="Team"
                      ></Anchor>
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
