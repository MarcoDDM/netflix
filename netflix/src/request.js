const API_KEY = "9830bd1959166484d27a9f62b32e9f1e";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=es`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=es`,
    fetchActionMovies: `/discover/movie=api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie=api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie=api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie=api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie=api_key=${API_KEY}&with_genres=99`,
}

export default requests;