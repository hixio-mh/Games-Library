import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './main_menu.css';

class MainMenu extends Component {
	render() {
		return(
			<nav className="navbar main-navbar main-menu navbar-default navbar-fixed-bottom fade-in">
	      <div className="container-fluid">
          <ul className="navbar-center">
					 	<li><Link to="/search"><i className="fa fa-plus-square-o fa-3x" aria-hidden="true"></i> </Link><p className="menu-title">Search</p></li>
					 	<li><Link to="/games"><i className="fa fa-gamepad fa-3x" aria-hidden="true"></i> </Link><p className="menu-title">Games</p></li>
					 	<li><Link to="/shop"><i className="fa fa-shopping-bag fa-3x" aria-hidden="true"></i> </Link><p className="menu-title">Shop</p></li>
					 	<li><Link to="/friends"><i className="fa fa-address-book-o fa-3x" aria-hidden="true"></i> </Link><p className="menu-title">Friends</p></li>
					 	<li><Link to="/messages"><i className="fa fa-commenting-o fa-3x" aria-hidden="true"></i> </Link><p className="menu-title">Messages</p></li>
				    <li><Link to="/achievements"><i className="fa fa-trophy fa-3x" aria-hidden="true"></i> </Link><p className="menu-title">Achievements</p></li>
				    <li><Link to="/settings"><i className="fa fa-cog fa-3x" aria-hidden="true"></i> </Link><p className="menu-title">Settings</p></li>
				    <li><Link to="/turnoff"><i className="fa fa-power-off fa-3x" aria-hidden="true"></i> </Link><p className="menu-title">Turn Off</p></li>
				  </ul>
        </div>
	    </nav>
		);
	}
}

export default MainMenu;