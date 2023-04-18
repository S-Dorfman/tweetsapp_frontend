import {useEffect, useState} from 'react';

import './App.css';

function App() {
  const [tweets, setTweets] = useState(null);

  const fetchTweets = async () => {
    const res = await fetch('/api/tweets');
    const data = await res.json();
    console.log(data.data);
    setTweets(data.data);
  }


  useEffect(() => {
    fetchTweets();
  }, [])


  return (
    <div className="App">
     <h1>Tweets App</h1>

     {tweets && tweets.map(tweet => (
      <div>
        <h3>{tweet.title}</h3>
        <p>{tweet.body}</p>
      </div>
     ))}
    </div>
  );
}

export default App;






