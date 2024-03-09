import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'        
import { useParams } from 'react-router-dom'
import Breadcrum from '../Comp/Breadcrumbs/Breadcrum';
import ProductDisplay from  '../Comp/ProductDisplay/ProductDisplay';
import DescBox from '../Comp/DescBox/DescBox';
import RelatedProducts from '../Comp/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productID}=useParams();
  const product=all_product.find((e)=>e.id===Number(productID))

  return (
    <div><Breadcrum product={product}/>
    <ProductDisplay product={product} />
    <DescBox />
    <RelatedProducts/>

    {/* <ProductDisplay  product={product}/> */}
    </div>
    
  )
}

export default Product;