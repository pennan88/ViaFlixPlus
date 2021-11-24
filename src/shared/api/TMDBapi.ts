import axios from "axios";

const TMDBapi = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default TMDBapi
