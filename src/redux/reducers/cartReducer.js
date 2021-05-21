import * as actionTypes from "../actions/actionType";
import initialState from "./initialState";

export default function cartReducer(state=initialState.cart,action){
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            // * Sepete eklenmeye çalışılan ürün  içinde  varmı elemean onu kontrol edicez
            var addedItem = state.find(c => c.product.id === action.payload.product.id);
            // * eklenmeye çalışılan ürün sepette var mı kontrol ediyoruz varsa eklemiyoruz
            if(addedItem){
                // * Tüm sepeti geziyoruz  ve aynı olanları bulyuurouz
                var newState = state.map(cartItem => {
                    if(cartItem.product.id === action.payload.product.id){
                        return Object.assign({},addedItem,{quantity:addedItem.quantity+1})
                    }
                    return cartItem; 
                })
                return newState;
                    
            }else{
                // * Aşağıdaki kod 1. satır state kopyasını al ve 2. kod action'ile gelen payload'i ekle demek
                return [...state,{...action.payload}]
            }
        
        case actionTypes.REMOVE_FROM_CART:
            // Eğer id farklıysa onları filtrele demek istedik aşağıdaki kodu
            // Parametreyle gönderilen değerlerden farklı olanları  yeni bir array yapıp referansı değiştiriyor
            const newState2 = state.filter(cartItem => cartItem.product.id !== action.payload.id)
            return newState2;
            
        default:
            return state;
    }
}