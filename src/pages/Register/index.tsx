import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [formFields, setFormFields] = useState(
        { name: '', email: '', password: '' }
    );

    const navigate = useNavigate();

    const handleGetFormValues = (e: any) => {
        const { value, name } = e.target;

        setFormFields({
            ...formFields,
            [name]: value
        });
    };

    const handleSignUp = (e: any) => {
        e.preventDefault();

        axios.post('http://localhost:5000/api/auth/register', formFields).then((res) => {
            console.log('user res', res);
            localStorage.setItem("user", res.data.token);
            localStorage.setItem("profile", res.data.user._id);
            setFormFields({ name: '', email: '', password: '' });
            navigate('/');
        }).finally(() => window.location.reload())
    }

    return (
        <form
            className="flex flex-col pt-[101px] pr-[103px] pb-[70px] pl-[120px] bg-white rounded-md"
            onSubmit={handleSignUp}
        >
            <div className="text-purple-500 text-3xl mb-[31px]">Welcome to Todo-App</div>
            <div className="flex flex-col max-w-[250px] w-full">
                <input
                    className="border border-black mb-[36px] outline-none pl-[10px]"
                    type="text"
                    placeholder="Name..."
                    name="name"
                    value={formFields.name}
                    onChange={handleGetFormValues}
                />
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
                    className="w-full border-2 border-black bg-blue-800 text-blue-200 text-[24px] font-normal mb-[18px]"
                    type="submit"
                >
                    Register
                </button>
                <div className="text-black text-[18px] font-normal">Have account already?
                    <NavLink to="/login" className="ml-[15px] text-blue-600">Login</NavLink>
                </div>
            </div>
        </form>
    );
}

export default Register;