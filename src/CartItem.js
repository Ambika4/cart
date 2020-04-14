import React from 'react';

class CartItem extends React.Component{
  
    //arrow function keep the reference of the object 
    increaseQuantity=()=>{
        console.log("this",this.state);
        //setState form 1
        //setState is a function from Component (react)
        // this.setState({
        //     qty:this.state.qty+1
        // });

        //setState form 2
        //In this we are using function calling instead of object unlike first one
        //if previous form required used this one
        this.setState((prevState)=>{
          return {
              qty:prevState.qty+1
            }  
        });
    }
    decreaseQuantity=()=>{
        //disstruturing
        const{qty}=this.state;
        
        if(qty===0){
            return ;
        }
        //set state is asyncronous function
        this.setState((prevState)=>{
            return{
                qty:prevState.qty-1
            }
        });
    }
    
    render(){
        //object disstructuring
        console.log('this.props',this.props);
        const{price,title,qty}=this.props.product;
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
                onClick={this.increaseQuantity}
            />

            <img
                alt="decrease" 
                className="action-icons" 
                src="https://as2.ftcdn.net/jpg/03/23/33/19/500_F_323331925_VvJaAQ5sZz8VoEn5qDYGkB7Wu4O80zKL.jpg"
                onClick={this.decreaseQuantity}
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