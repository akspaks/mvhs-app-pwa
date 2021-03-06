// @flow

import React from 'react';

import './App.css';

import NotificationIcon from 'material-ui-icons/Notifications';
import MapIcon from 'material-ui-icons/Map';
import SearchIcon from 'material-ui-icons/Search';
import AppBar from 'material-ui/AppBar';
import InfoIcon from 'material-ui-icons/Info';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Tabs, { Tab } from 'material-ui/Tabs';
import { MuiThemeProvider } from 'material-ui/styles';
import createMuiTheme from 'material-ui/styles/theme';
import createPalette from 'material-ui/styles/palette';
import amber from 'material-ui/colors/amber';
import blue from 'material-ui/colors/blue';

import SchedulePageContainer from './containers/SchedulePageContainer';
import Map from './components/Map';
import Search from './components/Search';
import AboutPage from './components/AboutPage';

import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';

import logo from './assets/outlinelogo.svg';

const LinkTab = withRouter(
  ({ to, history, ...props }: { to: string, history: RouterHistory }) =>
    <Tab
      onClick={() => {
        history.push(to);
      }}
      {...props}
    />
);

const handleTabChange = () => {};
const RouterTabs = withRouter(
  ({
    history,
    routes,
    ...props
  }: {
    history: RouterHistory,
    routes: string[]
  }) => {
    const index = routes.indexOf(history.location.pathname);
    return <Tabs value={index || 0} onChange={handleTabChange} {...props} />;
  }
);

const routes = ['/', '/map', /*'/search', */ '/about'];

const theme = createMuiTheme({
  palette: createPalette({
    primary: amber,
    accent: blue
  })
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div>
          <AppBar position="static">
            <Toolbar>
              <img src={logo} className="school-logo" alt="MVHS Logo" />
              <Typography type="title" color="inherit">
                MVHS App
              </Typography>
            </Toolbar>

            <RouterTabs routes={routes} fullWidth={true} centered={true}>
              <LinkTab icon={<NotificationIcon />} to={routes[0]} />
              <LinkTab icon={<MapIcon />} to={routes[1]} />
              {/*<LinkTab icon={<SearchIcon />} to={routes[2]} />*/}
              <LinkTab icon={<InfoIcon />} to={routes[2]} />
            </RouterTabs>
          </AppBar>

          <Route exact path={routes[0]} component={SchedulePageContainer} />
          <Route path={routes[1]} component={Map} />
          {/*<Route path={routes[2]} component={Search} />*/}
          <Route path={routes[2]} component={AboutPage} />
        </div>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
