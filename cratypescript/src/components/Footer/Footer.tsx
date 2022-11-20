import React, { useState } from "react";
import ContactForm from "../forms/ContactForm";
import * as inputFields from "../../templates/contactform.json"
import "./Footer.css"
export default function Footer(){
    const [showContactForm, setShowContactForm]=useState(false);
    

    return (
        <>
        {showContactForm ? <ContactForm closeCForm={()=>setShowContactForm(false)} inputFields={inputFields}/> : null}
        <div className="footer-container">
            <div className="footer-left">FooterLeft</div>
            <div className="footer-center">FooterCenter</div>
            <div className="footer-right" onClick={(e)=>{ e.preventDefault();setShowContactForm(true)}}>Have a question?</div>
            
        </div>
        </>
    )
}