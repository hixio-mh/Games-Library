import React, { Component } from 'react';
import './App.css';

import GameCollection from './components/games_collection';
import Navbar from './components/navbar';
import MainMenu from './components/main_menu';

const GAMES = [
  { title: 'Tomb Raider', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/tomb_raider_survivor_born_-_cover.jpg' },
  { title: 'Call of Duty Black Ops II', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/call_of_duty_black_ops_2_-_cover.jpg' },
  { title: 'Far Cry 3', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/far_cry_3_-_cover.jpg' },
  { title: 'Hitman - Absolution', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/hitman_absolution_-_cover.jpg' },
  { title: 'Uncharted 2', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/uncharted_2_-_cover.jpg' },
  { title: 'The Witcher 2', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/witcher_2_-_cover.jpg' },
  { title: 'Unreal Turnament 3', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/unreal_tournament_3_-_cover.jpg' },
  { title: 'Dead Rising 3', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/dead_rising_3_-_cover.jpg' },
  { title: 'Prototype 2', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/prototype_2_-_cover.jpg' },
  { title: 'Metal Gear Solid 4', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/metal_gear_solid_4_-_cover.jpg' },
  { title: 'Mass Effect 3', imageUrl: 'http://www.oxpal.com/wp-content/uploads/2014/08/mass_effect_3_-_cover.jpg' },
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
      <div>
        {
          !this.state.isMenuClicked ?
          <MainMenu onMenuClicked={this.handleMenuClick}/> :
          <GameCollection games={GAMES} />
        }
        <Navbar isMenuClicked={this.state.isMenuClicked}/>
      </div>
    );
  }
}

export default App;
