import React, {useState} from "react";
import UserIcon from "../../../../client/src/assets/user.svg";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const handleToggleUser = () => {
        setOpen((prev) => !prev);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div className="flex justify-end w-full p-[20px]">
            <div className="relative">
                <img
                    src={UserIcon}
                    alt="user"
                    height={30}
                    width={30}
                    className="cursor-pointer"
                    onClick={handleToggleUser}
                />
                <div className={`absolute top-[50px] right-[10px] ${open ? 'block' : 'hidden'}`}>
                    <div className="p-[10px] border w-[100px] cursor-pointer" onClick={handleLogout}>
                        Log out
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;