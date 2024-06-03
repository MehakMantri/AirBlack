import React from 'react';
import logo from '../assets/logo.png';  // Uncomment and use the correct path to your logo
import img1 from '../assets/image1.png';
import img2 from '../assets/image2.png';
import img3 from '../assets/image3.png';
import img4 from '../assets/image4.png';
import { IoMdCheckmark } from "react-icons/io";
import Form from "./Form";
import Apply from "./Apply";
import Certificate from './Certificate';
import Apply2 from './Apply2';
import { IoStar } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";

const MakeupCourse = () => {
  return (
    <div className="relative w-[375px] mx-auto text-center shadow-lg text-white">
      {/* Background Images */}
      <div className="relative flex h-[125px] overflow-hidden">
        <img src={img1} alt="Image 1" className="absolute left-[-25%] w-[50%] h-full object-cover" />
        <img src={img2} alt="Image 2" className="w-1/2 h-full object-cover" />
        <img src={img3} alt="Image 3" className="w-1/2 h-full object-cover" />
        <img src={img4} alt="Image 4" className="absolute right-[-25%] w-[50%] h-full object-cover" />
        {/* Overlay for logo and text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 p-4">
          <div className="logo mb-4 flex flex-col items-center">
            <img src={logo} alt="logo" className="w-12 mx-auto" />
            <p className="presents">PRESENTS</p>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className='content'>
        <div className='prof'>
          <div className="prof1">Professional Online <br /> Makeup Course</div>
          <div className="prof2 ">
            <span className="prof3"> <FaBookmark className='mark text-white' />Certification Programme</span>
            <div className='flex items-center'><IoStar className='star' /><span className='prof4'>Rated 4.85/5</span></div>
            
          </div>
          <div className="prof5">
            <ul>
              <li className='prof6 flex'>
              <IoMdCheckmark className='p1' />
                India’s No.1 Online Makeup Course
              </li>
              <li className='prof6 flex'>
              <IoMdCheckmark className='p1'/>
                Learn by LIVE Do-it-Together Classes
              </li>
              <li className='prof6 flex'>
              <IoMdCheckmark className='p1'/>
                Unlimited Practise Session to master skills
              </li>
            </ul>
          </div>
        </div>
        <Form />
      </div>
      <Apply />
      <Certificate />
      <Apply2 />
    </div>
  );
};

export default MakeupCourse;
