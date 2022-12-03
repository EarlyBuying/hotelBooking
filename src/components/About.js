import React from "react";
import  "../About.css";

function About() {
  return (
    <div >
      <div className="main-about">
        <h1>Romaka</h1>
        <h2>HOTEL & RESORTS</h2>
        <p className="intro">Let us introduce ourselves</p>
      </div>
      <div>
       <p className="topic">We are Romaka</p>
       <div className="sideimg"></div>
       <p className="para">We started our journey drawing 
       inspiration from our country’s most valuable spice,
        Romaka. Just like its pleasant <br/>flavour and warm aroma,
         we infuse a rejuvenating spirit into every experience the 
         world discovers with us.</p>

      </div>
    </div>
  );
}

export default About;
