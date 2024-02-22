// "use client"
// import { useAppDispatch, useAppSelector } from '@/store/hook'
// import { addItem } from '@/store/slice/cart'
// import { useState } from 'react'

// export default function Quantity() {
//   const carts = useAppSelector((state) => state.cart)
//   const dispatch = useAppDispatch()

//   return (
//     <>
//       {/* {carts.map((item, i) => (
//         <div className='flex items-center gap-3' key={i}>
//           {/* minus */}
//           <button
//             onClick={() => { }}
//             className='h-6 w-6 text-xl rounded-full border bg-myBlackPara/30  text-rose-600 flex justify-center items-center'>
//             -
//           </button>
//           {/* number */}
//           <span className='text-[15px] font-medium'>{item.qty}</span>
//           {/* plus */}
//           <button
//             onClick={() => dispatch(addItem(item))}
//             className='h-6 w-6 text-xl rounded-full border bg-myBlackPara/30  text-rose-600 flex justify-center items-center'>
//             +
//           </button>
//         </div>
//       ))
//       } */}
//     </>
//   )
// }

