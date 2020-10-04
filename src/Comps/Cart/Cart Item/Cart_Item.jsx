import React, { useState } from 'react';

function Cart_Item(props) {
  const [quantity, setQuantity] = useState(props.quantity)
  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }
  const reduceQuantity = () => {
    if(quantity > 1){
      setQuantity(quantity - 1)
    }
  }
    return (
        <tr>
            <td>
                <div className="media">
                    <div className="d-flex">
                        <img src="img/cart.jpg" alt="" />
                    </div>
                    <div className="media-body">
                        <p>{props.name}</p>
                    </div>
                </div>
            </td>
            <td>
                <h5>{props.price}₫</h5>
            </td>
            <td>
                <div className="product_count">
                    <input type="text" name="qty" id="sst" maxLength={12} value={quantity} title="Quantity:" className="input-text qty"></input>
                    <button onClick={() => increaseQuantity()} className="increase items-count" type="button"><i className="lnr lnr-chevron-up" /></button>
                    <button onClick={() => reduceQuantity()} className="reduced items-count" type="button"><i className="lnr lnr-chevron-down" /></button>
                </div>
            </td>
            <td>
                <h5>{props.price * quantity}₫</h5>
            </td>
        </tr>
    );
}

export default Cart_Item;