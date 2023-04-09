import { useState } from "react";

const UseStateArrayObjectExample = () => {

    const [todos, setTodos] = useState<{ id: number, name: string, isChecked: boolean }[]>([]);
    const [todo, setTodo] = useState("");

    const onCheckboxChange = (currentTodo: { id: number, name: string, isChecked: boolean }) => {

        setTodos((prevTodos) => {
            const updatedTodos = prevTodos.map(prevTodo => {
                if (prevTodo.id === currentTodo.id) {
                    return {
                        ...prevTodo,
                        isChecked: !prevTodo.isChecked
                    }
                } else {
                    return prevTodo;
                }
            });
            return updatedTodos;
        });
    }

    const onAddTodo = () => {
        if (todo) {
            setTodos([...todos, { name: todo, id: todos.length, isChecked: false }]);
            setTodos([...todos, { name: todo, id: todos.length, isChecked: false }]);
            setTodos([...todos, { name: todo, id: todos.length, isChecked: false }]);
            setTodos([...todos, { name: todo, id: todos.length, isChecked: false }]);
            setTodo("");
        }

    }

    return (
        <div>
            <div>
                <h2>Using Array Object</h2>
                <h3>Top companies</h3>
                <ol>
                    {
                        todos.map((todo) => {
                            return (<li key={todo.id}>
                                <label htmlFor={`${todo.id}`}>
                                    <input name="todo" required id={`${todo.id}`} type={"checkbox"} checked={todo.isChecked} onChange={() => onCheckboxChange(todo)} />
                                    {todo.name}
                                </label>
                            </li>)
                        })
                    }
                </ol>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    onAddTodo()
                }}>
                    <input value={todo} onChange={(event) => setTodo(event.target.value)} />
                    <button type={"submit"} >Add Todo</button>
                </form>

            </div>
        </div>
    )
}

export default UseStateArrayObjectExample;