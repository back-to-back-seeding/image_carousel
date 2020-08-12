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
  <Title>
    <div>
      {console.log('test1', props.description)}
    </div>
    <div>
      {console.log('test2', props.description.description)}
    </div>
  </Title>
);

export default Description;
