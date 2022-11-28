import React from "react";
import { Card } from "../Dashtypes/interfaces";

export interface CardProps {
    cardsArray: Array<Card>
}
export default function CardsRender(props:CardProps){
    return (
        <div className="card-rendering-container">
            {Array.isArray(props?.cardsArray) ? props?.cardsArray?.map((card, carIdx) =>{
                    switch(card?.type){
                        case "standard":{
                            return (<></>)
                        }
                    }
            }) : null}
        </div>
    )
}