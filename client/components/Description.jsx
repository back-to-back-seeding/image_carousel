/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 275px;
  font-weight: 400;
  font-size: 16px;
  max-height: 20px;
`;

const Description = (props) => (
  <Title>{props.description.description}</Title>
);

export default Description;
