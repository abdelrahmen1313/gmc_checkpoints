// BUG #2: This component re-renders too many times.
// (Hint: trace props & devtools render highlights)

export default function Counter({ value, onIncrease }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Counter: {value}</h2>
      <button onClick={onIncrease}>Increase</button>
    </div>
  );
}
