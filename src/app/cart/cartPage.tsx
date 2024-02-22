"use client"
import CartItemCard from '@/components/cartItemCard'
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/store/hook';
import React from 'react'

export default function CartPage() {
    const cartArray = useAppSelector((state)=>state.cart);
    const total = cartArray.reduce((total, arr) => { return (total + ((arr.price) * arr.qty)) }, 0)
    const totalQuantity = cartArray.reduce((total, arr) => { return (total + arr.qty) }, 0)
    // console.log(carts)
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 '>
    {/* cart items */}
    <div className='col-span-2 '>
        <CartItemCard  />
    </div>
    {/* order summary */}
    <div className='max-w-sm lg:ml-6 mt-6 lg:mt-0'>
        <div className='bg-gray-300/90 border border-rose-600 p-5 rounded-xl col-span-1 shadow-md shadow-gray-200'>
            <h4 className='text-base font-bold'>Order Summary</h4>
            <div>
                <div className='flex justify-between mt-6'>
                    <p className='text-sm capitalize font-medium'>Quantity</p>
                    <p className='text-sm capitalize font-semibold'><span className='text-red-700'>{totalQuantity}</span> Product</p>
                </div>
                <div className='flex justify-between mt-5'>
                    <p className='text-sm capitalize font-medium'>Sub total</p>
                    <p className='text-sm capitalize font-semibold' ><span className='text-red-700'>$</span>{total}</p>
                </div>
                <div className='mt-1'>
                    <Button type="submit" className='h-9 rounded-md bg-myBlakeHead hover:bg-myBlakeHead hover:text-red-500 duration-150 text-xs mt-5 px-7 text-mywhite font-medium w-full'>Procceed to checkout</Button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
