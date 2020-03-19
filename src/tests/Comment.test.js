import React from 'react';
import { render } from '@testing-library/react';

import Comment from '../components/Comment';

test('Comment: render props', () => {
  const post = "some post";
  const author = "me";

  const { getByText } = render(<Comment value={post} author={author} />);

  const postElement = getByText(post);
  expect(postElement).toBeInTheDocument();

  const authorElement = getByText(`${author}:`);
  expect(authorElement).toBeInTheDocument();
});
