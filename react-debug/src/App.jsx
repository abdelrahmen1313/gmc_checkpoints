import { useState } from "react";
import Counter from "./Counter.jsx";
import TodoList from "./TodoList";

export default function App() {
  const [count, setCount] = useState(0);

  // BUG #1: This increments twice on click.
  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Debug Playground</h1>
      <Counter value={count} onIncrease={handleIncrease} />
      <TodoList />
    </div>
  );
}
