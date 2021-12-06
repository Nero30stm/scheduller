import React, { useState } from "react";
import { Modal, Button, TextField } from "@material-ui/core";
import { useStores } from "./use-stores";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const AddingTask = () => {
    const [text, setText] = useState("");
    const { todoStore } = useStores();

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTodo = {
            id: Date.now(),
            text,
            completed: false
        };
        todoStore.addTodo(newTodo);
        navigate('/')
    };

    return (
        <div aria-labelledby="modal-new-todo">
            <div>
                <h2 id="modal-new-todo">Add new Todo</h2>
                <form onSubmit={handleSubmit} noValidate>
                    <TextField
                        id="standard-basic"
                        autoFocus
                        label="Todo"
                        fullWidth
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleChange(e)
                        }
                    />
                    <Button
                        disabled={text.length === 0}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ marginTop: "1rem" }}
                    >
                        Submit
                    </Button>
                </form>
            </div>
            <Link to='/'>return</Link>
        </div>
    );
};

export default AddingTask;