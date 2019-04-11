import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity } from './actions/cartActions'
import Checkout from './Checkout'
class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.item_id}>
                                    <div className="item-img"> 
                                        <img src={item.picture_url} alt={item.picture_url} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.name}</span>
                                        <p>{item.description}</p>
                                        <p><b>Price: ${(item.price.base_unit / (Math.pow(10, 2))).toFixed(2)}</b></p> 
                                        <p><b>Quantity: {item.quantity}</b></p>
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.item_id)}}>arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.item_id)}}>arrow_drop_down</i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.item_id)}}>Remove</button>
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p>No items have been selected...</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>Items in your cart:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                <Checkout />          
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)