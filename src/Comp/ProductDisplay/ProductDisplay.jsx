import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon_dull from '../Assets/star_dull_icon.png';
import star_icon from '../Assets/star_icon.png';
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext);
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-imglist">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon_dull} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-price">
                    <div className="productdisplay-right-price-old">₹{product.old_price}</div>
                    <div className="productdisplay-right-price-new">₹{product.new_price}</div>
                </div>

                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nulla sit magnam obcaecati, error quia totam quae voluptatem magni eligendi ullam ipsa mollitia, numquam praesentium.
                </div>

                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>Small</div>
                        <div>Medium</div>
                        <div>Large</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>

                <button onClick={()=> {addToCart(product.id)}} >Add to Cart</button>
                <p className="productdisplay-right-category">
                    <span>Category : </span> Womes, Tshirt, Crop-top
                </p>

                <p className="productdisplay-right-category">
                    <span>Tags : </span> Modern, Larest
                </p>
            </div>
        </div>
    );
};

export default ProductDisplay;
