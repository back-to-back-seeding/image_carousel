/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const ListingImage = styled.img`
  border-radius: 8px;
  box-sizing: border-box;
  overflow: hidden;
  height: 100%;
  width: 100%;
  object-fit: cover;
  `;

// margin-bottom: 5px;
// height: 175px;
// width: 275px;
// const InnerWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center:
// `;

const OuterWrapper = styled.div`
  margin: 0;
  margin-bottom: 10px;
  padding:0;
  height: 165px;
  width: 260px;
`;

const Images = (props) => (
  <OuterWrapper>
    <ListingImage alt="" src={props.image.image} />
  </OuterWrapper>
);

export default Images;
