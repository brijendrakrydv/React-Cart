import React from "react";

const CartItem = (props)=> {
     const {title,price,qty}=props.product;
     const {product,
        increasefun,
        decreasefun,
        deletefun
        }=props;

        return(
            <div className="cart-item" style={{display: "inline-flex",
                marginTop: 30,marginBottom: 20, marginRight: 10, marginLeft: 29}}>
                <div className="left">
                    <img src={product.img} style={styles.image} />
                </div>
                <div className="right" style={{paddingTop:10 ,paddingBottom:10, paddingLeft:30, paddingRight: 20}}>
                    <div style={{ fontSize: 35 }}>{title}</div>
                    <div style={{ fontSize: 20, color: '#777'}}>Rs {price}</div>
                    <div style={{ fontSize: 20, color: '#777' }}>Qty: {qty}</div>
                    <div className="cart-actions" style={{marginTop: 15}}>
                        {/* Buttons */}
                        <img style={{ height: 20,width: 20, marginRight: 19,cursor:"pointer"}} alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
                        onClick={()=>increasefun(product)}
                        />
                        <img style={{ height: 20,width: 20, marginRight: 19}} alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1828/1828901.png"
                        onClick={()=>decreasefun(product)}
                       />
                        <img style={{ height: 20,width: 20, marginRight: 19}} alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/484/484611.png"

                        onClick={()=>deletefun(product.id)}
/>
                    </div>
                </div>
            </div>
        );  
    }


const styles={
    image:{
        height: 135,
        width: 135,
        borderRadius:4,
        background: '#6272'
    }
}

export default CartItem;