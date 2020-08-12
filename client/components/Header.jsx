/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import NavButtons from './NavButtons.jsx';

const Heading = styled.h2`
  display: inherit;
  background-color: inherit;
`;

const Section = styled.section`
  display: inherit;
  background-color: inherit;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(247, 247, 247);
`;

const Header = () => (
  <Wrapper>
    <Section>
      <Heading>More Places to Stay</Heading>
    </Section>
    <NavButtons />
  </Wrapper>
);

export default Header;
