import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component{
  constructor(){
    super();
    this.state={
        products:[
        {
            price:999,
            title:'Phone',
            qty:1.,
            img:'',
            id:1
            
            //to bind the "this" to increaseQuantity function
            //this.increaseQuantity=this.increaseQuantity.bind(this);
        },
        {
            price:999,
            title:'Watch',
            qty:1.,
            img:'',
            id:2
            //to bind the "this" to increaseQuantity function
            //this.increaseQuantity=this.increaseQuantity.bind(this);
        },
        {
            price:2000,
            title:'Fitbit',
            qty:1.,
            img:'',
            id:3
            
            //to bind the "this" to increaseQuantity function
            //this.increaseQuantity=this.increaseQuantity.bind(this);
        }
        ]
    }
    //to bind the "this" to increaseQuantity function
    //this.increaseQuantity=this.increaseQuantity.bind(this);

}
handleIncreaseQuantity=(product)=>{
    console.log('hey increase');
    const{products}=this.state;
    const index=products.indexOf(product);
    
    products[index].qty+=1;

    this.setState({
        products:products
    })
}
handleDecreaseQuantity=(product)=>{
    console.log('hey decrease');
    const{products}=this.state;
    const index=products.indexOf(product);
    
    if (products[index].qty===0)
    {
        return;
    }
    
    products[index].qty-=1;

    this.setState({
        products:products
    })
}
handleDeleteProduct=(id)=>{
    const {products}=this.state;
    const items=products.filter((item)=>item.id !==id);

    this.setState({
        products:items
    })

}

getCartCount=()=>{
  const {products}=this.state;
  
  let count=0;

  products.forEach((product)=>{
    count+=product.qty;
  })
  console.log(count);
  return count;
}


  render(){
    const {products}=this.state;
    return (
      <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct}
      />
      </div>
    );
  }
}

export default App;
