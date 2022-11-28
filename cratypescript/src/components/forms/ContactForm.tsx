import React, { useState } from "react";
import Button from "../Buttons/Button";
import FormRows from "../formfields/FormRows";

interface ContactFormProps {
    closeCForm:()=>any;
    inputFields:any
}

export default function ContactForm(props:ContactFormProps){
    let {inputFields} = props;
    inputFields = inputFields["default"]?.inputFields
    const [formData, setFormData] = useState({})
    const handleChange = (event:any) => {
        let target = event.target;
        let name = target?.name;
        let value = target?.value;
        let checked = target?.checked
        setFormData({...formData, [name]:checked ? checked : value})
    }
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
                    {inputFields.rows ? <FormRows rows={inputFields.rows} handleChange={handleChange}/> : null}
                </div>
                <div className="contact-form-inputs">
                    {inputFields.buttons ? inputFields.buttons.map((btn:any) => {
                        return <Button {...btn}/>
                    }) : null}
                </div>
            </div>
        </div>
    )
}