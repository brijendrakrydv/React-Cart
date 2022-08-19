import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import './index.css';

class App extends React.Component {

  constructor(){
    super();
    this.state={
        products:[
        {
        title: "Phone",
        price: 9999,
        qty: 1,
        id:1,
        img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"

        },
        {
        title: "Watch",
        price: 999,
        qty: 1,
        id:2,
        img:"https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80"
        },
        {
        title: "Laptop",
        price: 99900,
        qty: 1,
        id:3,
        img:"https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    }]}
}

handelincrease= (product)=>{
   
    const { products }=this.state;
    const index= products.indexOf(product);
    products[index].qty+=1;

    this.setState({
        products:products
    })
}

handeldecrease= (product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty===0)
    return;
    products[index].qty-=1;

    this.setState({
        products:products
    })
}

handledelete = (id) => {
    const {products}=this.state;
    const items= products.filter((item) => item.id!==id);

    this.setState({
        products:items
    })
}

getcartcount= ()=>{
   const {products}=this.state;
   let count=0;
   products.forEach((product) => {
    count+=product.qty;
   })
   return count;
}

getTotal= ()=>{
  const {products}=this.state;
  let total=0;
  products.forEach((product)=>{
    total+=product.price*product.qty;
  })
  return total;
}

  render() {
    const {products}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getcartcount()}/>
      <Cart products={products}
      increasefun={this.handelincrease}
      decreasefun={this.handeldecrease}
      deletefun={this.handledelete} />

      <div style={styles.footer}>Total: {this.getTotal()}</div>
    </div>
  );
}
}

const styles={
  footer:{
    height: 20,
    background: '#5312',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex',
    padding: 20,
    fontSize:20
    
}
}

export default App;
