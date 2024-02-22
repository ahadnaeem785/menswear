import Crousal from "@/components/view/crousal";
import Hero from "@/components/view/hero";
import Promotion from "@/components/view/promotion";
import Subcribe from "@/components/view/subcribe";
import TopProducts from "@/components/view/topProducts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mb-[100px] max-w-screen-2xl mx-auto lg:px-14 px-6">
      <Hero/>
      <Crousal/>
      <Promotion/>
      <TopProducts/>
      <Subcribe/>
    </div>
  );
}
