import React from "react";
import { TemplateHeader as THP } from "../Dashtypes/interfaces";

export default function TemplateHeader(props:THP){
    const {title, subTitle} = props;

    return (
        <div key={`template-header-${title}`}>
            <div className={"template-header title"}>{title}</div>
           {subTitle ? <div className={"template-header subtitle"}>{subTitle}</div>: null}
        </div>
    )
}