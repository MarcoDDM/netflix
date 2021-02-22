import React from 'react';
import './App.css';
import Row from './Row.js';
import requests from './request';
import Banner from "./Banner.js";
import Nav from "./Nav.js";

function App() { 
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl= {requests.fetchNetflixOriginals}
        isLargeRow={true} 
        />
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
