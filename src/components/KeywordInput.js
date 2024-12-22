import React, { useState } from 'react';

function KeywordInput({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <div className="keyword-input">
      <h1>Merry Christmas!</h1>
      <p>Enter your keyword:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nhập từ khóa..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default KeywordInput;
