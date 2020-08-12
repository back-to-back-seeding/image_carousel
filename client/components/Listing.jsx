/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

// const AmountOfSpace = styled.li`
//   background-color: inherit;
//   display: inherit;
//   font-size: 16px;
//   margin: inherit;
//   padding: inherit;
// `;

const List = styled.ol`
  background-color: inherit;
  display: inherit;
  margin: inherit;
  padding: inherit;
`;

const SpaceAvailable = styled.li`
  background-color: inherit;
  display: inherit;
  font-size: 16px;
  margin: inherit;
  padding: inherit;
`;

const Wrapper = styled.div`
  background-color: rgb(247, 247, 247);
  display: flex;
  margin: 0;
  padding: 0;
`;

const Listing = (props) => (
  <Wrapper>
    <List>
      <SpaceAvailable>{props.listing.title}</SpaceAvailable>
      {/* <AmountOfSpace>1 Bed</AmountOfSpace> */}
    </List>
  </Wrapper>
);

export default Listing;
