/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import NavButtons from './NavButtons.jsx';

const Heading = styled.h2`
  background-color: inherit;
  display: inherit;
  color: #222222;
  font-weight: 600;
  font-size: 22px;
  margin: 0;
  padding: 0;
`;

const Section = styled.section`
  background-color: inherit;
  display: block;
`;

const Wrapper = styled.div`
  align-items: center;
  background-color: rgb(247, 247, 247);
  display: flex;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  justify-content: space-between;
  padding-bottom: 14px;
`;

const Header = () => (
  <Wrapper>
    <Section>
      <Heading>More places to stay</Heading>
    </Section>
    <NavButtons />
  </Wrapper>
);

export default Header;
