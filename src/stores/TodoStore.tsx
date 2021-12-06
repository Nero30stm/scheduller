import {observable, computed, action, makeObservable, autorun} from "mobx";
import { toast } from "react-toastify";

export interface ITodo {
    id: number;
    text: string;
    completed: boolean;
}

const defaultTasks: ITodo[] = [
    { id: 1, text: "todo 1", completed: true },
    { id: 2, text: "todo 2", completed: false },
    { id: 3, text: "todo 3", completed: false }
];

export class TodoStore {
    @observable public todos: ITodo[] = [];

    constructor() {
        makeObservable(this)

        try {
            this.todos =
                JSON.parse(
                    localStorage.getItem("tasks")!,
                ) || defaultTasks;
        } catch (err) {
            this.todos = defaultTasks;
        }

        autorun(() =>
            localStorage.setItem(
                "tasks",
                JSON.stringify(this.todos),
            ),
        );
    }


    public addTodo = (todo: ITodo) => {
        this.todos.push(todo);
        toast.success("New Todo added", {
            position: toast.POSITION.BOTTOM_CENTER
        });
    };

    public toggleCompleted = (id: number) => {
        const updatedTodos = this.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.todos = updatedTodos;
    }

    public updateTodo = (updatedTodo: ITodo) => {
        const updatedTodos = this.todos.map(todo => {
            if (todo.id === updatedTodo.id) {
                return { ...updatedTodo };
            }
            return todo;
        });
        this.todos = updatedTodos;
    };


    public deleteTodo = (id: number) => {
        const updatedTodos = this.todos.filter(todo => todo.id !== id);
        this.todos = updatedTodos;
        toast.info("Todo deleted", {
            position: toast.POSITION.BOTTOM_CENTER
        });
    };

    @computed get todoProgress() {
        const completedCount = this.todos.filter(t => t.completed).length;
        const totalCount = this.todos.length;
        return `${completedCount} / ${totalCount}`;
    }

    @computed get completedTodos() {
        return this.todos.filter(todo => todo.completed);
    }

    @computed get incompleteTodos() {
        return this.todos.filter(todo => !todo.completed);
    }
}

