import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.item_id}>
                        <div className="card-image">
                            <img src={item.picture_url} alt={item.name}/>
                        </div>

                        <div className="card-content">
                            <span className="card-title">{item.name}</span>
                            <p>{item.description}</p>
                            <p><b>Price: ${(item.price.base_unit / (Math.pow(10, 2))).toFixed(2)}</b></p>
                            <span to="/" className="btn-floating waves-effect waves-light red" onClick={()=>{this.handleClick(item.item_id)}}><i className="material-icons">add</i></span>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Available Items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)