import Image from 'next/image'
import React from 'react'

export default function Promotion() {
    return (
        <section className="text-gray-600 body-font mt-[100px] -mb-[100px]">
             <h2 className="scroll-m-20 text-myBlakeHead -mb-7 text-2xl uppercase text-center font-bold tracking-tight first:mt-0">Pieces you need right now</h2>
            <div className="container px-5 py-24  mx-auto flex flex-wrap">
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                alt="gallery"
                                className="w-full object-cover h-full object-center block"
                                src="/assets/promo1.avif" width={500} height={500}
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                alt="gallery"
                                className="w-full object-cover h-full object-center block"
                                src="/assets/promo2.avif" width={501} height={301}
                            />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <Image
                                alt="gallery"
                                className="w-full h-full object-cover object-center block"
                                src="/assets/promo4.avif" width={600} height={300}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <Image
                                alt="gallery"
                                className="w-full h-full object-cover object-center block"
                                src="/assets/promo3.avif" width={500} height={300}
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                alt="gallery"
                                className="w-full object-cover h-full object-center block"
                                src="/assets/promo5.avif" width={500} height={300}
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <Image
                                alt="gallery"
                                className="w-full object-cover h-full object-center block"
                                src="/assets/promo6.avif" width={500} height={300}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>


        // <section className='mb-[100px] mt-[100px] min-h-screen'>
        //     <div className='flex max-w-screen-md mx-auto gap-5'>
        //         {/* left */}
        //         <div className='basis-8/12'>
        //             <Image src={"/assets/p3.jpg"} alt='image' width={700} height={800} className=' object-cover'/>
        //         </div>
        //         {/* right */}
        //         <div className='basis-4/12'>
        //             <div className='flex flex-col gap-4'>
        //                 <Image src={"/assets/p4.jpg"} alt='image' width={250} height={250} className='flex-1 object-cover'/>
        //                 <Image src={"/assets/p5.jpg"} alt='image' width={250} height={200} className='flex-1 object-cover'/>
        //                 <Image src={"/assets/p6.jpg"} alt='image' width={250} height={200} className='flex-1 object-cover'/>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}
