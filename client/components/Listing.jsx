import React from 'react';
import styled from 'styled-components';

const List = styled.ol`
  display: inherit;
  background-color: inherit;
`;

const SpaceAvailable = styled.li`
  display: inherit;
  background-color: inherit;
`;

const AmountOfSpace = styled.li`
  display: inherit;
  background-color: inherit;
`;

const Wrapper = styled.div`
  display: flex;
  background-color: rgb(247, 247, 247);
`;

const Description = styled.div`
  display: inherit;
  background-color: inherit;
  overflow: hidden;
`;

const Listing = () => (
  <Wrapper>
    <List>
      <SpaceAvailable>Entire Apartment</SpaceAvailable>
      <AmountOfSpace>1 Bed</AmountOfSpace>
    </List>
    <Description>Lurious 2 Bedroom Apartment</Description>
  </Wrapper>
);
// const Listing = () => (
//   <div>
//     <div className="title"> Entire Guest Suite 1 bed </div>
//     <div className="title"> Manhattan Studio Apartment: 2 Adults $125 </div>
//     <div className="rate">
//       <strong>$125</strong>
//       / night
//     </div>
//   </div>
// );

export default Listing;
