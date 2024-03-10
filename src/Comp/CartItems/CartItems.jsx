import React, { useContext } from 'react';
import './CartItems.css';
// import all_product from '../Assets/all_product';
import { ShopContext } from '../../Context/ShopContext'; // Correct import statement
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItem, removeFromCart } = useContext(ShopContext);
    return (
        <div className="cartitems">
            <div className="cartitems-format-main ">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className="cartitem-producticon" />
                                <p>{e.name}</p>
                                <p>₹{e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItem[e.id]}x</button>
                                <p>{e.new_price * cartItem[e.id]}</p>
                                <img className="cartitems-removeicon" src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}

            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-items">
                            <p>Subtotal</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <h3>Total</h3>
                            <h3>₹{getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>
                        Proceed to Checkout
                    </button>
                </div>
                <div className="cartitems-promocode">
                    <p>if u have a promo code</p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder="Enter your promo code here" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
