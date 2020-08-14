/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import Header from './Header.jsx';
import NavButtons from './NavButtons.jsx';

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
      renderedListings: [],
    };
    this.getListings = this.getListings.bind(this);
    this.renderPage = this.renderPage.bind(this);
  }

  componentDidMount() {
    this.getListings();
  }

  getListings() {
    axios.get('/suggestedListings')
      .then((response) => {
        const suggestedListings = response.data;
        this.setState({ suggestedListings, isLoading: false });
        this.renderPage(1);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderPage(page) {
    if (page === 1) {
      const firstPage = this.state.suggestedListings.slice(0, 4);
      this.setState({ renderedListings: firstPage });
    } else if (page === 2) {
      const secondPage = this.state.suggestedListings.slice(4, 8);
      this.setState({ renderedListings: secondPage });
    } else if (page === 3) {
      const thirdPage = this.state.suggestedListings.slice(8, 12);
      this.setState({ renderedListings: thirdPage });
    }
  }

  render() {
    if (this.state.isLoading) {
      return (<div> . . .</div>);
    }
    return (
      <OuterWrapper>
        <MiddleWrapper>
          <Header />
          <NavButtons renderPage={this.renderPage} />
          <Carousel carousel={this.state.renderedListings} />
        </MiddleWrapper>
      </OuterWrapper>
    );
  }
}

export default App;
