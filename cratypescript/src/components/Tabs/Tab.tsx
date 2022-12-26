import React from "react";
import { Link, useLocation } from "react-router-dom";
export interface TabInterface {
   tab:{
    displayName: string,
    id: string,
    link: string,
    type: "dropDown" | "staticTab",
    children?: Array<{    
        displayName: string,
        id: string,
        link: string,
        type: "dropDown" | "staticTab"}>},
    active: string
    }

    export default function Tab(props:{displayName:string, id:string, link:string, type:"dropDown" | "staticTab", childrenTabs:Array<any>, active: string}){
        const location = useLocation()
        let active = location.pathname.includes(props?.link)
        if(props?.type === "staticTab"){
            return(
                <div className={`app-tab tab-${active ? "active":"inactive"}`}>
                    <Link to={props?.link} >{props?.displayName}</Link>
                </div>
            )
        } else {
            return (
                <div className={`app-tab tab-${active ? "active" : "inactive"}`}>
                    <Link to={props?.link}>{props?.displayName} {`\uF27E`}</Link>
                </div>
            )
        }
    }