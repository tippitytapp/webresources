import React from "react";
import { Card } from "../Dashtypes/interfaces";
import CardHeader from "../Headers/CardHeader";
export default function StandardCard(props:Card){
    return (
        <React.Fragment key={`${props?.header?.title}-standard-card`}>
            <CardHeader />
        </React.Fragment>
    )
}