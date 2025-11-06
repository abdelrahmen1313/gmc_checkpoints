import { useState, useEffect } from "react";

export default function TodoList() {
    const [todos, setTodos] = useState(["Learn React", "Debug App"]);
    const [input, setInput] = useState("");

    // BUG #3: Infinite loop (effect runs every render)
    useEffect(() => {
        console.log("Effect running... (should run only on mount)");
        setTodos([...todos]); // <<< causes re-render
    }, []);

    const handleAdd = () => {
        if (input.trim() !== "") {
            setTodos([...todos, input]);
            setInput("");
        }
    };

    return (
        <div>
            <h2>Your Todos</h2>

            {todos.map((todo, index) => (
                <div key={index}>{todo}</div>
            ))}

            <input
                name="todo"
                placeholder="Add todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}
