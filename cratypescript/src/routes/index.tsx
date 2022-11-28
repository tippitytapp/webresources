import React from "react";
import {Routes,Route} from "react-router-dom";
import App from "../App";
import HomePageHeader from "../components/Headers/HomePageHeader";
import { linnks } from "../templates/links";
import Informational from "../components/Dashtypes/Informational"
export default function AppRouter(){
    return (
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="home" element={<HomePageHeader/>}></Route>
                {Array.isArray(linnks) ? linnks.map((ro, ind) => <Route key={ind} path={ro?.link} element={<iframe style={{color: "red", fontSize: "200px"}}>{ro.displayName}</iframe>}/>): null}
            </Route>
        </Routes>
    )
}