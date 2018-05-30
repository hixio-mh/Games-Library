import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import GameCollection from './components/games_collection';
import MainMenu from './components/main_menu';
import SearchGames from './components/search_games';
import Home from './components/home';

const GAMES = [
  { id: 1, title: 'Tomb Raider', category: 'Adventure', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/tomb_raider_survivor_born_-_cover.jpg' },
  { id: 2, title: 'Call of Duty Black Ops II', category: 'FPS', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/call_of_duty_black_ops_2_-_cover.jpg' },
  { id: 3, title: 'Far Cry 3', category: 'Action', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/far_cry_3_-_cover.jpg' },
  { id: 4, title: 'Hitman - Absolution', category: 'Action', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/hitman_absolution_-_cover.jpg' },
  { id: 5, title: 'Uncharted 2', category: 'Action', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/uncharted_2_-_cover.jpg' },
  { id: 6, title: 'The Witcher 2', category: 'Adventure', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/witcher_2_-_cover.jpg' },
  { id: 7, title: 'Unreal Turnament 3', category: 'Action', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/unreal_tournament_3_-_cover.jpg' },
  { id: 8, title: 'Dead Rising 3', category: 'Action', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/dead_rising_3_-_cover.jpg' },
  { id: 9, title: 'Prototype 2', category: 'Action', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/prototype_2_-_cover.jpg' },
  { id: 10, title: 'Metal Gear Solid 4', category: 'Action', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/metal_gear_solid_4_-_cover.jpg' },
  { id: 11, title: 'Gears of War 3', category: 'Action', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/gears_of_war_3_-_cover.jpg' },
  { id: 12, title: 'Mafia II', category: 'Action', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/mafia_2_-_cover.jpg' },
  { id: 13, title: 'Prince of Persia', category: 'Adventure', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/prince_of_persia_forgotten_sands_-_cover.jpg' },
  { id: 14, title: 'Red Dead Redemption', category: 'Action', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/red_dead_redemption_-_cover.jpg' },
  { id: 15, title: 'Assasin Creed', category: 'Adventure', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/assasins_creed_liberation_-_cover.jpg' },
  { id: 16, title: 'Mass Effect 3', category: 'Action', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/mass_effect_3_-_cover.jpg' },
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      isMenuClicked: false,
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }
  handleMenuClick() {
    this.setState({ isMenuClicked: !this.state.isMenuClicked });
  }
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route exact path='/' render={(props) => (
              <div>
                {
                  !this.state.isMenuClicked &&
                  <MainMenu />
                }
                <Home {...props} 
                  data={GAMES} 
                  onHandleMenuClick={this.handleMenuClick} 
                  onMenuClick={this.state.isMenuClicked} 
                  />
              </div>
            )} />
            <Route exact path='/games' render={(props) => (
              <GameCollection {...props} 
                games={GAMES} 
                onHandleMenuClick={this.handleMenuClick} 
                onMenuClick={this.state.isMenuClicked} 
                />
            )} />
            <Route exact path='/search' render={(props) => (
              <SearchGames {...props} 
                games={GAMES} 
                onHandleMenuClick={this.handleMenuClick} 
                onMenuClick={this.state.isMenuClicked} 
                />
            )} />
            <Redirect to="/"/>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
