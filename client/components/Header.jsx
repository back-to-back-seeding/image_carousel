import React from 'react';
import styled from 'styled-components';

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
  background-color: rgb(247, 247, 247);
`;

const Header = () => (
  <Wrapper>
    <Section>
      <Heading>More Places to Stay</Heading>
    </Section>
  </Wrapper>
);

export default Header;

  // <div className="heading">
  //   <div>
  //     <section>
  //       <h2>More Places to Stay</h2>
  //     </section>
  //   </div>
  // </div>