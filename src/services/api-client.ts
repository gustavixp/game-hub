import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "bf473abd91a4425eb72a4d97513db974"
    }
})