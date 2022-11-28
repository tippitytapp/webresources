import React, { HTMLInputTypeAttribute } from "react";
export enum FieldTypesEnum {
    TEXT, DATE, NUMBER, CHECKBOX, TEXTAREA, TOGGLE, TEL,  DATERANGE, SLIDER, RADIOBUTTON, FILE, LABEL, INFO, BUTTON, CODE
}
export interface InputFieldTypes {
    id:string,
    name: string,
    value:string,
    type: HTMLInputTypeAttribute | undefined,
    inputMode:"email" | "search" | "tel" | "text" | "url" | "none" | "numeric" | "decimal" | undefined,
    label: string,
    checked?:boolean,
    disabled?:boolean,
    readonly?:boolean,
    values?:Array<any>,
    pattern?:any,
    defaultValue: any,
    placeholder:string,
    onChange:(key:any) => void,
}
export default function FormField(props:InputFieldTypes){
    let {id, name, value, type, checked, disabled, readonly, placeholder,inputMode, values, pattern,onChange} = props;
    return (
        <>
        {type === "TEXTAREA" ? (<><label
            htmlFor={id}
        >{props?.label}</label><textarea
        id={id}
        name={name}
        value={value}
        inputMode={inputMode}
        placeholder={placeholder}
        onChange={e => onChange(e)}
        disabled={disabled}
        readOnly={readonly}/></>) : type=== "SELECT" ? (<><label
            htmlFor={id}
        >{props?.label}</label><select             
        id={id}
        name={name}
        value={value}
        inputMode={inputMode}
        placeholder={placeholder}
        onChange={e => onChange(e)}
        disabled={disabled}
        >{values?.map((val, index)=>{
           return <option id={val.concat(String(index))}>{val}</option>
        })}</select></>) : 
       <> <label
       htmlFor={id}
   >{props?.label}</label>
        <input 
            id={id}
            name={name}
            value={value}
            type={type?.toLowerCase()}
            inputMode={inputMode}
            placeholder={placeholder}
            onChange={e => onChange(e)}
            pattern={pattern}
            checked={checked}
            disabled={disabled}
            readOnly={readonly}
        /></>}
        </>
    )
}