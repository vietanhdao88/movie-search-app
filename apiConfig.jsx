export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = `a809e1205239f6afb0a75c437d275f59`;
const tmdbEndpoint = "https://api.themoviedb.org";
const tmdbEndpointSearch = "https://api.themoviedb.org/3/search/movie";
export const tmdbAPI = {
  getMovieList: (type, page = 1) =>
    `${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${page}`,
  getMovieDetail: (movieId) =>
    `${tmdbEndpoint}/3/movie/${movieId}?api_key=${apiKey}`,
  getMovieSearch: (query, page) =>
    `${tmdbEndpointSearch}?query=${query}&api_key=${apiKey}&page=${page}`,
  getMovieMeta: (movieId, type) =>
    `${tmdbEndpoint}/3/movie/${movieId}/${type}?api_key=${apiKey}`,
  imgOrigin: (url) => `https://image.tmdb.org/t/p/original/${url}`,
  imgW500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};
