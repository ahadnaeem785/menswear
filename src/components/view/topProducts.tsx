"use client"
import ProductCard from '../productCard'
import { useAppSelector } from '@/store/hook'


export default function TopProducts() {
  const product = useAppSelector((state)=>state.product);
  const productsChunks = product.slice(0,10)
  return (
    <div className='mt-[100px]' id="shop">
      {/* heading */}
      <div className='text-center'>
        <h2 className="scroll-m-20 text-myBlakeHead pb-2 text-2xl font-bold tracking-tight first:mt-0">SHOP BY BRAND</h2>
        <h3 className="scroll-m-20 text-xl text-myBlackPara font-bold tracking-tight">Explore the best of our top brands – yours to discover and own.
        </h3>
      </div>
      {/* products starts */}
      <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3'>
        {
          productsChunks.map((item)=>(
            <ProductCard key={item.id} src={item.image} slug={item.slug} category={item.category} title={item.title} price={item.price}/>
          ))
        }
      </div>
    </div>
  )
}
