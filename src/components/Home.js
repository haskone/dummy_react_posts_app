import React, { useState, useEffect } from 'react';
import { Pane, Heading } from 'evergreen-ui'

import { getPosts } from '../api/posts';  
import Post from './Post'; 

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts(20).then(posts => setPosts(posts));
    }, []);

    return (
        <Pane
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            padding={50}
        >
            <Heading
                size={600}
                padding={20}
            >
                List of posts
            </Heading>
            <Pane
                display="flex"
                flexDirection="column"
            >
            {
                posts.length > 0 &&
                posts.map((post, index) =>
                    <Post
                        post={post}
                        number={index + 1}
                        key={post.id}
                    />
                )
            }
            </Pane>
        </Pane>
    );
}

export default Home;