import { ADD_TO_CART,
         REMOVE_ITEM,
         SUB_QUANTITY,
         ADD_QUANTITY,
         ADD_DELIVERY,
         PICK_UP,
         NO_PICKUP } from '../actions/action-types/cart-actions'

const itemFile = require('../../data/items.json');

const initState = {
    items: itemFile,
    addedItems:[],
    total: 0
}

const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.item_id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.item_id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.item_id)
        let new_items = state.addedItems.filter(item=> action.id !== item.item_id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type === ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.item_id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type === SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.item_id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.item_id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type === ADD_DELIVERY){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type === 'SUB_DELIVERY'){
        return{
            ...state,
            total: state.total - 6
        }
  }

    if(action.type === PICK_UP){
        return{
            ...state,
            total: state.local + 0
        }
    }

    if(action.type === NO_PICKUP){
        return{
            ...state,
            total: state.local - 0
        }
    }
    return state
}

export default cartReducer