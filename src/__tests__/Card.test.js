import '@testing-library/jest-dom';
import React from 'react';
import Card from '../Card';
import { shallow, mount, render } from 'enzyme';

it('shallow renders Card without crashing', () => {
  shallow(<Card />);
});


it('renders given props correctly', () => {
  const card = mount(<Card title="title 01" type="calculation" primary_stat="UI tests" secondary_stat="design" />);

  expect(card.find('img').getDOMNode().getAttribute('src')).toBe('chart.svg');

  // other props
  expect(card.prop('title')).toEqual('title 01');
  expect(card.prop('type')).toEqual('calculation');
  expect(card.prop('primary_stat')).toEqual('UI tests');
  expect(card.prop('secondary_stat')).toEqual('design');
});
