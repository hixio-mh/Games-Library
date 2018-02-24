import React, { Component } from 'react';

import './navbar.css';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			resize: ''
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const linksEl = document.getElementById('myNavbar');
		if (linksEl.className.trim() === 'navbar') {
			this.setState({ resize: 'responsive' });
		} else {
			this.setState({ resize: '' });
		}
	}

	render() {
		return(
			<div className={`navbar ${this.state.resize}`} id="myNavbar">
			  <a href="#home" className="active">Home</a>
			  <a href="#news">News</a>
			  <a href="#contact">Contact</a>
			  <a href="#about" style={{ float: 'right' }}>About</a>
			  <a href="#" style={{fontSize: '15px'}} className="icon" onClick={this.handleClick}>&#9776;</a>
			</div>
		);
	}
}

export default Navbar;