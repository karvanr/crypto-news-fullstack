import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://crypto-news-backend-production.up.railway.app/news')
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => {
        console.error("خطا در دریافت اخبار:", err);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>اخبار ارز دیجیتال</h1>
      {news.length === 0 ? (
        <p>در حال دریافت اخبار...</p>
      ) : (
        news.map((item, index) => (
          <div key={index} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc' }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
