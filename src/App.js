import React, { useState } from 'react';
import KeywordInput from './components/KeywordInput';
import KeywordResult from './components/KeywordResult';
import './App.css';

function App() {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = async (input) => {
    setKeyword(input);

    // Mock API call
    try {
      const response = await fetch('https://66178e97ed6b8fa43482ffeb.mockapi.io/api/video');
      const data = await response.json();

      const foundKeyword = data.find((item) => item.Keyword === input);
      if (foundKeyword) {
        setResult(foundKeyword);
      } else {
        setResult(null);
        alert('Keyword not found!');
      }
    } catch (error) {
      console.error('Error fetching API:', error);
    }
  };

  return (
    <div className="app-container">
      {result ? (
        <KeywordResult result={result} reset={() => setResult(null)} />
      ) : (
        <KeywordInput onSearch={handleSearch} />
      )}
    </div>
  );
}

export default App;
