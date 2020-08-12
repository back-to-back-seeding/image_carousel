import React from 'react';
import styled from 'styled-components';

const RightButton = styled.button`
  margin: 6px;
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.08);
  width: 35px;
  height: 35px;
  background-color: white;
  font-size: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  outline: none;
`;

const LeftButton = styled.button`
  margin: 6px;
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.08);
  width: 35px;
  height: 35px;
  background-color: white;
  font-size: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  outline: none;
`;

const PageCount = styled.div`
  font-size: 14px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(247, 247, 247);
`;

const NavButtons = () => (
  <Wrapper>
    <PageCount>1 / 4</PageCount>
    <LeftButton>
      <svg viewBox="0 0 18 18" role="presentation" style={{ height: 10, width: 10 }}>
        <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" />
      </svg>
    </LeftButton>
    <RightButton>
      <svg viewBox="0 0 18 18" style={{ height: 10, width: 10 }}>
        <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" />
      </svg>
    </RightButton>
  </Wrapper>
);

export default NavButtons;
