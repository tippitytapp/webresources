export interface InputInterface {
    name: string;
    value: string | number | boolean;
    id: string;
}

export interface Text extends InputInterface {
    disabled: boolean;
    onChange: ()=>void;
}