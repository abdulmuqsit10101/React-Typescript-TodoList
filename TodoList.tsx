import React from "react";
import TodoListItem from "./TodoListItem";
import {
    Todo,
    ToggleComplete
} from "./Actions";

interface TodoListProps {
    Todo: Array<Todo>,
    ToggleComplete: ToggleComplete
}

const TodoList: React.FC<TodoListProps> = ({ Todo, ToggleComplete }) => {
    return (
        <ol>
            {
                Todo.map((todo,index) => {
                    return <TodoListItem key={index} Todo={todo} ToggleComplete={ToggleComplete} />
                })
            }
        </ol>
    )
}


export default TodoList;