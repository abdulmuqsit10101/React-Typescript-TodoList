import React from "react";
import { Todo, ToggleComplete } from "./Actions";

interface TodoListItemProps {
    Todo: Todo;
    ToggleComplete: ToggleComplete;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ Todo, ToggleComplete }) => {
    return (
        <li className="label" key={Todo.text}>
            <label>
                <input type="checkbox" checked={Todo.complete} onChange={() => ToggleComplete(Todo)} />
                <span>{Todo.text}</span>
            </label>
        </li>
    )
}


export default TodoListItem;