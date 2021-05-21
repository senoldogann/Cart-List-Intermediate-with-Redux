import * as actionsTypes from "./actionType";

export function changeCategory(category) {
    return { type: actionsTypes.CHANGE_CATEGORY, payload: category }
}

export function getCategoriesSuccess(categories){
    return { type: actionsTypes.GET_CATEGORIES_SUCCESS, payload: categories }
}

export function getCategories() {
    return function (dispatch) {
        
        // api'ye bağlanma
        let url = "http://localhost:3000/categories";
        return fetch(url).then(response => response.json())
            .then(response => dispatch(getCategoriesSuccess(response)));
             
    }
}