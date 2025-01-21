```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs when component mounts and updates
    console.log('Component mounted or updated');
    return () => {
      // Cleanup function to run before component unmounts or updates
      console.log('Component unmounting or updating');
    };
  }, [count]); // Added count to the dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```