import { ADD_TO_CART,
         REMOVE_ITEM,
         SUB_QUANTITY,
         ADD_QUANTITY,
         ADD_DELIVERY
         } from '../actions/action-types/cart-actions'

// Food & Option APIs
const itemFile = require('../../data/items.json');
const foodOptions = require('../../data/options.json');

//  Initial State of imported Items in Store
const initState = {
    items: itemFile,
    options: foodOptions,
    addedItems:[],
    total: 0
}

const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.item_id === action.id)
          let price = parseFloat(
            (addedItem.price.base_unit / (Math.pow(10, 2))).toFixed(2)
          );
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.item_id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + price
            
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
        let price = parseFloat(
            (itemToRemove.price.base_unit / (Math.pow(10, 2))).toFixed(2)
          );
        //calculating the total
        let newTotal = state.total - (price * itemToRemove.quantity )
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
        let price = parseFloat(
            (addedItem.price.base_unit / (Math.pow(10, 2))).toFixed(2)
          );
          addedItem.quantity += 1 
          let newTotal = state.total + price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type === SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.item_id === action.id) 
        let price = parseFloat(
            (addedItem.price.base_unit / (Math.pow(10, 2))).toFixed(2)
          );
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.item_id !== action.id)
            let newTotal = state.total - price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type === ADD_DELIVERY){
          return{
              ...state,
              total: parseFloat(state.total + 6)
          }
    }

    if(action.type === 'SUB_DELIVERY'){
        return{
            ...state,
            total: parseFloat(state.total - 6)
        }
  }
    return state
}

export default cartReducer