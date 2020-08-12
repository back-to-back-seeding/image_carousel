/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Description from './Description.jsx';
import Header from './Header.jsx';
import Images from './Images.jsx';
import Listing from './Listing.jsx';
import Rating from './Rating.jsx';
import NightlyRate from './NightlyRate.jsx';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Wrapper>
        <Header />
        <Images />
        <Rating />
        <Listing />
        <Description />
        <NightlyRate />
      </Wrapper>

    );
  }
}

export default App;
