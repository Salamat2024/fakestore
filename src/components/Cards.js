import React, { useState,useEffect } from 'react'
import Card from './Card'
import axios from 'axios'

const Cards = ({ isDark, setNum, search }) => {
    const [products, setProducts] = useState([])
   

   useEffect (() => {
    axios("https://fakestoreapi.com/products")
    .then(({ data }) => setProducts(data))
   },[]) 
   
   console.log(products);

    return (
        <>
            <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]" style={{ background: isDark ? "gray" : "#F3F4F6" }} >
                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        {
                            products.map((el) => (
                              <Card product = {el} search = {search}/>
                            ))
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default Cards
