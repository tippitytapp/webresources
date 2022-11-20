import React from "react";
import FormRows from "../formfields/FormRows";

interface ContactFormProps {
    closeCForm:()=>any;
    inputFields:any
}

export default function ContactForm(props:ContactFormProps){
    console.log(props)
    return (
        <div className="contact-form-modal">
            <div className="contact-form-header">
                <div className="contact-form-header-title">
                    Have a question? Want to reach out or know more? Contact Me:
                </div>
                <div className="close-button" onClick={()=>props?.closeCForm()}>
                    X
                </div>
            </div>
            <div className="contact-form-body">
                <div className="contact-form-inputs">
                    {props.inputFields?.rows ? <FormRows rows={props.inputFields.rows}/> : null}
                </div>
            </div>
        </div>
    )
}