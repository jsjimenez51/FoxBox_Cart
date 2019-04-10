
import { ADD_TO_CART,
         REMOVE_ITEM,
         SUB_QUANTITY,
         ADD_QUANTITY,
         ADD_DELIVERY,
         PICK_UP,
         NO_PICKUP } from './action-types/cart-actions'

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
//add Delivery Fee
export const addDelivery=(id)=>{
    return{
        type: ADD_DELIVERY,
        id
    }
}

//kiosk pick-up
export const kioskPickup=(id)=>{
    return{
        type: PICK_UP,
        id
    }
}

//no kiosk pick-up
export const noPickup=(id)=>{
    return{
        type: NO_PICKUP,
        id
    }
}