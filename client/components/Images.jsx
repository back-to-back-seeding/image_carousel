/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const ListingImage = styled.img`
  background-color: inherit;
  background-size: cover;
  border-radius: 1em;
  height: 200px;
  margin-bottom: 5px;
  object-fit: cover;
  width: 280px;
`;

const Images = (props) => (
  <ListingImage alt="" src={props.image.image} />
);

export default Images;
