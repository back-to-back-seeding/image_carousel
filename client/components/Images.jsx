/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const ListingImage = styled.img`
  background-color: inherit;
  background-size: cover;
  border-radius: 8px;
  height: 175px;
  margin-bottom: 5px;
  object-fit: cover;
  width: 275px;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center:
`;

const OuterWrapper = styled.div`
  margin-bottom: 10px;
`;

const Images = (props) => (
  <OuterWrapper>
    <ListingImage alt="" src={props.image.image} />
  </OuterWrapper>
);

export default Images;
