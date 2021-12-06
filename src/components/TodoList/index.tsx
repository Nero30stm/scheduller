import React, { useState } from "react";
import { observer } from "mobx-react";
import TodoItem from "../TodoItem";
import { StyledTodoList, StyledHeader, Container } from "./styles";
import { Button } from "@material-ui/core";
import ModalNewTodo from "../ModalNewTodo";
import { useStores } from "../../use-stores";
import { useNavigate } from 'react-router-dom';

const TodoList = observer(() => {
    const [modalNewTodoIsOpen, setModalNewTodo] = useState(false);
    const { todoStore } = useStores();
    const navigate = useNavigate();

    return (
        <>
            <Container>
                <StyledHeader>
                    <h2>mobx todo</h2>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => navigate('/page-2')}
                    >
                        Add new
                    </Button>
                </StyledHeader>
                <StyledTodoList>
                    {todoStore.incompleteTodos.length === 0 && <p>Nothing to do!</p>}
                    {todoStore.incompleteTodos.map(todo => {
                        return <TodoItem key={todo.id} todo={todo} />;
                    })}
                </StyledTodoList>
                <h3>completed {todoStore.todoProgress}</h3>
                <StyledTodoList>
                    {todoStore.completedTodos.map(todo => {
                        return <TodoItem key={todo.id} todo={todo} />;
                    })}
                </StyledTodoList>
            </Container>
        </>
    );
});

export default TodoList;
