import React from "react";
// import {IAuthProps} from "./types";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import AuthFormLogo from "../../../../client/src/assets/todo-auth.png";
import {IAuthProps} from "./types";

const Auth = ({ form }: IAuthProps) => {
    let ComponentToRender;

    if (form === 'register') {
        ComponentToRender = Register;
    } else {
        ComponentToRender = Login;
    }

    return (
        <div className="pt-10">
            <h1 className="ml-72 text-white text-8xl font-medium">TODO-APP</h1>
            <div className="flex justify-center items-center h-screen">
                <img
                    src={AuthFormLogo}
                    alt="logo"
                    width={652}
                    height={676}
                    className="mr-[18px]"
                />
                <ComponentToRender />
            </div>
        </div>
    );
}

export default Auth;