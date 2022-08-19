import React from "react";

const Navbar= (props)=>{
        return(
            
            <div style={styles.nav}>
                   <h1 style={{marginRight: 1000}}> Shopping Cart</h1>
                <div style={styles.cartIconContainer}>
                 
                    <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="icon"  />
                    <span style={styles.cartcount}>{props.count}</span>
                </div>
            </div>
        );
    }
    
const styles={
    cartIcon:{
        height: 32,
        marginRight: 40,
        marginTop:10
    },
    nav:{
        height: 70,
        background: '#4267b2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    cartIconContainer:{
        position: 'relative'
    },

    cartcount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 20,
        top: -9

    }



}
export default Navbar;