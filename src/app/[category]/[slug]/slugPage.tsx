"use client"
import { useAppDispatch, useAppSelector } from '@/store/hook'
import { addToCart } from '@/store/slice/cart';
import Image from 'next/image';
import { useState } from 'react';



export default function SlugPage({ params }: { params: { slug: string } }) {
    const products = useAppSelector((state) => state.product)
    const slug = products.filter((val) => val.slug == params.slug)
    const dispatch = useAppDispatch();
    // console.log(params)
    // console.log(products)
    // console.log(dataById),

    const [cartItem, setCartItem] = useState({
        id: slug[0].id,
        title: slug[0].title,
        image: slug[0].image,
        slug: slug[0].slug,
        price: slug[0].price,
        category: slug[0].category,
        qty: slug[0].qty,
        size: slug[0].size[0]
    })
    console.log(cartItem)
    return (
        <div>
            <div className='flex flex-col lg:flex-row justify-center items-center mt-10'>
                {
                    slug.map((item) => (
                        <div key={item.id} className='flex flex-col lg:flex-row justify-center lg:justify-between lg:gap-16' >
                            {/* image div*/}
                            <div className='border border-myBlakeHead/20'>
                                <Image src={item.image} alt={item.title} height={450} width={450} className='h-[500px] w-[500px] shadow-xl rounded' />
                            </div>
                            {/* content div */}
                            <div>
                                {/* title */}
                                <div className='mt-10'>
                                    <h1 className='scroll-m-20  pb-2 text-[28px] font-semibold tracking-tight first:mt-0"'>{item.title}</h1>
                                </div >
                                {/* ratings */}
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange" checked />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange" />
                                </div>
                                {/* sizes */}
                                <div className='mt-5'>
                                    <h4 className='text-xs font-semibold uppercase'>Select Size</h4>
                                    {/* variants */}
                                    <div className='flex gap-x-4 mt-1'>
                                        {
                                            item.size.map((items: any, i: any) => (
                                                <button
                                                    onClick={() => setCartItem({ ...cartItem, size:items })}
                                                    key={i} className='flex h-7 w-7 focus:border-myBlakeHead border bg-myBlackPara/30 rounded-full hover:shadow-2xl mt-2 justify-center items-center'>
                                                    <span className='text-xs font-semibold text-center text-rose-600'>{items}</span>
                                                </button>
                                            ))
                                        }
                                    </div>
                                </div>
                                {/* Quantity */}
                                <div className='mt-6 flex gap-5 border-b pb-4'>
                                    <h3 className='text-[13px] font-bold flex items-center'>Quantity:</h3>
                                    <div className='flex items-center gap-3'>
                                        {/* minus */}
                                        <button
                                            onClick={() => setCartItem({ ...cartItem, qty: cartItem.qty <= 1 ? 1 : --cartItem.qty, })}
                                            className='h-6 w-6 text-xl rounded-full border bg-myBlackPara/30  text-rose-600 flex justify-center items-center'>
                                            -
                                        </button>
                                        {/* number */}
                                        <span className='text-[15px] font-medium'>{cartItem.qty}</span>
                                        {/* plus */}
                                        <button
                                            onClick={() => setCartItem({ ...cartItem, qty: ++cartItem.qty })}
                                            className='h-6 w-6 text-xl rounded-full border bg-myBlackPara/30  text-rose-600 flex justify-center items-center'>
                                            +
                                        </button>
                                    </div>
                                </div>
                                {/* add to cart */}
                                <div className='mt-6 flex items-center gap-3'>
                                    <button 
                                    onClick={()=>dispatch(addToCart(cartItem))}
                                    className='px-8 font-medium  py-2 rounded-xl hover:bg-myBlakeHead bg-myBlackPara text-white text-sm hover:text-rose-600'>Add Cart</button>
                                    <h2 className='text-2xl font-bold text-rose-600'>${(cartItem.price) * cartItem.qty}</h2>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
