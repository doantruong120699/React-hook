import React, { useEffect, useState } from 'react';
import quertString from 'query-string';
import './App.css';
import Pagiantion from './components/Pagination';
import PostList from './components/PostList';
import PostFiltersForm from './components/PostFiltersForm';
// import TodoForm from './components/TodoForm';
// import ColorBox from './components/ColorBox';
// import TodoList from './components/TodoList';

function App() {
    const [todoList, setTodoList] = useState([
        { id: 1, title: "Work 1" },
        { id: 2, title: "Work 2" },
        { id: 3, title: "Work 3" }
    ]);
    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1,
    });
    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1,
        title_like: ''
    });

    useEffect(() => {
        async function fetchPostList() {
            try {
                const paramString = quertString.stringify(filters);
                const requestUrl = `https://js-post-api.herokuapp.com/api/posts?${paramString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                console.log({ responseJSON })
                const { data, pagination } = responseJSON;
                setPostList(data);
                setPagination(pagination);
            } catch (error) {
                console.log("Failed: ", error.message);
            }

        }
        fetchPostList();
    }, [filters]);

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

    function handlePageChange(newPage) {
        setFilters({
            ...filters,
            _page: newPage,
        });
    }
    function handleFiltersChange(newFilters) {
        setFilters({
            ...filters,
            _page: 1,
            title_like: newFilters.searchTerm,
        });
    }
    return (
        <div className="App">
            <h1>Welcom to React Hooks!</h1>
            {/* <ColorBox></ColorBox> */}
            {/* <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>
            <TodoList todos={todoList} onTodoClick={handleTodoList}></TodoList> */}
            <PostFiltersForm onSubmit={handleFiltersChange}></PostFiltersForm>
            <PostList posts={postList} ></PostList>
            <Pagiantion pagiantion={pagination} onPageChange={handlePageChange}></Pagiantion>
        </div>
    );
}

export default App;
