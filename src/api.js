import axios from "axios";
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 1000,
  params: {
    api_key: "02f4daf82441c7d454d6ab4bf28b8d36"
  }
});

export const moviesApi = {
    nowPlaying = () => api.get('movie/now_playing'),
    upComing = () => api.get('movie/upcoming'),
    topRating = () => api.get('movie/top_rated'),
    popular = () => api.get('movie/popular'),
    details = id => api.get(`movie/${id}`, {
      params: {
        append_to_response: 'videos'
      }
    }),
    search = term => api.get('search/movie', {
      params: {
        query: encodeURIComponent(term)
      }
    })
}

export const tvApi = {
    topRating = () => api.get('tv/top_rated'),
    popular = () => api.get('tv/popular'),
    aringToday = () => api.get('tv/airing_today'),
    details = id => api.get(`tv/${id}`, {
      params: {
        append_to_response: 'videos'
      }
    }),
    search = term => api.get('search/tv', {
      params: {
        query: encodeURIComponent(term)
      }
    })
}