import '@testing-library/jest-dom';
import React from 'react';
import StudentsList from '../StudentsList';
import {screen, cleanup, waitFor, getAllByText, render, getByText, findByText } from "@testing-library/react";

const mockData = [
  {
    "id": 7,
    "name": "jojo",
    "marks": 4.3
  },
  {
    "id": 8,
    "name": "haruki",
    "marks": 9.8
  },
  {
    "id": 9,
    "name": "saitama",
    "marks": 8.4
  }
];

afterEach(cleanup);

global.fetch = jest.fn().mockImplementation(() => Promise.resolve({json: () => (mockData)}));

describe('implements Dashboard render logic correctly', () => {
  it('sdsdss', async () => {
    const {debug, findByText} = render(<StudentsList />);

    const text1 = await findByText('haruki');
    const text2 = await findByText('jojo');
    const text3 = await findByText('saitama');
    const label1 = await findByText(/Descending/i);

    expect(text1).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
    expect(text3).toBeInTheDocument();
    expect(label1).toBeInTheDocument();

    // element text changes after click event
    label1.click();

    const label2 = await findByText(/ascending/i);

    expect(label2).toBeInTheDocument();
  });
});
