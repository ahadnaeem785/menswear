import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function Subcribe() {
    return (
        <div className="mb-[150px] mt-[150px] px-8 lg:px-20">
            <div className='flex flex-col flex-wrap  justify-center items-center relative z-10'>
                <h2 className="scroll-m-20 text-myBlakeHead text-center mt-2 pb-2 text-4xl font-bold tracking-tight first:mt-0">
                    Subscribe Our <span className='text-rose-700'>Newsletter</span>
                </h2>
                <p className="leading-7 [&:not(:first-child)]:mt-3 text-base  text-center">Get the latest information and promo offers directly</p>
                {/* button */}
                <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 mt-3 lg:mt-6 w-[80%] lg:w-full max-w-sm items-center space-x-2">
                    <Input type="email" placeholder="Input email address" />
                    <Button type="submit" className='h-9 px-6 font-medium bg-myBlakeHead hover:bg-myBlakeHead text-rose-500'>Get Started</Button>
                </div>
                <h1 className='absolute text-gray-300/50  mt-6 lg:-mt-3 text-6xl lg:text-[120px] -z-10 font-bold'>
                    Newsletter
                </h1>

            </div>
        </div>
    )
}