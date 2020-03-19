import React from 'react'; 
import { Pane, Text, Heading } from 'evergreen-ui'

const Comment = props => {
    const { value, author } = props;
    return (
        <Pane
            background="tint2"
            display="flex"
            flexDirection="column"
            padding={24}
            margin={5}
        >
            <Heading
                size={400}
            >
                { author }:
            </Heading>
            <Text>{ value }</Text>
        </Pane>
    );
}

export default Comment;