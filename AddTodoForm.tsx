import React, { useState, ChangeEvent } from "react";

interface AddTodoFormProps {
    AddTodo: ( AddTodo: string ) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ AddTodo }) => {

    const [value, setValue] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        console.log("value : ", value);
    }

    return (
        <form>
            <input value={value} type="text" onChange={handleChange} />
            <button onClick={() => AddTodo(value)} type="button"  >Add Todo</button>
        </form>
    )
}

export default AddTodoForm;