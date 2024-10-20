import { useState } from "react";

const initialTodos = [];

const Todo = () => {
    const [todos , setTodos] = useState(initialTodos);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        console.log(data.get('todo')); //Just logging what I got on my todo field
        console.log(data.get('isCompleted')); //Just logging what I got on my isCompleted field
        setTodos([
            ...todos,
            {
                name: data.get('todo'),
                isCompleted: data.get('isCompleted') ? true : false
            }
        ])

        e.target.reset(); //Works on FormData
    }

    return (
        <>
            <h1>Todo list</h1>
            {/* an input where I can add todos */}
            <form onSubmit={handleSubmit}>
                Enter Todo: <input name='todo'/>
                Is Completed: <input type='checkbox' name='isCompleted'/>
                <button type='submit'>Submit</button>
            </form>

            {/* List my todos here */}
            <ul>
                {todos.map( (todo, index) => {
                    return (<li key={index}>{`${todo.name} - ${todo.isCompleted? 'Finished' : 'Pending'}`}</li>)
                })}
            </ul>
        </>
    )
}

export default Todo;