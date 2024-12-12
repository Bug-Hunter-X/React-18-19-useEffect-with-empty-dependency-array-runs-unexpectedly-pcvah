```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect running!');
    // Cleanup function to be executed before the next effect runs
    return () => {
      console.log('Effect cleanup!');
    };
  }, []); // This will now only run on mount.

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```