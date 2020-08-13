import React from 'react';
import styled from 'styled-components';

const RightButton = styled.button`
  background-color: white;
  border-color: rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  height: 35px;
  margin: 0px;
  outline: none;
  width: 35px;
`;

const LeftButton = styled.button`
  background-color: white;
  border-color: rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  height: 35px;
  margin-right: 12px;
  outline: none;
  width: 35px;
`;

const PageCount = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-right: 16px;
`;

const Wrapper = styled.div`
  align-items: center;
  background-color: rgb(247, 247, 247);
  display: flex;
`;

// TODO => Come up with way to compute total number of pages based on number of listing in db
// this will have to do with the number of listings we get in the response...
class NavButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPages: 4,
    };
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
  }

  handleRightClick() {
    let curCount = this.state.currentPage;
    if (curCount === this.state.totalPages) {
      this.setState({ currentPage: 1 });
    } else {
      curCount += 1;
      this.setState({ currentPage: curCount });
    }
  }

  handleLeftClick() {
    let curCount = this.state.currentPage;
    if (curCount !== 1) {
      curCount -= 1;
      this.setState({ currentPage: curCount });
    }
  }

  render() {
    return (
      <Wrapper>
        <PageCount>
          {this.state.currentPage} / {this.state.totalPages}
        </PageCount>
        <LeftButton onClick={this.handleLeftClick}>
          <svg viewBox="0 0 18 18" role="presentation" style={{ height: 10, width: 10 }}>
            <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" />
          </svg>
        </LeftButton>
        <RightButton onClick={this.handleRightClick}>
          <svg viewBox="0 0 18 18" style={{ height: 10, width: 10 }}>
            <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" />
          </svg>
        </RightButton>
      </Wrapper>
    );
  }
}

export default NavButtons;
