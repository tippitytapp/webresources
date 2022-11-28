import React from "react";
import { TemplateBody as TBP } from "../components/Dashtypes/interfaces";


export default function TemplateBody(props:TBP){
    return (
        <div className="template-body">
            {Array.isArray(props?.cards) ? props.cards.map((card, cardIdx)=>{
                return (
                    <div key={`${card?.header?.title}-${card?.header?.subTitle}-${cardIdx}`}></div>
                )
            }) : null}
        </div>
    )
}