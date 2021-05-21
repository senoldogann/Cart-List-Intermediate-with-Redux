import * as actionsTypes from "./actionType";

export function getProductsSuccess(products){
    return { type: actionsTypes.GET_PRODUCTS_SUCCESS, payload: products }
}

export function getProducts(categoryId) {
    return function (dispatch) {
        
        // api'ye bağlanma
        let url = "http://localhost:3000/products";
        if(categoryId){
            url = url + "?categoryId=" + categoryId
        }
        return fetch(url)
            .then(response => response.json())
            .then(response => dispatch(getProductsSuccess(response)));
            
    }
}