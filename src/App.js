import React, { useReducer } from 'react';
import { userReducer } from './userReducer';
import { todoReducer } from './todoReducer';
import UserBar from './UserNavBar';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';
import './styles.css';

function App() {
    const [userState, dispatchUser] = useReducer(userReducer, { user: null });
    const [todos, dispatchTodos] = useReducer(todoReducer, []);

    return (
        <div className="container">
            <UserBar user={userState.user} dispatchUser={dispatchUser} />
            {userState.user && <CreateTodo user={userState.user} dispatchTodos={dispatchTodos} />}
            <TodoList todos={todos} dispatchTodos={dispatchTodos} />
        </div>
    );
}

export default App;