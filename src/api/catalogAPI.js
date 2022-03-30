import { customAxios } from "../services/http";

export function loadProducts() {
    return customAxios.get('/products')
}
