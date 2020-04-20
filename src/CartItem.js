import React from 'react';

const CartItem =(props)=>{
        //object disstructuring
        const{price,title,qty}=props.product;
        const{
            product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
        }=props
        return(
        <div className="cart-item">
            <div className="left-block"> 
                <img style={styles.image}/>
            </div> 
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}>Price:{price}</div>
                <div style={{color:'#777'}}>Qty:{qty}</div>
            </div>
            <div className="cart-item-actions">
            <img 
                alt="increase"
                className="action-icons" 
                src="https://image.flaticon.com/icons/svg/1828/1828817.svg"
                //function to increase quantity
                onClick={()=>props.onIncreaseQuantity(product)}
            />

            <img
                alt="decrease" 
                className="action-icons" 
                src="https://as2.ftcdn.net/jpg/03/23/33/19/500_F_323331925_VvJaAQ5sZz8VoEn5qDYGkB7Wu4O80zKL.jpg"
                onClick={()=>props.onDecreaseQuantity(product)}
            />

            <img 
                alt="delete" 
                className="action-icons" 
                src="https://image.flaticon.com/icons/svg/1632/1632602.svg"
                onClick={()=>props.onDeleteProduct(product.id)}
            />
        </div>
        </div>
        );
    
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