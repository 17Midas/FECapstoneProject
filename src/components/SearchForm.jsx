import { useState } from 'react';

export default function Search({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input 
        type="text" 
        placeholder="Enter city name..." 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button type="submit">Search</button>
    </form>
  );
}
