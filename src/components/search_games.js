import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from './header';
import NavbarAction from './navbar_action';

import './search_games.css';

// This component isn't completed yet, i created it as a static render
// based on the dummy data :)
class SearchGames extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'MENU_CLICKED' });
  }
  
  componentWillUnmount() {
    this.props.dispatch({ type: 'MENU_CLICKED' });
  }

  render() {
    const { gameCollection, isfilterActive } = this.props;
    let filterOffset = isfilterActive ? 'slide-right' : 'slide-left col-md-offset-2';
    let slideIn = isfilterActive ? 'fade-in' : '';
    const total = gameCollection.length;

    return(
      <div className="container-fluid">
        <Header />

        <div className="libary">
          {
            isfilterActive &&
            <div className={`col-md-4 ${slideIn}`}>
              <div className="input-group">
                <span className="input-group-addon"><i className="fa fa-search" aria-hidden="true"></i></span>
                <input type="text" className="form-control search-games" placeholder="Search" />
              </div>
              <div className="list-group">
                <a href="" className="list-group-item active">
                  <span className="badge badge-count">{total}</span>
                  All
                </a>
                {/*Create static list based on the dummy data,
                it'll be easier when using ajax to create dynamic list*/}
                <a href="" className="list-group-item">
                  <span className="badge badge-count">11</span>
                  Action
                </a>
                <a href="" className="list-group-item">
                  <span className="badge badge-count">4</span>
                  Adventure
                </a>
                <a href="" className="list-group-item">
                  <span className="badge badge-count">1</span>
                  FPS
                </a>
              </div>
            </div>
          }
          <div className={`col-md-8  ${filterOffset}`}>
            <div className="row">
            {
              gameCollection.map(val => (
                <div className="cover" key={val.id}>
                  <a href="/check">
                    <img src={val.imageUrl} style={{ width: '100%' }} alt={val.title} />
                  </a>
                </div>
              ))
            }
            </div>
          </div>
        </div>

        <NavbarAction 
          {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isfilterActive: state.actionReducer.isfilterActive,
    gameCollection: state.gamesCollection,
  };
}

export default connect(mapStateToProps)(SearchGames);