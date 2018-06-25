import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { connect } from "react-redux";

import './App.css';

import MainMenu from './components/main_menu';
import Home from './components/home';
import GameCollection from './components/games_collection';
import SearchGames from './components/search_games';

class App extends Component {
  render() {
    let { isMenuClicked } = this.props;
    
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route exact path='/' render={props => (
              <div>
                {
                  !isMenuClicked &&
                  <MainMenu />
                }
                <Home { ...props }/>
              </div>
            )} />
            <Route exact path='/games' render={props => (
              <GameCollection {...props}  />
            )} />
            <Route exact path='/search' render={(props) => (
              <SearchGames {...props}  />
            )} /> 
            <Redirect to='/'/>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    isMenuClicked: state.appReducer.isMenuClicked,
  };
}

export default connect(mapStateToProps)(App);
