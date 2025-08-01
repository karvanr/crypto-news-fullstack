import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://crypto-news-backend-production.up.railway.app/api/news')
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Crypto News</h1>
      {articles.length === 0 ? (
        <p>Loading news...</p>
      ) : (
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <p><small>{article.source}</small></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
