import React from 'react';
import styled from 'styled-components';

const Rate = styled.div`
  background-color: rgb(247, 247, 247);
  display: flex;
  margin: 0;
  padding: 0;
`;

const NightlyRate = () => (
  <Rate>
    <strong>$170</strong>
    / night
  </Rate>
);

export default NightlyRate;
