/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Description from './Description.jsx';
import Header from './Header.jsx';
import Images from './Images.jsx';
import Listing from './Listing.jsx';
import NightlyRate from './NightlyRate.jsx';
import Rating from './Rating.jsx';
import axios from 'axios';


const Wrapper = styled.div`
  margin: 0;
  padding: 0;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.getListings = this.getListings.bind(this);
  }

  componentDidMount() {
    this.getListings();
  }

  // eslint-disable-next-line class-methods-use-this
  getListings() {
    axios.get('/suggestedListings')
      .then((response) => {
        console.log('GET reqeust made');
        console.log(response);
      })
      .catch((error) => {
        console.log('We have an error!');
      });
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
