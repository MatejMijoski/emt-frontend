import axios from "./CustomAxios";


class CategoryService {
    getCategories() {
        return axios.get("/categories")
            .then((resp) => resp.data)
    }
}

export default new CategoryService();