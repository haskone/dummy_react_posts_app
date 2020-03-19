import React, { useState } from 'react'; 
import { Pane, Text, Heading } from 'evergreen-ui'

import CommentInput from "./CommentInput";
import Comment from "./Comment";

const Post = props => {
    const { post, number } = props;
    const [ comments, setComments ] = useState([]);

    const addComment = data => {
        const { value, author } = data;
        setComments([...comments, { value, author }]);
    };

    return (
        <Pane
            width={500}
            display="flex"
            flexDirection="column"
            elevation={3}
            padding={10}
        >
            <Heading size={500}>
                #{number}: {post.title}
            </Heading>
            <Text padding={10}>
                {post.body}
            </Text>
            <Heading
                size={400}
                padding={10}
            >
                Comments:
            </Heading>
            {
                comments.length > 0 &&
                comments.map((comment, index) =>      
                    <Comment
                        value={comment.value}
                        author={comment.author}
                        key={index}
                    />
                )
            }
            <CommentInput onAdd={addComment}/>
        </Pane>
    );
}

export default Post;