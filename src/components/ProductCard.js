import "./ProductCard.css";
import {useCart} from '../contexts/CartContext';
import {useState, useEffect} from 'react'

export const ProductCard = ({product}) => {
  const {id, name, price, image} = product;
  const {removeFromCart, addToCart, cartList} = useCart()
  const [isAdd, setIsAdd] =useState(false)

  useEffect(()=>{
    const isAdded= cartList.find(product=> product.id===id)
    if(isAdded){
      setIsAdd(true);
    }
    else{
      setIsAdd(false);
    }
  },[cartList, id])
  

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isAdd? (<button className="remove" onClick={()=>{removeFromCart(product)}}>Remove</button>) : (<button onClick={()=>{addToCart(product)}}>Add To Cart</button>)}
      </div>
    </div>
  )
}
