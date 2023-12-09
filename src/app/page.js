import React from "react";
import PaymentsIcon from '@mui/icons-material/Payments';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TimerIcon from '@mui/icons-material/Timer';
import GppGoodIcon from '@mui/icons-material/GppGood';
import { products, categorySlider, brnads } from "./data";
import onebanner from '../asstes/images/onebanner.jpg'
import onebanner2 from '../asstes/images/onebanner2.jpg'
import onebanner3 from '../asstes/images/onebanner3.jpg'
import onebanner4 from '../asstes/images/onebanner4.jpg'
// components
import VerticalBanner from "@/components/VerticalBanner";
import BrandSlider from "@/components/homeComponents/BrandSlider"
import ProductSlider from "@/components/ProductSlider";
import HomeSlider from "@/components/homeComponents/HomeSlider";
import HorizontalBanner from "@/components/HorizontalBanner";
import HomeInfoCard from "@/components/homeComponents/HomeInfoCard";
import verticalbanner from '../asstes/images/verticalbanner.png'

export default function Home() {
  return (
    <main className="pb-2 sm:pb-4">
      <HomeSlider/>
      <BrandSlider slidesPerView={9} spaceBetween={20} data={brnads} loop={true}/>
      <div className="container">


      <div className="grid grid-cols-2 sm:gap-1 gap-3 mb-sm-5 mb-3 sm:grid-cols-4 sm:mb-2">
        <HomeInfoCard icon={<PaymentsIcon/>} title='Money Guarantee' body='7 Days Back'/>
        <HomeInfoCard icon={<LocalShippingIcon/>} title='Fast Delivery' body='Start from $10'/>
        <HomeInfoCard icon={<TimerIcon/>} title='365 Days' body='For free return'/>
        <HomeInfoCard icon={<GppGoodIcon/>} title='Payment' body='Payment'/>
      </div>

       {/* product slider */}
       <ProductSlider slidesPerView={5} spaceBetween={20} data={products} loop={true} title="New Collections!" />

      {/* banner image */}
      <HorizontalBanner items={[onebanner, onebanner2, onebanner3, onebanner4]}/>

      {/* product slider */}
      <div className="product-slider-banner-section grid grid-cols-12 gap-3 mb-sm-5 mb-3">
        <div className="sm:col-span-3 col-span-12 hidden sm:block">
           <VerticalBanner items={verticalbanner}/>
        </div>
        <div className="sm:col-span-9 col-span-12">
          <ProductSlider  slidesPerView={4} spaceBetween={20} data={products} loop={true} title="New Year Collections" />
        </div>
      </div>
      
      {/* product slider */}
      <ProductSlider slidesPerView={5} spaceBetween={20} data={products} loop={true} title="The Best For You" />
    
      </div>

    </main>
  );
}
