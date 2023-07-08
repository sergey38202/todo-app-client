import {ReactElement} from "react";

interface IAuthFormInput {
    type?: string;
    name: string;
    placeholder?: string;
    value: string | number;
    onChange: () => void;
    className?: string;
}

interface IAuthFormSubmitBtn {
    title: string;
    isLoading?: boolean;
    onSubmit: () => void;
}

export interface IAuthFormProps {
    inputs: IAuthFormInput[];
    submitBtn: IAuthFormSubmitBtn;
    footer?: ReactElement;
}