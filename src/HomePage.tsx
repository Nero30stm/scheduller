import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify";
import TodoList from "./components/TodoList";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-toastify/dist/ReactToastify.min.css";
import { Link } from 'react-router-dom';

const StyledApp = styled.div`
  background-color: #f4f6f8;
  height: 100vh;
  padding: 1rem;
`;

export function HomePage() {
    return (
        <StyledApp>
            <h1>hi</h1>
            <CssBaseline />
            <TodoList />
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
            />
        </StyledApp>
    );
}