import React, {useState} from "react";

const ForgotPassword = () => {
    const [formFields, setFormFields] = useState({
        password: '',
        newPassword: '',
    });

    const handleGetFormFields = (e: any) => {
        const { value, name } = e.target;

        setFormFields({
            ...formFields,
            [name]: value
        });
    };

    return (
        <div className="flex flex-col justify-center items-center p-[20px] bg-white mx-auto w-[400px] absolute top-[40%] left-[35%]">
            <p className="text-center mx-auto">Forgot Password</p>
            <input
                type="passsword"
                placeholder="Password"
                onChange={handleGetFormFields}
                value={formFields.password}
                name="password"
                className="mt-[20px] mb-[20px] border border-black"
            />
            <input
                type="password"
                placeholder="New password"
                onChange={handleGetFormFields}
                value={formFields.newPassword}
                name="newPassword"
                className="border border-black mb-[20px]"
            />
            <button
                className="mx-auto p-[10px] items-center w-[200px] max-w-full border-2 border-black bg-blue-800 text-blue-200 text-[24px] font-normal mb-[18px] rounded-[7px]"
                type="submit"
            >
                Submit
            </button>
        </div>
    );
}

export default ForgotPassword;