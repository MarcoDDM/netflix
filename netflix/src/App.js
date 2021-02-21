import React from 'react';
import './App.css';
import Row from './Row.js';
import requests from './request';

function App() { 
  return (
    <div className="App">
      <h1>Hola, soy Marco</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl= {requests.fetchNetflixOriginals} />
      <Row title="Trending now" fetchUrl= {requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl= {requests.fetchTopRated} />
      <Row title="Mystery Movies" fetchUrl= {requests.fetchMysteryMovies} />
      <Row title="Comedy Movies" fetchUrl= {requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl= {requests.fetchHorrorMovies} />
      <Row title="Science Fiction Movies" fetchUrl= {requests.fetchCienceFictionMovies} />
      <Row title="Documentaries" fetchUrl= {requests.fetchDocumentaries} />
      

      
    </div>
  );
}


export default App;
