import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import './navbar_action.css';

class NavbarAction extends Component {
	onHandleFilter = (e) => {
		e.preventDefault();
    this.props.dispatch({ type: 'FILTER_CLICKED' });
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
						<li className="pull-left"><Link to="#" onClick={() => {this.props.history.goBack()}}><i className="fa fa-times" aria-hidden="true"></i> OK</Link></li>
				  </ul>
        </div>
	    </nav>
		);
	}
}

function mapStateToProps(state) {
  return {
    isfilterActive: state.actionReducer.isfilterActive,
  };
}

export default connect(mapStateToProps)(NavbarAction);