import React from "react";
import certificate from "../assets/certificate.png"

const Certificate =()=>{
    return(
        <div className="certificate">
            <div className="certificate-content">
                <div className="certificate-text mt-25">Get Certified From <br />India’s Biggest <br />Beauty Platform</div>
                <div className="certificate-img">
                    <img src={certificate} alt="" />
                </div>
            </div>
        </div>
    )

}

export default Certificate;