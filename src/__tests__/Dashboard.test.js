import '@testing-library/jest-dom';
import React from 'react';
import Dashboard from '../Dashboard';
import {screen, cleanup, waitFor, getAllByText, render, getByText, findByText } from "@testing-library/react";

const mockData = [
  {
    "id": 1,
    "title": "Students",
    "type": "profiles",
    "line1": 22
  },
  {
    "id": 2,
    "title": "Average Markes",
    "type": "calculation",
    "line1": 3.8
  },
  {
    "id": 3,
    "title": "Underperforming students",
    "type": "calculation",
    "line1": 19,
    "line2": "(84%)"
  }
]

afterEach(cleanup);

global.fetch = jest.fn().mockImplementation(() => Promise.resolve({json: () => (mockData)}));

describe('implements Dashboard render logic correctly', () => {
  it('fetches data and renders', async () => {
    const { findByText} = render(<Dashboard />);

    const label1 = await findByText(/84/i);
    const label2 = await findByText(/Underperforming students/i);
    const label3 = await findByText(/3.8/i);

    expect(label1).toBeInTheDocument();
    expect(label2).toBeInTheDocument();
    expect(label3).toBeInTheDocument();

  });
});
