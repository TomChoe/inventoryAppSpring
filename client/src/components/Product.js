import React from 'react';

const Product = (props) => {
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