/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import NavButtons from './NavButtons.jsx';

const Heading = styled.h2`
  background-color: inherit;
  display: inherit;
`;

const Section = styled.section`
  background-color: inherit;
  display: inherit;
`;

const Wrapper = styled.div`
  background-color: rgb(247, 247, 247);
  display: flex;
  justify-content: space-between;
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
