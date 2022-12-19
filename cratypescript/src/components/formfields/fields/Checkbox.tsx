import React, {useState} from "react";

export default function Checkbox(props:any){
    const [isChecked, setIsChecked] = useState(props?.field?.checked);
    const handleChange = (e:any)=>{
        e.preventDefault();
        setIsChecked(!isChecked);

        return props?.handleChange({fieldName: props?.field?.fieldName, value: isChecked})
    }
    return (
        <React.Fragment>
            <label htmlFor={props?.field?.fieldName}>{props?.field?.displayName}</label>
            <input
             type="checkbox"
             checked={isChecked}
             id={props?.field?.id}
             name={props?.field?.name}
             onChange={handleChange}
             />
        </React.Fragment>
    )
}