import React, { Component } from 'react';
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import RouteChange from "./RouteChange";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import NotFound from "./NotFound/NotFound";
import Home from "./Home/Home";
import About from "./About/About";
import Calendar from "./Calendar/Calendar";
import Sponsors from "./Sponsors/Sponsors";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

import { galleries, sponsorItems, weAreItems } from "./constants";
import Gallery from "./Gallery/Gallery";

import styles from './App.module.css';

class App extends Component {

  static propTypes = {
    socialMedia: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired
    })).isRequired
  };

  state = {
    isMainPage: true
  };

  handleRouteChange = ({ pathname }) => {
    // TODO: simpfly to pathname !== '/', but fix not found page
    if (this.state.isMainPage && (
      pathname === '/about' ||
      pathname === '/sponsors' ||
      pathname.startsWith('/gallery') ||
      pathname === '/calendar' )) {
      this.setState({ isMainPage: false });
    } else if (!this.state.isMainPage && pathname === '/') {
      this.setState({ isMainPage: true });
    }
  };

  render() {
    return (
      <BrowserRouter>
        <ErrorBoundary>
          <div className={styles.container}>
            <RouteChange onRouteChange={this.handleRouteChange}/>

            <Header isCollapsed={!this.state.isMainPage}/>

            <div className={styles.content}>
              <ErrorBoundary>
                <Switch>
                  <Route exact path="/" render={() => <Home shuffle weAreItems={weAreItems}/>}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/supporters" render={() => <Sponsors sponsors={sponsorItems}/>}/>
                  <Route path="/gallery" render={routeProps => <Gallery {...routeProps} galleries={galleries}/>}/>
                  <Route exact path="/calendar" component={Calendar}/>

                  <Route component={NotFound}/>
                </Switch>
              </ErrorBoundary>
            </div>

            <Footer fixed={this.state.isMainPage} socialMedia={this.props.socialMedia}/>
          </div>
        </ErrorBoundary>
      </BrowserRouter>
    );
  }
}

export default App;
