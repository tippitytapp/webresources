import React from "react";
import FormFields from "./FormFields";
import "./FormFields.css"
interface FormRowsProps {
    rows:Array<any>,
    handleChange: (e:any) => void
}

export default function FormRows(props:FormRowsProps){
    return (
        <div className="form-rows-container">
            {Array.isArray(props?.rows) && props.rows.map((row, i)=>{
               return <FormFields inputArray={row} handleChange={props.handleChange}/>
            })
            }
        </div>
    )
}