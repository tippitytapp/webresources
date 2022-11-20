import React from "react";
import FormFields from "./FormFields";

interface FormRowsProps {
    rows:Array<any>
}

export default function FormRows(props:FormRowsProps){
    return (
        <div className="form-rows-container">
            {Array.isArray(props?.rows) && props.rows.map((row, i)=>{
               return <FormFields inputArray={row}/>
            })
            }
        </div>
    )
}