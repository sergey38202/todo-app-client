import {NavLink, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";

const Login = () => {
    const [formFields, setFormFields] = useState(
        { email: '', password: '' }
    );

    const navigate = useNavigate();

    const handleGetFormValues = (e: any) => {
        const { value, name } = e.target;

        setFormFields({
            ...formFields,
            [name]: value
        });
    };

    const handleSignIn = (e: any) => {
        e.preventDefault();

        axios.post('http://localhost:5000/api/auth/login', formFields).then((res) => {
            localStorage.setItem('user', res.data.token);
            navigate('/');
        }).finally(() => window.location.reload());
    };

    return (
        <form
            className="flex flex-col pt-[101px] pr-[103px] pb-[70px] pl-[120px] bg-white rounded-md"
            onSubmit={handleSignIn}
        >
            <div className="text-purple-500 text-3xl mb-[31px]">Welcome to Todo-App</div>
            <div className="flex flex-col max-w-[250px] w-full">
                <input
                    className="border border-black mb-[36px] outline-none pl-[10px]"
                    type="text"
                    placeholder="Email..."
                    name="email"
                    value={formFields.email}
                    onChange={handleGetFormValues}
                />
                <input
                    className="border border-black mb-[36px] outline-none pl-[10px]"
                    type="password"
                    placeholder="Password..."
                    name="password"
                    value={formFields.password}
                    onChange={handleGetFormValues}
                />
                <button
                    className="w-full border-2 border-black bg-blue-800 text-blue-200 text-[24px] font-normal mb-[36px]"
                    type="submit"
                >
                    Login
                </button>
                <div>
                    <NavLink to="/register" className="mr-[20px] text-black text-blue-800">Register</NavLink>
                    <NavLink to="/forgot-password" className="text-black text-opacity-50">Forgot password?</NavLink>
                </div>
            </div>
        </form>
    );
}

export default Login;