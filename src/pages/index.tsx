import { useState } from 'react';

export default function Home() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleClick = async () => {
    if (!value.trim()) {
      alert('Please enter a value');
      return;
    }

    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${encodeURIComponent(value)}`);
      const data = await res.json();
      setResult(data.title);
    } catch (err) {
      console.error('Failed to fetch todo', err);
      setResult('Error fetching data');
    }
  };

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleClick}>Fetch Todo</button>
      {result && <p>{result}</p>}
    </div>
  );
}
