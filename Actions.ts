export type Todo = {
    text: string,
    complete: boolean
}

export type ToggleComplete = (selectedTodo: Todo) => void;
export type AddTodo = (TodoText: string) => void;