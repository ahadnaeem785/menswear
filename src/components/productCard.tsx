import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

export default function ProductCard({ title, price, src, category,slug, shadow = true }: { title: string, price: number,slug:string, src: string | StaticImageData, category: string, shadow?: boolean }) {
    return (
        <Link href={`/${category}/${slug}`}>
            <div className={`px-4 py-3 hover:scale-105 duration-300 ${shadow && "shadow-lg "}`}>
                <div className='shrink-0'>
                    <Image src={src} alt={title} height={270} width={270} className='object-cover mx-auto rounded' />
                </div>
                <div className='pl-7 lg:pl-0'>
                    <h4 className="scroll-m-20  text-myBlakeHead mt-2 text-[15px] font-[550] tracking-tight">{title}</h4>
                    <p className="leading-7 text-rose-700  font-[530] text-[15px] mt-[2px]">${price}</p>
                    {/* ratings */}
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange" checked />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange/40" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange/40" />
                    </div>
                </div>
            </div>
        </Link>
    )
}
