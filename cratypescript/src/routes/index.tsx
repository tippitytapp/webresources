import React, { useEffect } from "react";
import {Routes,Route, useParams, useLocation} from "react-router-dom";
import App from "../App";
import HomePageHeader from "../components/Headers/HomePageHeader";
import { linnks } from "../templates/links";
import Informational from "../components/Dashtypes/Informational"

export function TemplateRouter(){
const params = useParams();
let {templateType} = params;
switch(templateType){
    case "info": {
        return (
            <Route path={`/${templateType}/`} element={<Informational template={{header: {title: "Informational"}, body:{cards:[]}, footer:{actionButtons:[]}}}/>}/>
        )
    }
}

}

export default function AppRouter(){
    const location = useLocation()
    useEffect(()=>{
        location.pathname = "/home"
    },[])
    return (
        <Routes>
            
            <Route path="/" element={<App/>}>
                <Route path="/home" element={<HomePageHeader/>}></Route>
                {Array.isArray(linnks) ? linnks.map((ro, ind) =>{
                    console.log(linnks, ro)
                    return  (<Route key={ind} path={ro?.link} element={<div style={{color: "red", fontSize: "200px"}}>{ro.displayName}</div>}/>)
                    }
                    )
                    : null}
            </Route>
        </Routes>
    )
}