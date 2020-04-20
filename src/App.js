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
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCAikW81gQQSaw9zDy-cGPv-POYp_z69NcebEeLrS97RP08-wI&usqp=CAU',
            id:1
            
            //to bind the "this" to increaseQuantity function
            //this.increaseQuantity=this.increaseQuantity.bind(this);
        },
        {
            price:999,
            title:'Watch',
            qty:1.,
            img:'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            id:2
            //to bind the "this" to increaseQuantity function
            //this.increaseQuantity=this.increaseQuantity.bind(this);
        },
        {
            price:2000,
            title:'Fitbit',
            qty:1.,
            img:'https://images-na.ssl-images-amazon.com/images/I/71YGrhhoqUL._AC_UX569_.jpg',
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

  products.map((product)=>{
    count+=product.qty;
  })
  console.log(count);
  return count;
}

getCartTotal=()=>{
  const {products}=this.state;

  let total=0;
  products.forEach((product)=>{
    total+=product.qty*product.price;
  })
  return total;
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
      <div style={{padding:10,fontSize:20}}>ToTAL:{this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
