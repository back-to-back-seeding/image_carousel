/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  background-color: rgb(247, 247, 247);
  display: flex;
  overflow: hidden;
`;

const Description = (props) => (
  <Title>{props.description.description}</Title>
);

export default Description;
