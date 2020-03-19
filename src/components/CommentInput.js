import React, { useState } from 'react'; 
import { Button, Pane, Textarea, TextInput } from 'evergreen-ui'

const CommentInput = props => {
    const { onAdd } = props;
    const [value, setValue] = useState("");
    const [author, setAuthor] = useState("");

    const onAddHandler = () => {
        onAdd({value, author})
        setValue("")
        setAuthor("")
    }

    return (
        <Pane
            display="flex"
            flexDirection="column"
            alignItems="left"
        >
            <TextInput
                value={author}
                onChange={e => setAuthor(e.target.value)}
                placeholder="Your name"
                margin={10}
                width={460}
            />
            <Textarea
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Leave your comment"
                margin={10}
                width={460}
                maxWidth={460}
            />
            <Button
                onClick={() => onAddHandler()}
                appearance="primary"
                margin={10}
                width={460}
            >
                Leave a comment
            </Button>
        </Pane>
    );
}

export default CommentInput;