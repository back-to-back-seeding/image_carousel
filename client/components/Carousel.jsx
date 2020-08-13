/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import Description from './Description.jsx';
import Header from './Header.jsx';
import Images from './Images.jsx';
import Listing from './Listing.jsx';
import NightlyRate from './NightlyRate.jsx';
import Rating from './Rating.jsx';

const Item = styled.li`
  background-color: rgb(247, 247, 247);
  justify-direction: row:
  margin: 0;
  padding 0;
`;

const List = styled.ul`
  margin: inherit;
  display: flex;
`;

const Wrapper = styled.div`
  background-color: rgb(247, 247, 247);
  margin: 0;
  overflow: hidden;
  padding 0;
`;

const Carousel = (props) => (
  <Wrapper>
    <List>
      {props.carousel.map((listing) => {
        return (
          <Item>
            <Images image={listing} />
            <Rating rating={listing} />
            <Listing listing={listing} />
            <Description description={listing} />
            <NightlyRate rate={listing} />
          </Item>
        );
        // return <img src={listing.image} alt="" />
      })}
    </List>
  </Wrapper>
);

export default Carousel;
// <Images image={props.carousel[0]} />
// <Rating rating={props.carousel[0]} />
// <Listing listing={props.carousel[0]} />
// <Description description={props.carousel[0]} />
// <NightlyRate rate={props.carousel[0]} />
