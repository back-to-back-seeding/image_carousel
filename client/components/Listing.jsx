import React from 'react';
import styled from 'styled-components';

const AmountOfSpace = styled.li`
  margin: inherit;
  padding: inherit;
  display: inherit;
  background-color: inherit;
`;

const List = styled.ol`
  margin: inherit;
  padding: inherit;
  display: inherit;
  background-color: inherit;
`;

const SpaceAvailable = styled.li`
  margin: inherit;
  padding: inherit;
  display: inherit;
  background-color: inherit;
`;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  background-color: rgb(247, 247, 247);
  margin: none;
`;

const Listing = () => (
  <Wrapper>
    <List>
      <SpaceAvailable>Entire Apartment</SpaceAvailable>
      <AmountOfSpace>1 Bed</AmountOfSpace>
    </List>
  </Wrapper>
);

export default Listing;
