import '@testing-library/jest-dom'
import React from 'react';
import { render, screen, act } from '@testing-library/react';

import Home from '../components/Home';

test('Home: render title', () => {
  const { getByText } = render(<Home />);

  const titleElement = getByText("List of posts");
  expect(titleElement).toBeInTheDocument();
});

const allOver = () => new Promise((resolve) => setImmediate(resolve));

test('Home: render with mock data', async () => {
  const fakePostsResponse = [
    {id: 1, title: 'fake title 1', body: 'fake body 1'},
    {id: 2, title: 'fake title 2', body: 'fake body 2'},
    {id: 3, title: 'fake title 3', body: 'fake body 3'},
  ]

  await act(async () => {
    jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.resolve(fakePostsResponse),
      });
      
    })
    render(<Home />);

    await allOver();
  });

  [1, 2, 3].forEach(number => {
    const titleElement = screen.getByText(`#${number}: fake title ${number}`);
    expect(titleElement).toBeInTheDocument();

    const bodyElement = screen.getByText(`fake body ${number}`);
    expect(bodyElement).toBeInTheDocument();
  });
  
});
