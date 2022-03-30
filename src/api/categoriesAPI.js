import { customAxios } from "../services/http";

export function loadCategories() {
    return customAxios.get('/categories')
}