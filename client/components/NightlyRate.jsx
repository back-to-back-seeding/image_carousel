import React from 'react';
import styled from 'styled-components';

const Rate = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  background-color: rgb(247, 247, 247);
`;

const NightlyRate = () => (
  <Rate>
    <strong>$170</strong>
    / night
  </Rate>
);

export default NightlyRate;
