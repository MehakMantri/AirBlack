import React from 'react';
import Form from './Form';
import Image1 from '../assets/image1.png'; // Import your images
import Image2 from '../assets/image2.png';
import Image3 from '../assets/image3.png';
import Image4 from '../assets/image4.png';
import "../index.css";

const Header = () => {
  return (
    <div className="max-w-[375px] mx-auto bg-black text-white py-8 px-4 relative">
      <div className="max-w-4xl mx-auto relative">
        <div className="flex justify-between items-center relative">
          {/* Images */}
          <div className="flex">
            <img src={Image1} alt="Image 1" className="img1" style={{ width: "25%" }} />
            <img src={Image2} alt="Image 2" className="img2" style={{ width: "50%" }} />
            <img src={Image3} alt="Image 3" className="img3" style={{ width: "50%" }} />
            <img src={Image4} alt="Image 4" className="img4" style={{ width: "25%" }} />
          </div>
          {/* Logo */}
          <img src="path/to/your/logo.png" alt="Airblack Beauty Club" className="h-12 z-10 relative" />
        </div>
        <h1 className="text-3xl mt-4 header-title">Professional Online <br />Makeup Course</h1>
        <div className="flex items-center mt-4">
          <div className="certification-program">
            <span>Certification Program</span>
          </div>
        </div>
        <ul className="list-disc mt-4 pl-4">
          <li>India's No.1 Online Makeup Course</li>
          <li>Learn by LIVE Do-it-Together Classes</li>
          <li>Unlimited Practice Session to master skills</li>
        </ul>
      </div>
      <Form />
    </div>
  );
};

export default Header;
