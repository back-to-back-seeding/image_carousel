/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Description from './Description.jsx';
import Header from './Header.jsx';
import Images from './Images.jsx';
import Listing from './Listing.jsx';
import NightlyRate from './NightlyRate.jsx';
import Rating from './Rating.jsx';
import Carousel from './Carousel.jsx';

const InnerWrapper = styled.div`
  background-color: inherit;
  display: block;
  height: 100%;
  max-width: 1120px;
  width: 100%;
`;

const MiddleWrapper = styled.div`
  background-color: inherit;
  display: block;
  padding-left: 80px;
  padding-right: 80px;
`;

const OuterWrapper = styled.div`
  background-color: rgb(247, 247, 247);
  display: block;
  margin: 0;
  padding-bottom: 40px;
  padding-top: 40px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestedListings: [],
      isLoading: true,
    };
    this.getListings = this.getListings.bind(this);
  }

  componentDidMount() {
    this.getListings();
  }

  // TODO try to figure out why the db keeps automatically adding data to db
  // eslint-disable-next-line class-methods-use-this
  getListings() {
    axios.get('/suggestedListings')
      .then((response) => {
        const suggestedListings = response.data;
        this.setState({ suggestedListings, isLoading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (<div> . . .</div>);
    }
    return (
      <OuterWrapper>
        <MiddleWrapper>
          <Header />
          <Carousel carousel={this.state.suggestedListings} />
        </MiddleWrapper>
      </OuterWrapper>
    );
  }
}

export default App;
