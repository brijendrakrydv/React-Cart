
import React from "react";
import CartItem from "./CartItem";

const Cart = (props)=>{
   const {products}=props;
        return(
            <div style={{display: "flex", flexDirection: "column"}}>
            {products.map((product)=>{
                return (
                    <CartItem
                    product={product}
                    key={product.id}
                        increasefun={props.increasefun}
                        decreasefun={props.decreasefun}
                        deletefun={props.deletefun}
                        />);})
                }
            </div>
        );     
    }

export default Cart;