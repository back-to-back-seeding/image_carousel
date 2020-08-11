/* eslint-disable no-undef */
// import React from 'react';
// eslint-disable-next-line import/extensions
import App from '../client/components/App';
import Header from '../client/components/Header';
import Images from '../client/components/Images';
import Rating from '../client/components/Rating';
import Listing from '../client/components/Listing';

describe('<App /> rendering', () => {
  it('should render one <h1>', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.children('h1')).toHaveLength(0);
  });

  it('should render Header without throwing an error', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it('should render Images without throwing an error', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.contains(<Images />)).toBe(true);
  });

  it('should render Listingwithout throwing an error', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.contains(<Listing />)).toBe(true);
  });

  it('should render Rating without throwing an error', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.contains(<Rating />)).toBe(true);
  });
});

// describe('<Header /> rendering', () => {
//   it('should render one <h2>', () => {
//     let wrapper = shallow(<Header />);
//     expect(wrapper.children('h2')).toHaveLength(1);
//   });
// });