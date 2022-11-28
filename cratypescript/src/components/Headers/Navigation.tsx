import React from "react";
import banner from "../../assets/homepage_banner_img_sm.jpg"
import Tabs from "../Tabs/Tabs";
import {linnks} from "../../templates/links"
import "../Tabs/tabs.css"
import { useNavigate } from "react-router-dom";
let tabs:Array<any> = linnks
export default function Navigation(){
    console.log(tabs)
    const navigate = useNavigate()
    const navigateToHome = () =>{
        navigate("/home")
    }
    return (
        <><div className="navigation-bar">
            <div className={`title tab-${document.location.pathname === "/home" ? "active" : "inactive" }`} onClick={navigateToHome}>Marc Tapp</div>
            <div className="links-to-no-where">
                <Tabs tabsArray={tabs}/>
            </div>
        </div>
        <img className="legendary_pic" src={banner} alt=""/>
        </>    
        )
}