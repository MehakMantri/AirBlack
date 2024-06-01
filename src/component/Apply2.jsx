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
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Apply2 = () => {
  return (
    <div className="relative apply2">
      <div className="grid grid-cols-4 overflow-hidden">
        {/* First Row */}
        <div className="col-span-1">
          <img src={img1} alt="Image 1" className="w-full object-cover" />
        </div>
        <div className="col-span-1">
          <img src={img2} alt="Image 2" className="w-full object-cover" />
        </div>
        <div className="col-span-1">
          <img src={img3} alt="Image 3" className="w-full object-cover" />
        </div>
        <div className="col-span-1">
          <img src={img4} alt="Image 4" className="w-full object-cover" />
        </div>
        {/* Second Row */}
        <div className="col-span-1">
          <img src={img5} alt="Image 5" className="w-full object-cover" />
        </div>
        <div className="col-span-1">
          <img src={img6} alt="Image 6" className="w-full object-cover" />
        </div>
        <div className="col-span-1">
          <img src={img7} alt="Image 7" className="w-full object-cover" />
        </div>
        <div className="col-span-1">
          <img src={img8} alt="Image 8" className="w-full object-cover" />
        </div>
        {/* Third Row */}
        <div className="col-span-1">
          <img src={img9} alt="Image 9" className="w-full object-cover" />
        </div>
        <div className="col-span-1">
          <img src={img10} alt="Image 10" className="w-full object-cover" />
        </div>
        <div className="col-span-1">
          <img src={img11} alt="Image 11" className="w-full object-cover" />
        </div>
        <div className="col-span-1">
          <img src={img12} alt="Image 12" className="w-full object-cover" />
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center bg-black bg-opacity-80 text-white">
        <div className="">
          <div className="apply2-text">Join our growing <br />community of <br />35,000+ alumni</div>
          <div className='apply2-button'>
            <button>Apply Now</button>
          </div>
           <div className="social-icons ">
            <FaInstagram className="sicons text-pink-500" />
            <FaFacebook className="sicons text-blue-600" />
            <FaLinkedin className="sicons text-blue-800" />
            <FaTwitter className="sicons text-blue-400" />
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Apply2;