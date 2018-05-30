import React, { Component } from 'react';
import './header.css';

class Header extends Component {
	render() {
		return(
			<nav className="navbar navbar-default header-navbar navbar-fixed-top">
	      <div className="container-fluid">
          <div className="navbar-header">
            <p className="navbar-brand">Library</p>
          </div>
        </div>
	    </nav>
		);
	}
}

export default Header;