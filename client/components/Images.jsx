/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const InnerWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 240px;
  padding: 8px;
`;

const ListingImage = styled.img`
  border-radius: 8px;
  box-sizing: border-box;
  overflow: hidden;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const OuterWrapper = styled.div`
  margin: 0;
  margin-bottom: 10px;
  padding:0;
  height: 165px;
  width: 260px;
`;

const SuperhostWrapper = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.95);
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  color: rgb(34, 34, 34);
  font-size: 12px;
  font-family: inherit;
  line-height: 16px;
  font-weight: 800;
  letter-spacing: 0.04em;
  padding: 4px 8px;
`;

const HeartWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Heart = styled.button`

`;

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    if (this.props.graphics.superhost) {
      return (
        <OuterWrapper>
          <InnerWrapper>
            <SuperhostWrapper>
              SUPERHOST
            </SuperhostWrapper>
            <HeartWrapper>
              Sup?
            </HeartWrapper>
          </InnerWrapper>
          <ListingImage alt="" src={this.props.graphics.image} />
        </OuterWrapper>
      );
    }
    return (
      <OuterWrapper>
        <InnerWrapper>
          <HeartWrapper>
            Sup?
          </HeartWrapper>
        </InnerWrapper>
        <ListingImage alt="" src={this.props.graphics.image} />
      </OuterWrapper>
    );
  }
}

export default Images;
