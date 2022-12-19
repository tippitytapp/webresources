import React, { useState, useRef, useEffect } from "react";
import Button from "../../Buttons/Button";
import FormRows from "../../formfields/FormRows";
import emailjs from "@emailjs/browser";
import NetworkUtil from "../../../utils/ResourceRoutingUtil";
import * as constants from "./ContactFormConstants";
import { initializeFields, updateValue } from "../../../store/actions/contactFormActionsReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
interface ContactFormProps {
    closeCForm:()=>any;
    inputFields:any
}

export default function ContactForm(props:ContactFormProps){
    let {inputFields} = props;
    const form = useRef()
    inputFields = inputFields["default"]?.inputFields
    const [formData, setFormData] = useState({})
    const [response, setResponse] = useState(null)
    const dispatch = useDispatch()
    const fields = useSelector((state: RootState)=> state.form.fields)
    useEffect(()=>{
        dispatch(initializeFields(inputFields?.rows))
    },[])
    const handleChange = (event:any) => {
        let target = event.target;
        let name = target?.name;
        let value = target?.value;
        let checked = target?.checked
        setFormData({...formData, [name]:checked ? checked : value})
        dispatch(updateValue(checked?checked:value, name))
    }
    const subFormData = async (e:any) => {
        if(e?.preventDefault)e.preventDefault()
       let response =  await NetworkUtil({url: constants.url, method:constants.method, dataToPass:{template_id: constants.TEMPLATE_ID, service_id: constants.SERVICE_ID, user_id: constants.USER_ID, template_params:formData  }}) 
        setResponse(response)
       return response
    }
    const clearFormData = ()=>{setFormData({})}
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
            <form className="contact-form-body">
                <div className="contact-form-inputs">
                    {fields ? <FormRows rows={fields} handleChange={handleChange}/> : null}
                </div>
                <div className="contact-form-inputs">
                    {inputFields.buttons ? inputFields.buttons.map((btn:any) => {
                       btn.onClick = btn.type === "submit" ? (e: any)=>subFormData(e) : btn.type === "clear" ? ()=>clearFormData() : null
                        return <Button key={btn.type} {...btn}/>
                    }) : null}
                </div>
            </form>
        </div>
    )
}