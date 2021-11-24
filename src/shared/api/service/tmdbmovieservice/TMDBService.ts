import http from "../../TMDBapi"

const getPopularMoive = (api_key: string, lang : string, page : string) => {
    return http.get(`/movie/popular?api_key=${api_key}&language=${lang}&page=${page}`)
}
const getGenre = (api_key: string, lang : string) => {
    return http.get(`/genre/movie/list?api_key=${api_key}&language=${lang}`)
}
export default {
    getPopularMoive,
    getGenre
}