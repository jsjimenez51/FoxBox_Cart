import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
// enables styling of Button feature
});

class Checkout extends Component{
    
    componentWillUnmount() {
         if(this.refs.delivery.checked)
            this.props.substractDelivery();
    }
    deliveryChecked = (e)=>{
        if(e.target.checked){
            this.props.addDelivery();
        }
        else{
            this.props.substractDelivery();
        }
    }
    // this creates the Checkout Box feature below the shopping cart
    render(){
        const { classes } = this.props;
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="delivery" onChange= {this.deliveryChecked} />
                                <span>Gate Delivery(+$6)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: ${this.props.total}</b></li>
                    </div>
                    <div className={classes.checkout}>
                        <Button variant="contained" color="secondary" className={classes.button}>Checkout</Button>
                    </div>
                 </div>
        )
    }
}

Checkout.propTypes = {
    classes: PropTypes.object.isRequired,
};

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

export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(Checkout));
