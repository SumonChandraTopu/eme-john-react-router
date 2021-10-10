import React from 'react';

const ReviewItem = (props) => {
    const { name, key, quantity, price} = props.product
    const { handleRemove} = props;
    return (
        <div className="product">
            <div>
                <h3 className="product-name">{name}</h3>
                <p>Price: {price}</p>
                <p>{quantity}</p>
                <button onClick={ () => handleRemove(key)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;