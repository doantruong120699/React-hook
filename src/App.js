import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
// import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';

function App() {
    const [todoList, setTodoList] = useState([
        { id: 1, title: "Work 1" },
        { id: 2, title: "Work 2" },
        { id: 3, title: "Work 3" }
    ]);

    function handleTodoList(todo) {
        const index = todoList.findIndex(x => x.id === todo.id);
        if (index < 0) return;
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }

    function handleTodoFormSubmit(formValues) {
        // add new todo to current todo list 
        const newTodo = {
            id: todoList.length + 1,
            ...formValues,
        }
        const newTodoList = [...todoList];
        newTodoList.push(newTodo);
        setTodoList(newTodoList);
    }

    return (
        <div className="App">
            <h1>Welcom to React Hooks!</h1>
            {/* <ColorBox></ColorBox> */}
            <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>
            <TodoList todos={todoList} onTodoClick={handleTodoList}></TodoList>
        </div>
    );
}

export default App;
