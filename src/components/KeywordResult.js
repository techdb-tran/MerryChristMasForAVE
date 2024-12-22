import React from 'react';

function KeywordResult({ result, reset }) {
  return (
    <div className="keyword-result">
      <h2>{result.Wish}</h2>
      <p><strong>Signature:</strong> {result.Name}</p>
      <img src={result.Url} alt={result.Name} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default KeywordResult;
