/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const ListingImage = styled.img`
  background-color: inherit;
  border-radius: 1em;
  object/fit: cover
`;

const Images = (props) => (
  <ListingImage src={props.image.image} />
);

export default Images;
