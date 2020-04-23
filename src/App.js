import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class App extends React.Component{
  constructor(){
    super();
    this.state={
        products:[],
        loading:true
    }
    this.db=firebase.firestore();
    //to bind the "this" to increaseQuantity function
    //this.increaseQuantity=this.increaseQuantity.bind(this);

}

componentDidMount(){
//   firebase
//     .firestore()
//     .collection('products')
//     .get()
    // .then((snapshot)=>{
    //   console.log(snapshot);

    //   snapshot.docs.map((doc)=>{
    //     console.log(doc.data());
    //     return '';
    //   });

    //   const products=snapshot.docs.map((doc)=>{
    //     const data =doc.data();

    //     data['id']=doc.id;
    //     return data;
    //   })
    //   this.setState({
    //     products,
    //     loading:false
    //   })
    // })
      this.db
      .collection('products')
      //Evenlister whenever something is changed then it will update automatically
      .onSnapshot((snapshot)=>{
        console.log(snapshot);
  
        snapshot.docs.map((doc)=>{
          console.log(doc.data());
          return '';
        });
  
        const products=snapshot.docs.map((doc)=>{
          const data =doc.data();
  
          data['id']=doc.id;
          return data;
        })
        this.setState({
          products,
          loading:false
        })
      })
}
handleIncreaseQuantity=(product)=>{
    console.log('hey increase');
    const{products}=this.state;
    const index=products.indexOf(product);
    
    // products[index].qty+=1;

    // this.setState({
    //     products:products
    // })

    const docRef=this.db.collection('products').doc(products[index].id);

    docRef
      .update({
        qty:products[index].qty+1
      })
      .then(()=>{
        console.log('Updated sucessfully')
      })
      .catch((error)=>{
        console.log('Error:',error);
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
    
    // products[index].qty-=1;

    // this.setState({
    //     products:products
    // })

    const docRef=this.db.collection('products').doc(products[index].id)

    docRef
    .update({
      qty:products[index].qty-1
    })
    .then(()=>{
      console.log('Updated sucessfully')
    })
    .catch((error)=>{
      console.log('Error:',error);
    })
}
handleDeleteProduct=(id)=>{
    const {products}=this.state;
    // const items=products.filter((item)=>item.id !==id);

    // this.setState({
    //     products:items
    // })

    const docRef=this.db.collection('products').doc(id);

    docRef
    .delete()
    .then(()=>{
      console.log("deleted sucessfully");
    })

}

getCartCount=()=>{
  const {products}=this.state;
  
  let count=0;

  products.forEach((product)=>{
    count+=product.qty;
  })
 // console.log(count);
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
addProduct=()=>{
  this.db
    .collection('products')
    .add({
      img:'',
      price:900,
      qty:1,
      title:'TV'
    })
    .then((docRef)=>{
      console.log('New product added successfully',docRef);

    })
    .catch((error)=>{
      console.log('Error:',error);
    })
}
  render(){
    const {products,loading}=this.state;
    return (
      <div className="App">
      <Navbar count={this.getCartCount()}/>
      {/* <button onClick={this.addProduct} style={{padding:20,fontSize:20}}>Add a product</button> */}
      <Cart
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct}
      />
      {loading && <h1>Loading products</h1>}
      <div style={{padding:10,fontSize:20}}>ToTAL:{this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
