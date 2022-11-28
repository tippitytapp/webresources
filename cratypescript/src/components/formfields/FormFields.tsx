import React from "react";
import FormField, {InputFieldTypes} from "./FormField"



interface FormFieldProps {
    inputArray: Array<any>,
    handleChange: (e:any) =>void
}

export default function FormFields(props: FormFieldProps){
    let {inputArray, handleChange} = props;

    return (
    <div className="input-array-container">
        {inputArray.map((input, i)=>{
        return (
            <div key={input?.id.concat(input?.name)} className="input-container">
                <FormField {...input} onChange={handleChange} />
            </div>
        )
    })}</div>
    )
}