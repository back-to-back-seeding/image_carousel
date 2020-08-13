/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const ListingImage = styled.img`
  background-color: inherit;
  border-radius: 1em;
`;

const Wrapper = styled.div`
  background-color: rgb(247, 247, 247);
`;

const Images = (props) => (
  <Wrapper>
    <ListingImage src={props.image.image} />
  </Wrapper>
);

export default Images;
