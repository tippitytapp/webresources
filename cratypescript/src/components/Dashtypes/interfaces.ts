import { ButtonProps } from "../Buttons/Button";
import { InputInterface } from "../formfields/Interface";

export interface TemplateHeader{
    title: string;
    subTitle?: string;
}

export interface TemplateBody{
    cards: Array<Card>;
}

export interface TemplateFooter{
    actionButtons: Array<ButtonProps>;
}

export interface Template {
    header: TemplateHeader;
    body: TemplateBody;
    footer: TemplateFooter;    
}

export interface CardHeader extends TemplateHeader {
    inputs: Array<InputInterface>;
}
export interface CardBody {
    sections: Array<any>;
}
export interface Card {
    header: CardHeader;
    body: Array<any>;
    type: "standard" | "table" | "form" | "graph"
}