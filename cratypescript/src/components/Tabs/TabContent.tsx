import React from "react";
import TemplateHeader from "../Headers/TemplateHeader";

export default function TabContent(props:any){
    return(
        <div className={`${props?.title}-tab-content`}>
            <TemplateHeader title={props?.tab?.displayName}/>
        </div>
    )
}