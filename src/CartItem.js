import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            title:'Phone',
            qty:1.,
            img:''
        }
        //to bind the "this" to increaseQuantity function
        //this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    //pointer function keep the reference of the object 
    increaseQuantity=()=>{
        console.log("print");
    }
    render(){
        //object disstructuring
        const{price,title,qty}=this.state;
        return(
        <div className="cart-item">
            <div className="left-block"> 
                <img style={styles.image}/>
            </div> 
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}>{price}</div>
                <div style={{color:'#777'}}>{qty}</div>
            </div>
            <div className="cart-item-actions">
            <img 
                alt="increase"
                className="action-icons" 
                src="https://image.flaticon.com/icons/svg/1828/1828817.svg"
                onClick={this.increaseQuantity}
            />

            <img
                alt="decrease" 
                className="action-icons" 
                src="https://as2.ftcdn.net/jpg/03/23/33/19/500_F_323331925_VvJaAQ5sZz8VoEn5qDYGkB7Wu4O80zKL.jpg"
                
            />

            <img 
                alt="delete" 
                className="action-icons" 
                src="https://image.flaticon.com/icons/svg/1632/1632602.svg"
            />
        </div>
        </div>
        );
    
    }
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;