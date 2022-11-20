import React from "react";
export enum FieldTypesEnum {
    TEXT, DATE, NUMBER, CHECKBOX, TEXTAREA, TOGGLE, TEL,  DATERANGE, SLIDER, RADIOBUTTON, FILE, LABEL, INFO, BUTTON, CODE
}
export interface InputFieldTypes {
    id:string,
    name: string,
    value:string,
    type: FieldTypesEnum,
    checked?:boolean,
    disabled?:boolean,
    readonly?:boolean,
    values?:Array<any>,
    defaultValue: any,
    onChange?:(key:any) => void,
    onSubmit?: (key:any) => void,
}
export default function FormField(props:InputFieldTypes){
    console.log(props)
    return (
        <input />
    )
}