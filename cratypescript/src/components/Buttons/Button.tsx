import React from "react";
export interface ButtonProps {
    id: string,
    name: string,
    type: "button" | "submit" | "reset",
    label: string,
    secondary?: boolean,
    onClick: ()=>void
}
export default function Button(props: ButtonProps){
    let {id, name, type, label, secondary, onClick} = props
    console.log(props)
    return (
        <button 
            id={id}
            name={name}
            type={type}
            className={secondary ? "form-button-secondary" : "form-button-primary"}
            onClick={()=>onClick()}
        >{label}</button>
    )
}