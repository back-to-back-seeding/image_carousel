import React from 'react';
import styled from 'styled-components';
import Description from './Description.jsx';
import Header from './Header.jsx';
import Images from './Images.jsx';
import Listing from './Listing.jsx';
import NightlyRate from './NightlyRate.jsx';
import Rating from './Rating.jsx';

const Item = styled.li`
`;

const List = styled.ul`
  margin: inherit;
`;

const Wrapper = styled.div`
  background-color: rgb(247, 247, 247);
  margin: 0;
  padding 0;
`;

const Carousel = (props) => (
  <Wrapper>
    <List>
      <Item>
        <Images image={props.carousel[0]} />
        <Rating rating={props.carousel[0]} />
        <Listing listing={props.carousel[0]} />
        <Description description={props.carousel[0]} />
        <NightlyRate rate={props.carousel[0]} />
      </Item>
    </List>
  </Wrapper>
);

export default Carousel;
