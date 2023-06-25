import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import '../style/news.css';
import img from '../images/white-texture.jpg';

export default function News() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=f02668d1edef4d9599209cd26eb8014f'
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="webpage" style={{ backgroundImage: `url(${img})` }}>
      <div className="heading">WallStreetWire-A Brief look at WallStreet Journal</div>
      <div className="container" style={{ gridTemplateRows: `repeat(${data && data.totalResults / 2}, 80vh)` }}>
        {data &&
          data.articles.map((element, index) => (
            <NewsCard
              key={index}
              title={element.title}
              imageurl={element.urlToImage}
              body={element.content ? element.content.split('\n').slice(0, 10).join('\n') : ''}
              link={element.url}
            />
          ))}
        
      </div>
    </div>
  );
}
