"use client"
import { useAppSelector } from '@/store/hook';
import { NavLinks } from './navlink'
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
    const cart = useAppSelector((state) => state.cart);
    return (
        <div className="navbar sticky top-0 z-10 bg-mywhite max-w-screen-2xl lg:px-14 px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden lg:pl-3" >
                        <GiHamburgerMenu className='h-5 w-5' />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-myBlakeHead font-medium">
                        <li><Link href={"/"}>Home</Link ></li>
                        <li>
                            <h4>Men</h4>
                            <ul className="p-2">
                                <li><Link href={"/pants"}>Pants</Link ></li>
                                <li><Link href={"/shirts"}>Shirts</Link ></li>
                                <li><Link href={"/shoes"}>Shoes</Link ></li>
                                <li><Link href={"/hoodie"}>Hoodies</Link ></li>
                            </ul>
                        </li>
                        <li><Link href={"/about"}>About</Link ></li>
                        <li><Link href={"/contact"}>Contact</Link ></li>
                    </ul>
                </div>
                <a className="font-bold uppercase text-xl hidden lg:block">Mens <span className='text-rose-700'>Wear</span></a>
            </div>
            <div className="navbar-center ">
                <a className=" font-bold uppercase text-xl block lg:hidden ">Mens Wear</a>
                <div className='hidden lg:flex border-none outline-none'>
                    <NavLinks />
                </div>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <Link href={"/cart"}>
                        <div tabIndex={0} role="button" className=" mt-3 group">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.45rem] w-[1.45rem] " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                {cart.length > 0 &&
                                    <span className="badge badge-sm indicator-item text-black border font-semibold border-gray-100 group-hover:text-mywhite group-hover:bg-myBlakeHead">{cart.length}</span>}

                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
