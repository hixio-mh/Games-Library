import React, { Component } from 'react';

import './main_menu.css';

class MainMenu extends Component {
	constructor(props) {
		super(props);
		this.handleMenuClick = this.handleMenuClick.bind(this);
	}
	handleMenuClick(e) {
		e.preventDefault();
		this.props.onMenuClicked();
	}
	render() {
		return(
			<nav className="navbar main-menu navbar-default navbar-fixed-bottom">
	      <div className="container-fluid">
          <ul className="navbar-center">
					 	<li><a href="/search" onClick={this.handleMenuClick}><i className="fa fa-plus-square-o fa-3x" aria-hidden="true"></i> </a><p className="menu-title">Search</p></li>
					 	<li><a href="/games" onClick={this.handleMenuClick}><i className="fa fa-gamepad fa-3x" aria-hidden="true"></i> </a><p className="menu-title">Games</p></li>
					 	<li><a href="/shop" onClick={this.handleMenuClick}><i className="fa fa-shopping-bag fa-3x" aria-hidden="true"></i> </a><p className="menu-title">Shop</p></li>
					 	<li><a href="/friends" onClick={this.handleMenuClick}><i className="fa fa-address-book-o fa-3x" aria-hidden="true"></i> </a><p className="menu-title">Friends</p></li>
					 	<li><a href="/messages" onClick={this.handleMenuClick}><i className="fa fa-commenting-o fa-3x" aria-hidden="true"></i> </a><p className="menu-title">Messages</p></li>
				    <li><a href="achievements" onClick={this.handleMenuClick}><i className="fa fa-trophy fa-3x" aria-hidden="true"></i> </a><p className="menu-title">Achievements</p></li>
				    <li><a href="/settings" onClick={this.handleMenuClick}><i className="fa fa-cog fa-3x" aria-hidden="true"></i> </a><p className="menu-title">Settings</p></li>
				    <li><a href="/turnoff" onClick={this.handleMenuClick}><i className="fa fa-power-off fa-3x" aria-hidden="true"></i> </a><p className="menu-title">Turn Off</p></li>
				  </ul>
        </div>
	    </nav>
		);
	}
}

export default MainMenu;