/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  margin: 2.5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 275px;
`;

const Description = (props) => (
  <Title>{props.description.description}</Title>
);

export default Description;
