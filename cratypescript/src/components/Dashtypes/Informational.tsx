import React from "react";
import TemplateHeader from "../Headers/TemplateHeader";
import TemplateBody from "../../Body/TemplateBody";
import { Template } from "./interfaces";

export interface InformationalProps {
    template: Template
}

export default function Informational(props: InformationalProps){
    const {template} = props;
    return (
        <React.Fragment key={`informational-${template?.header?.title?.replace(/\s/g, "")}`}>
            <TemplateHeader title={template?.header?.title} subTitle={template?.header?.subTitle} />
            <TemplateBody cards={template?.body?.cards}/>
        </React.Fragment>
    )
}