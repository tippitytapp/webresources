import React from "react";
import banner from "../../assets/homepage_banner_img_sm.jpg"
export default function Navigation(){
    return (
        <><div className="navigation-bar">
            <div className="title">Marc Tapp</div>
        </div>
        <img className="legendary_pic" src={banner} alt=""/>
        </>    
        )
}