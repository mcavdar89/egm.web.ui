export interface FormControlTemplate {
    key: string;
    inputType: string;
    readonly?: boolean;
    label?: string;
    value?: any|null|undefined;

    options?: any[];
    optionLabel?:string;
    optionValue?:string;


    required?: boolean;
    minLength?: number;
    maxLength?: number;
    isEposta?: boolean;
}