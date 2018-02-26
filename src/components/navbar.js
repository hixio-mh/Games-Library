import React, { Component } from 'react';

import './navbar.css';

class Navbar extends Component {
	render() {
		return(
			<nav className="navbar navbar-default navbar-fixed-bottom">
	      <div className="container-fluid">
          <ul className="navbar-center">
					 	<li><a href="/search"><i className="fa fa-plus-square-o fa-3x" aria-hidden="true"></i> </a><p>Search</p></li>
					 	<li><a href="/games"><i className="fa fa-gamepad fa-3x" aria-hidden="true"></i> </a><p>Games</p></li>
					 	<li><a href="/shop"><i className="fa fa-shopping-bag fa-3x" aria-hidden="true"></i> </a><p>Shop</p></li>
					 	<li><a href="/friends"><i className="fa fa-address-book-o fa-3x" aria-hidden="true"></i> </a><p>Friends</p></li>
					 	<li><a href="/messages"><i className="fa fa-commenting-o fa-3x" aria-hidden="true"></i> </a><p>Messages</p></li>
				    <li><a href="achievements"><i className="fa fa-trophy fa-3x" aria-hidden="true"></i> </a><p>Achievements</p></li>
				    <li><a href="/settings"><i className="fa fa-cog fa-3x" aria-hidden="true"></i> </a><p>Settings</p></li>
				    <li><a href="/turnoff"><i className="fa fa-power-off fa-3x" aria-hidden="true"></i> </a><p>Turn Off</p></li>
				  </ul>
        </div>
	    </nav>
		);
	}
}

export default Navbar;