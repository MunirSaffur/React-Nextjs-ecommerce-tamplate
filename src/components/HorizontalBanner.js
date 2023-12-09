import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HorizontalBanner({items}) {
  return (
    <div className='mb-sm-5 mb-3'>
    {
        items.length === 1 ?
        <div className='horizontal-banner'>
            <Link href='/category/apple'>
                <Image src={items[0]} alt="image"/>
            </Link>
        </div> :
        <div className='grid sm:grid-cols-12 gap-3'>
            <div className='horizontal-banner col-span-12 sm:col-span-8'>
                <Link href='/category/apple'>
                    <Image src={items[0]} alt="image"/>
                </Link>
            </div>
            <div className='horizontal-banner col-span-12 sm:col-span-4'>
                <Link href='/category/apple'>
                    <Image src={items[1]} alt="image"/>
                </Link>
            </div>
            <div className='horizontal-banner col-span-12 sm:col-span-4'>
                <Link href='/category/apple'>
                    <Image src={items[2]} alt="image"/>
                </Link>
            </div>
            <div className='horizontal-banner col-span-12 sm:col-span-8'>
                <Link href='/category/apple'>
                    <Image src={items[3]} alt="image"/>
                </Link>
            </div>
        </div>
    }
    </div>
   
  )
}
