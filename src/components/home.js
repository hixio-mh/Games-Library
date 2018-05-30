import React, { Component } from 'react';
import Navbar from './navbar';

class Home extends Component {
  constructor(props) {
    super(props);

    this.handleMenuClicked = this.handleMenuClicked.bind(this);
  }
  handleMenuClicked() {
    this.props.onHandleMenuClick();
  }
  render() {
    const { onMenuClick } = this.props;

    return (
      <React.Fragment>
        <Navbar isMenuClicked={onMenuClick} />
      </React.Fragment>
    );
  }
}

export default Home;
