import { customAxios } from "../services/http";

export function loadProductsItem(currentId) {
    return customAxios.get(`/products/${currentId ? currentId : null}`)
}