"use client";
import React from "react";
import {Rating, Button} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Image from 'next/image'
import Link from "next/link";

export default function ProductCard({data}) {

  return (
   <Link href={"/product/" + data.id}>
     <div className="product-slider-card">
      {data.favorite ? 
        <FavoriteIcon className="product-card-fav-icon"/>
       : 
        <FavoriteBorderIcon className="product-card-fav-icon" />
      }
      <Image src={data.image} width={200} height={300} />
      <div className="product-slider-card-details p-2 pt-0">
        <h5 className="mb-1 text-base">{data.title}</h5>
        <div className="product-slider-card-rating flex">
          <Rating
            name="half-rating-read"
            value={data.rating}
            readOnly
            size="small"
          />
          <p className="mb-1">({data.rating})</p>
        </div>
        <p className="price mb-3">${data.price}</p>
      </div>
    </div>
   </Link>
  );
}
