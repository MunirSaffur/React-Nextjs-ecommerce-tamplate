"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Rating, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";
// redux
import { useDispatch, useSelector } from "react-redux";
import { handleCartData } from "../app/globalRedux/features/CartSlice";
import Link from "next/link";

export default function ProductSlider({
  title,
  loop,
  data,
  spaceBetween,
  slidesPerView,
}) {
  const dispatch = useDispatch();

  const handleAddToCart = (e, item) => {
    e.preventDefault();
    dispatch(handleCartData(item));
  };
  return (
    <div className="mb-sm-5 mb-3">
      {title.length ? (
        <div className="text-center section-title">
          <h3>{title}</h3>
          <span>New Collections</span>
        </div>
      ) : (
        <div></div>
      )}
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={loop}
        autoplay={{
          delay: 14000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          340: {
            slidesPerView: 1.7,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: slidesPerView,
            spaceBetween: spaceBetween,
          },
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="product-slider p-2"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Link href={"/product/" + item.id}>
              <div className="product-slider-card">
                {item.favorite ? (
                  <FavoriteIcon className="product-card-fav-icon" />
                ) : (
                  <FavoriteBorderIcon className="product-card-fav-icon" />
                )}
                <Image src={item.image} width={200} height={300} alt="image" />
                <div className="product-slider-card-details">
                  <h5 className="mb-1 text-base">{item.title}</h5>
                  <div className="product-slider-card-rating flex">
                    <Rating
                      name="half-rating-read"
                      value={item.rating}
                      readOnly
                      size="small"
                    />
                    <p className="mb-1">({item.rating})</p>
                  </div>
                  <p className="price mb-1">${item.price}</p>
                  {item.variant.color.map((color, index) => (
                    <span
                      className="color-varient-card me-1"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                  <Button
                    variant="outlined"
                    className="w-100 product-slider-add-to-cart mt-3"
                    onClick={(e) => {
                      handleAddToCart(e, item);
                    }}
                  >
                    <LocalMallIcon className="me-2"/>
                    Add To Cart
                  </Button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
