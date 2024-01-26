import React from "react";
import GalleryComp from "../components/gallery-sections/GalleryComp";
import GalleryComp1 from "../components/gallery-sections/GalleryComp1";

export default async function gallery() {
    return (
<div>
<div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
    <div className='absolute top-0 left-0 right-0 bottom-0 z-[2]'>
        <div className="p--min" style={{ fontWeight: 300}}>
          <h1 style={{zIndex: 1}}>The Jamnet Archives</h1>
        </div>  
    </div>
</div> 
<div>
  <GalleryComp/>
</div>
<div>

</div>
<div>
  <GalleryComp1/>
</div>  
</div>
)
}
