import React from "react";
import { CardHeader } from "../Dashtypes/interfaces";
import FormFields from "../formfields/FormFields";

export default function CardHeader(props:CardHeader){
    return (
        <div key={`${props?.title}-${props?.subTitle}`} className={`${props?.title}-header header-container`}>
            <div className={"card-body-left"}>
                <div className="card-body-title">{props?.title}</div>
                {props?.title ? <div className="card-body-subTitle">{props?.subTitle}</div> : null}
            </div>
            <div className={"card-body-right"}>
                {Array.isArray(props?.inputs) ? props?.inputs?.length > 2 ? <button>FILTER</button> : <FormFields inputArray={props?.inputs} handleChange={()=>{}}/>:null}
            </div>
        </div>
    )
}