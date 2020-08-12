import React from 'react';
import styled from 'styled-components';

const ListingImage = styled.img`
  background-color: inherit;
  border-radius: 1em;
`;

const Wrapper = styled.div`
  background-color: rgb(247, 247, 247);
`;

const Images = () => (
  <Wrapper>
    <ListingImage src="https://fec-image-carousel-photos.s3.us-east-2.amazonaws.com/image-23.jpg" />
  </Wrapper>
);

export default Images;
