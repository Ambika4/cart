import React from 'react';
import CartItem from './CartItem';
/*main component*/
const Cart =(props)=>{
    const {products}=props;
    return(
        <div className="cart">
            {/* passing arguments as props */}
            {products.map((product)=>{
                return <CartItem 
                product={product} 
                key={product.id}
                onIncreaseQuantity={props.onIncreaseQuantity}
                onDecreaseQuantity={props.onDecreaseQuantity}
                onDeleteProduct={props.onDeleteProduct}
                />
            })}
        </div>
    )
}

export default Cart;