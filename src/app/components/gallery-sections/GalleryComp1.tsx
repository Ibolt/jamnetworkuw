import Image from 'next/image';
import React from 'react';
import "../../../styles/components/gallery.css";


const GalleryComp1 = () => {
  return (
  <div>
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-1 md:col-span-1 row-span-1'>
          <Image
            src= '/media/gallery/pic1.jpg'
            alt='/'
            layout='responsive'
            width='677'
            height='451'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='/media/gallery/pic2.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full col-span-1 md:col-span-3 row-span-2'>
          <Image
            src='/media/gallery/pic3.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full col-span-2 md:col-span-1 row-span-3'>
          <Image
            src='/media/gallery/pic4.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full col-span-1 md:col-span- row-span-2'>
          <Image
            src='/media/gallery/pic5.jpg'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  </div>  
 
);
};

export default GalleryComp1;
