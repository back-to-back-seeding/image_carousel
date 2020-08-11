/* eslint-disable import/extensions */
import React from 'react';
import Header from './Header.jsx';
import Images from './Images.jsx';
import Rating from './Rating.jsx';
import Listing from './Listing.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Images />
        <Rating />
        <Listing />
      </div>
    );
  }
}

export default App;
