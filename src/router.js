import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Header from "./components/Header";
import Content from './components/Content';
// import Layout from "./components/Layout";
// import Sidebar from "./components/Sidebar";
// import Footer from "./components/Footer";
// import { Grommet } from "grommet";
import { Home, About, Projects, BLM } from './pages';
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
export default function App() {
  return (
    <Router>
      {/* <Grommet plain> */}
      {/* <Layout> */}
      {/* <Header /> */}
      {/* <Sidebar /> */}
      <Content>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/projects">
            <Home />
          </Route>
          <Route path="/blm">
            <BLM />
          </Route>
        </Switch>
      </Content>
      {/* <Footer /> */}
      {/* </Layout> */}
      {/* </Grommet> */}
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.
