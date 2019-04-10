import React, { Component } from 'react'
import { connect } from 'react-redux'
class Checkout extends Component{
    
    componentWillUnmount() {
         if(this.refs.delivery.checked)
            this.props.substractDelivery();
         if(this.refs.pickup.checked)
            this.props.noPickup();
    }
    deliveryChecked = (e)=>{
        if(e.target.checked){
            this.props.addDelivery();
        }
        else{
            this.props.substractDelivery();
        }
    }

    pickupChecked = (e)=>{
        if(e.target.checked){
            this.props.kioskPickup();
        }
        else{
            this.props.noPickup();
        }
    }

    render(){
  
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="delivery" onChange= {this.deliveryChecked} />
                                <span>Gate Delivery(+$6)</span>
                            </label>
                            <label>
                                <input type="checkbox" ref="pickup" onChange= {this.pickupChecked} />
                                <span>Kiosk Pickup(Free)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: ${this.props.total}</b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn">Checkout</button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addDelivery: ()=>{dispatch({type: 'ADD_DELIVERY'})},
        substractDelivery: ()=>{dispatch({type: 'SUB_DELIVERY'})},
        kioskPickup: ()=>{dispatch({type: 'PICK_UP'})},
        noPickup: ()=>{dispatch({type: 'NO_PICKUP'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Checkout)
