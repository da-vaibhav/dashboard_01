import '@testing-library/jest-dom';
import React from 'react';
import Dashboard from '../Dashboard';
import { shallow } from 'enzyme';

it('shallow renders Dashboard without crashing', () => {
  shallow(<Dashboard />);
});
