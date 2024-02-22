import React from 'react'

export default function Hero() {
    return (
        <section
            className="relative custom-image bg-cover bg-center bg-no-repeat">
            <div
                className="absolute "
            ></div>

            <div
                className="relative max-w-xl px-4 py-32 sm:px-6 lg:flex lg:justify-start lg:h-screen lg:items-start lg:px-8"
            >
                <div className="text-center lg:text-left">

                    <h1 className="text-3xl lg:mt-10  text-mywhite font-extrabold  ">
                        Let us find your

                        <strong className="block font-extrabold text-rose-700"> Forever Home. </strong>
                    </h1>

                    <p className="mt-3  sm:text-xl/relaxed text-mywhite">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                        numquam ea!
                    </p>

                    <div className="mt-5 gap-4 sm:mx-auto  ">
                        <button className="outline max-w-[8rem] outline-offset-1 outline-1 outline-gray-400 hover:outline-rose-700 hover:scale-95 hover:text-rose-600 w-full rounded-xl bg-myBlakeHead px-7 py-2 text-sm font-medium text-white shadow hover:bg-myBlakeHead ">Shop Now</button>
                    </div>
                </div>
            </div>

        </section>
    )
}
