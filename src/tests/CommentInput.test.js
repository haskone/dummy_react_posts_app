import React from 'react';
import { render } from '@testing-library/react';

import CommentInput from '../components/CommentInput';

test('CommentInput: render something at least', () => {
  const { getByPlaceholderText, getByText } = render(<CommentInput />);

  const buttonElement = getByText("Leave a comment");
  expect(buttonElement).toBeInTheDocument();

  const authorElement = getByPlaceholderText("Your name");
  expect(authorElement).toBeInTheDocument();

  const commentElement = getByPlaceholderText("Leave your comment");
  expect(commentElement).toBeInTheDocument();
});
