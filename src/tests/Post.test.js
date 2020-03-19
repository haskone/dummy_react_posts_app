import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Post from '../components/Post';

test('Post: render props', () => {
  const post = { title: "title", body: "body"};
  const number = 1;

  const { getByText } = render(<Post post={post} number={number} />);

  const titleElement = getByText(`#${number}: ${post.title}`);
  expect(titleElement).toBeInTheDocument();

  const bodyElement = getByText(post.body);
  expect(bodyElement).toBeInTheDocument();
});

test('Post: render props with comments', () => {
  const post = { title: "title", body: "body"};
  const number = 1;

  render(<Post post={post} number={number} />);

  fireEvent.change(screen.getByPlaceholderText("Your name"), {
    target: {value: 'Johnny'},
  })
  fireEvent.change(screen.getByPlaceholderText("Leave your comment"), {
    target: {value: 'Looks like it works'},
  })

  fireEvent.click(screen.getByText("Leave a comment"))

  // Check that the comment on the screen
  const commentElement = screen.getByText("Looks like it works");
  expect(commentElement).toBeInTheDocument();
});
