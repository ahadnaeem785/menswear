"use client"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from "../productCard";
import { useAppSelector } from "@/store/hook";

export default function Crousal() {
    //data
    const products = useAppSelector((state)=>state.product)
    const crousalData = products.slice(1,8)
    //slide setting
    var settings = {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              arrows: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: true,
              arrows: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            }
          }
        ]
      };
  return (
    <div className='mb-[100px] mt-[100px]'>
        <h2 className="scroll-m-20 text-myBlakeHead pb-2 text-2xl uppercase text-center mb-10 font-bold tracking-tight first:mt-0">Best Season Pickup</h2>
     <Slider {...settings}>
        {crousalData.map((item)=>(
            <ProductCard key={item.id} slug={item.slug} src={item.image} shadow={false} category={item.category} title={item.title} price={item.price}/>
        ))
    }
        </Slider>
    </div>
  )
}
