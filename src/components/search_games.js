import React, { Component } from 'react';
import Header from './header';
import NavbarAction from './navbar_action';

import './search_games.css';

{/*This component isn't completed yet, i created it as a static render
based on the dummy data :) */}
class SearchGames extends Component {
  constructor(props) {
		super(props);

		this.state = {
			isfilterActive: false
		};
		this.handleFilter = this.handleFilter.bind(this);
  }

	handleFilter() {
    this.setState(prevState => ({
      isfilterActive: !prevState.isfilterActive
    }));
  }

  componentDidMount() {
    this.props.onHandleMenuClick();
  }

  componentWillUnmount() {
    this.props.onHandleMenuClick();
  }

  render() {
    const { onNavbarAction, games } = this.props;
    const { isfilterActive } = this.state;
    let filterOffset = isfilterActive ? 'slide-right' : 'slide-left col-md-offset-2';
    let slideIn = isfilterActive ? 'fade-in' : '';
    const total = games.length;

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
              games.map((val, index) => (
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
          onNavbarAction={onNavbarAction} 
          navHistory={this.props} 
          onHandleFilter={this.handleFilter} 
          isfilterActive={isfilterActive}
        />
      </div>
    );
  }
}

export default SearchGames;