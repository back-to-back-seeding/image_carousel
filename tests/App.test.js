/* eslint-disable no-undef */
// import React from 'react';
// eslint-disable-next-line import/extensions
import App from '../client/components/App';

describe('<App /> rendering', () => {
  it('should render one <h1>', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.children('h1')).toHaveLength(1);
  });
});
