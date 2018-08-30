import React from 'react';

const Product = (props) => {
	console.log('product props', props)
	return (
		<div>
			<h4>
			  {props.product.productName}:  
			  <small>{props.product.productQuantity}</small>
		    </h4>
		</div>
	)
}

export default Product;