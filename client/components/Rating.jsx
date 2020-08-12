/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const NumOfComments = styled.span`
  background-color: inherit;
  color: rgb(113, 113, 113);
  display: inline-block;
  font-size: 12px;
  margin: inherit;
  padding: inherit;
`;

const OutOfFiveStars = styled.span`
  background-color: inherit;
  color: rgb(34, 34, 34);
  display: inline-block;
  font-size: 14px;
  margin-right: 0.15em;
  margin-left: 0.40em;
  padding: inherit;
`;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items:center;
  background-color: rgb(247, 247, 247);
`;

const Rating = () => (
  <Wrapper>
    <svg viewBox="0 0 1000 1000" style={{ height: 14, width: 14 }}>
      <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
    </svg>
    <OutOfFiveStars>4.91</OutOfFiveStars>
    <NumOfComments>(113)</NumOfComments>
  </Wrapper>
);

export default Rating;
