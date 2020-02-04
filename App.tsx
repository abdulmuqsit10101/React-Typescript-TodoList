import React, { useState } from 'react';
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { Todo, ToggleComplete, AddTodo } from './Actions';

const initialState: Array<Todo> = [
  {text: 'My First Task for TypeScript!', complete: true},
  {text: 'My Second Task', complete: false},
]

const App = () => {

  const [Todos, setTodos] = useState(initialState);

  const ToggleComplete: ToggleComplete = selectedTodo => {
    const newTodo = Todos.map(todo => {
      if (selectedTodo === todo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
    setTodos(newTodo);
  }

  const AddTodo: AddTodo = TodoText => {
    if (TodoText.trim() !== "") {
      const newTodo = [...Todos, { text: TodoText, complete: false }];
      setTodos(newTodo);
    }
  }

  return (
    <div className="App">
      <TodoList Todo={Todos} ToggleComplete={ToggleComplete} />  
      <AddTodoForm AddTodo={AddTodo} />
      </div>
      );
    }
    
    export default App;
    