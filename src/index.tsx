import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify";
import TodoList from "./components/TodoList";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "react-toastify/dist/ReactToastify.min.css";
import {HomePage} from "./HomePage"
import AddingTask from "./AddingTask"

const StyledApp = styled.div`
  background-color: #f4f6f8;
  height: 100vh;
  padding: 1rem;
`;

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/"  element={<HomePage/>} />
                <Route path="/page-2"  element={<AddingTask/>} />
            </Routes>
        </Router>
    );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
