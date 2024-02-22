"use client"
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { addcart,delItem, subCart } from "@/store/slice/cart";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";


export default function CartItemCard() {
    const cartItem = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    return (
        <>
            {
                cartItem.length >= 1 &&
                cartItem.map((item, i) => (
                    <div className="flex flex-col lg:flex-row px-6 pb-6 " key={i}>
                        {/* image */}
                        <Image src={item.image} alt={item.title} width={140} height={140} className="object-cover rounded shadow" />
                        <div className="flex lg:px-7 mt-3 lg:mt-0 justify-between items-center w-full">
                            {/* some info */}
                            <div>
                                {/* title */}
                                <h3 className="font-semibold  text-lg leading-none text-gray-900">{item.title}</h3>
                                {/* delivery estimation */}
                                <h4 className="text-[15px] tracking-tight text-gray-800 mt-1 lg:mt-2 font-semibold capitalize">Delivery Estimation</h4>
                                <p className="text-rose-600/90 font-bold text-[15px] mt-1 lg:mt-2">5 Working Days</p>
                                {/* price */}
                                <h4 className="text-gray-900 font-bold text-base mt-1 lg:mt-2">${item.price}</h4>
                            </div>
                            {/* buttons */}
                            <div className="flex flex-col  items-end">
                                <RiDeleteBin6Line onClick={() => dispatch(delItem(item.uuid))} className="w-6 h-6 mb-20 cursor-pointer text-rose-600" />
                                <div className='flex items-center gap-3'>
                                    {/* minus */}
                                    <button
                                        onClick={() =>dispatch(subCart(item))}
                                        className='h-6 w-6 text-xl rounded-full border bg-myBlackPara/30  text-rose-600 flex justify-center items-center'>
                                        -
                                    </button>
                                    {/* number */}
                                    <span className='text-[15px] font-medium'>{item.qty}</span>
                                    {/* plus */}
                                    <button
                                        onClick={() => dispatch(addcart(item))}
                                        className='h-6 w-6 text-xl rounded-full border bg-myBlackPara/30  text-rose-600 flex justify-center items-center'>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
