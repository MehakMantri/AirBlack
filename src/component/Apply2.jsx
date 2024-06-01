import React from 'react';
import img1 from '../assets/image1.png';
import img2 from '../assets/image2.png';
import img3 from '../assets/image3.png';
import img4 from '../assets/image4.png';
import img5 from '../assets/image5.png';
import img6 from '../assets/image6.png';
import img7 from '../assets/image7.png';
import img8 from '../assets/image8.png';
import img9 from '../assets/image9.png';
import img10 from '../assets/image10.png';
import img11 from '../assets/image11.png';
import img12 from '../assets/image12.png';
const Apply2 = () => {
    return (
      <div className="apply">
        <div className="relative flex h-[125px] overflow-hidden">
        <img src={img1} alt="Image 1" className="absolute left-[-25%] w-[50%] h-full object-cover" />
        <img src={img2} alt="Image 2" className="w-1/2 h-full object-cover" />
        <img src={img3} alt="Image 3" className="w-1/2 h-full object-cover" />
        <img src={img4} alt="Image 4" className="absolute right-[-25%] w-[50%] h-full object-cover" />
        {/* Overlay for logo and text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 p-4">
          <div className="logo mb-4 flex flex-col items-center">            
          {/* <div className="apply-text">Why Should You 
Join Airblack?</div> */}
          </div>
        </div>
      </div>
      <div className="relative flex h-[125px] overflow-hidden">
        <img src={img5} alt="Image 5" className="absolute left-[-25%] w-[50%] h-full object-cover" />
        <img src={img6} alt="Image 6" className="w-1/2 h-full object-cover" />
        <img src={img7} alt="Image 7" className="w-1/2 h-full object-cover" />
        <img src={img8} alt="Image 8" className="absolute right-[-25%] w-[50%] h-full object-cover" />
        {/* Overlay for logo and text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 p-4">
          <div className="logo mb-4 flex flex-col items-center">
            {/* <img src="" alt="Airblack" className="w-12 mx-auto" />
            <p className="presents">PRESENTS</p> */}
          </div>
        </div>
      </div>
      <div className="relative flex h-[125px] overflow-hidden">
        <img src={img9} alt="Image 9" className="absolute left-[-25%] w-[50%] h-full object-cover" />
        <img src={img10} alt="Image 10" className="w-1/2 h-full object-cover" />
        <img src={img11} alt="Image 11" className="w-1/2 h-full object-cover" />
        <img src={img12} alt="Image 12" className="absolute right-[-25%] w-[50%] h-full object-cover" />
        {/* Overlay for logo and text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 p-4">
          {/* <button className='apply-button'>Apply Now</button> */}
        </div>
      </div>
      </div>
    )}
    export default Apply2;

