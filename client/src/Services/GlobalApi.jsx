import axios from 'axios';

const movieBaseURL = import.meta.env.VITE_MOVIE_BASE_URL;
const api_key = import.meta.env.VITE_API_KEY;
const movieByGenreBaseURL = import.meta.env.VITE_MOVIEBY_GENRE_BASE_URL;
const movietvShow = import.meta.env.VITE_MOVIE_TVSHOW;
const chineseDramaUrl = import.meta.env.VITE_CHINESE_URL
const kDramaUrl = import.meta.env.VITE_KOREAN_URL
const internationalMoviesUrl = import.meta.env.VITE_INTERNATIONAL_URL
const bollywoodMovieUrl = import.meta.env.VITE_BOLLYWOOD_URL

export function fetchTrendingVideos() {
  return axios.get(`${movieBaseURL}/trending/all/day?api_key=${api_key}&append_to_response=videos,images`);
}

export function fetchTrendingTvShows() {
  return axios.get(`${movieBaseURL}/trending/tv/day?api_key=${api_key}&append_to_response=videos,images`);
}

export function getMovieByGenreId(id, page = 1) {
  return axios.get(`${movieByGenreBaseURL}&with_genres=${id}&page=${page}&append_to_response=videos,images`);
}

export function getMovieByTvShow(id, page=1){
  return axios.get(`${movietvShow}?api_key=${api_key}&with_genres=${id}&page=${page}&append_to_response=videos,images`)
}

export function getChineseDrama(){
  return axios.get(`${chineseDramaUrl}`)
}
export function getChineseDramaGenre(id, page){
  return axios.get(`${chineseDramaUrl}?with_original_language=zh&with_genres=${id}&page=${page}`)
}
export function getKoreanDrama(){
  return axios.get(`${kDramaUrl}`)
}
export function getKoreanDramaGenre(id, page){
  return axios.get(`${kDramaUrl}?with_original_language=ko&with_genres=${id}&page=${page}`)
}
export function getInternationalMovies(page){
  return axios.get(`${internationalMoviesUrl}&page=${page}`)
}
export function getBollywoodMovies(){
  return axios.get(`${bollywoodMovieUrl}`)
}
export function getBollywoodMoviesByGenre(id, page){
  return axios.get(`${bollywoodMovieUrl}?with_genres=${id}&page=${page}`)
}