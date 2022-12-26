import React, { useEffect, useState } from "react";
import ContactForm from "../forms/contactform/ContactForm";
import * as inputFields from "../../templates/contactform.json"
import "./Footer.css"
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { toggleForm } from "../../store/actions/contactFormActionsReducer";
import { useDispatch } from "react-redux";

export default function Footer(){
const showContactForm = useSelector((state:RootState)=>state?.form.showForm)
const dispatch = useDispatch()

    return (
        <>
        {showContactForm ? <ContactForm closeCForm={()=>dispatch(toggleForm(false))} inputFields={inputFields}/> : null}
        <div className="footer-container">
            <div className="footer-left"></div>
            <div className="footer-center">Copyright &copy; 2023 Marc Tapp</div>
            <div className="footer-right" onClick={(e)=>{ e.preventDefault();dispatch(toggleForm(true))}}>Have a question?</div>
            
        </div>
        </>
    )
}