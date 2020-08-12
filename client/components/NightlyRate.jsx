/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const PerNight = styled.span`
  margin-left: 0.25em;
`;

const Rate = styled.div`
  background-color: rgb(247, 247, 247);
  display: flex;
  margin: 0;
  padding: 0;
`;

const NightlyRate = (props) => (
  <Rate>
    <strong>
      <span>$</span>
      {props.rate.rate}
    </strong>
    <PerNight>
      / night
    </PerNight>
  </Rate>
);

export default NightlyRate;
