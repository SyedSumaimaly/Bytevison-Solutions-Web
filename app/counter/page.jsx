import React from "react";
export default function Countdown(){
    return (
        <div className="countdown-container">
           <div className="countdown-values">
              <div className="countdown-value">
                <p className="big-text text-white">days</p>
                <span className="text-white">days</span>
              
              </div>

              <div className="countdown-value">
                <p className="big-text text-white">hours</p>
                <span className="text-white">hours</span>
              
              </div>

              <div className="countdown-value">
                <p className="big-text text-white">minutes</p>
                <span className="text-white">minutes</span>
              
              </div>

              <div className="countdown-value">
                <p className="big-text text-white">secnods</p>
                <span className="text-white">secnods</span>
              
              </div>
             
           
           </div>
          
        </div>
    );
}