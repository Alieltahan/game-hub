import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "1e8a29b5a7c34657a98bbbee42b4d046"
    }
})