"use client"
import ProductCard from '@/components/productCard';
import { useAppSelector } from '@/store/hook';
import React from 'react'

export default function CategoryPage({ params }: { params: { category: string } }) {
    const products = useAppSelector((state) => state.product)
    const categoryFilter = products.filter((val) => val.category === params.category);
    // console.log(categoryFilter)
    // console.log(params)
    // console.log(products)
    return (
        <div>
            <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 lg:px-14 px-6'>
                {
                    categoryFilter.length > 0
                        ?
                        categoryFilter.map((item) => (
                            <ProductCard key={item.id} title={item.title} price={item.price} src={item.image} category={item.category}  slug={item.slug}/>
                        ))
                        :
                        <p>No Products Found</p>
                }
            </div>
        </div>
    )
}
