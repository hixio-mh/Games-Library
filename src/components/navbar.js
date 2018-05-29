import React, { Component } from 'react';
import Clock from 'react-live-clock';
import { Link } from 'react-router-dom';

import './navbar.css';

const MenuCenter = ({isPaused}) => {
	return(
		<React.Fragment>
			<li className={`js-fade fade-in ${isPaused}`}><Link to="/search"><i className="fa fa-plus-square-o fa-3x" aria-hidden="true"></i> </Link><p className="menu-title">Search</p></li>
			<li className={`js-fade fade-in ${isPaused}`}><Link to="/games"><i className="fa fa-gamepad fa-3x" aria-hidden="true"></i> </Link><p className="menu-title">Games</p></li>
			<li className={`js-fade fade-in ${isPaused}`}><Link to="/shop"><i className="fa fa-shopping-bag fa-3x" aria-hidden="true"></i> </Link><p className="menu-title">Shop</p></li>
			<li className={`js-fade fade-in ${isPaused}`}><Link to="/friends"><i className="fa fa-address-book-o fa-3x" aria-hidden="true"></i> </Link><p className="menu-title">Friends</p></li>
			<li className={`js-fade fade-in ${isPaused}`}><Link to="/messages"><i className="fa fa-commenting-o fa-3x" aria-hidden="true"></i> </Link><p className="menu-title">Messages</p></li>
			<li className={`js-fade fade-in ${isPaused}`}><Link to="achievements"><i className="fa fa-trophy fa-3x" aria-hidden="true"></i> </Link><p className="menu-title">Achievements</p></li>
			<li className={`js-fade fade-in ${isPaused}`}><Link to="/settings"><i className="fa fa-cog fa-3x" aria-hidden="true"></i> </Link><p className="menu-title">Settings</p></li>
			<li className={`js-fade fade-in ${isPaused}`}><Link to="/turnoff"><i className="fa fa-power-off fa-3x" aria-hidden="true"></i> </Link><p className="menu-title">Turn Off</p></li>
		</React.Fragment>
	);
}
class Navbar extends Component {
	render() {
		const { isMenuClicked } = this.props;
		let onPaused = isMenuClicked ? '' : 'is-paused';

		return(
			<nav className="navbar bottom-navbar navbar-default navbar-fixed-bottom">
	      <div className="container-fluid">
          <ul className="navbar-center">
					 	<li className="pull-left"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/590489/profile/profile-512.jpg" className="image-cover" alt="Profile"/></li>
					 	<li className="pull-left"><p className="desc-text">Habil</p></li>
					 	{
					 		isMenuClicked &&
					 		<MenuCenter isPaused={onPaused} />
					 	}
				    <li className="pull-right"><p className="desc-text"><Clock format={'HH:mm'} timezone={'Asia/Jakarta'}/></p></li>
				    <li className="pull-right"><i className="fa fa-signal fa-2x" aria-hidden="true"></i></li>
				  </ul>
        </div>
	    </nav>
		);
	}
}

export default Navbar;