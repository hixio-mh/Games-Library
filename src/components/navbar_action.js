import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './navbar_action.css';

class NavbarAction extends Component {
	constructor() {
		super();

		this.state = {
			isfilterActive: false
		};
		this.onHandleFilter = this.onHandleFilter.bind(this);
	}
	onHandleFilter(e) {
		e.preventDefault();
		this.props.onHandleFilter();
	}
	render() {
		let isFiltered = this.props.isfilterActive ? 'Back' : 'Filters';
		return(
			<nav className="navbar action-navbar navbar-default navbar-fixed-bottom">
	      <div className="container-fluid">
          <ul className="navbar-center">
						<li className="pull-left">
							<a href="" onClick={this.onHandleFilter}>
								<i className="fa fa-circle-thin" aria-hidden="true"></i> { isFiltered }
							</a>
						</li>
						<li className="pull-left"><Link to="#" onClick={() => {this.props.navHistory.history.goBack()}}><i className="fa fa-times" aria-hidden="true"></i> OK</Link></li>
				  </ul>
        </div>
	    </nav>
		);
	}
}

export default NavbarAction;