//all components in apps folder are server-side rendered so you cant interact with them on client side like click
import React from 'react'
import AddtoCart from './AddtoCart'

//only the button need to be clicked
const ProductCard = () => {
  return (
    <div>
        <AddtoCart />
    </div>
  )
}

export default ProductCard