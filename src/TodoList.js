import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, dispatchTodos }) {
    return (
        <div>
            {todos.map(todo => <Todo key={todo.title} todo={todo} dispatchTodos={dispatchTodos} />)}
        </div>
    );
}