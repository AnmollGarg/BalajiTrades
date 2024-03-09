import React from 'react'
import Hero from '../Comp/Hero/Hero'
import Popular from '../Comp/Popular/Popular'
import Offers from '../Comp/Offers/Offers'
import NewCollections from '../Comp/NewCollections/NewCollections'
import Newsletter from '../Comp/Newsletter/Newsletter'
export const Shop = () => {
  return (
    <div><Hero/>
    <Popular/>
    <Offers/>
    <NewCollections/>
    <Newsletter/>
    </div>
  )
}

export default Shop;
