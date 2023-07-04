import img from "../../assets/1.png"
import Levelone from "../LevelOne/LevelOne"
import LevelTwo from "../LevelTwo/LevelTwo"
import { useState, useEffect } from 'react';
import moment from 'moment'
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    const [level, setLevel] = useState(1);

    const [h, setH] = useState(moment().hours());
    const [m, setM] = useState(moment().minutes());
    const [s, setS] = useState(moment().seconds());

    useEffect(() => {
        setInterval(() => {
            const timeH = moment().hours();
            const timeM = moment().minutes();
            const timeS = moment().seconds();
            setH(timeH);
            setM(timeM);
            setS(timeS);
        }, 1000);
    }, []);

    function handleLogout(e){
        localStorage.setItem("token", "fall");
        navigate('/');
    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">{level === 1 ? "学生选课系统" : "教师选课系统"}</a>
                <span className="countdown font-mono text-2xl">
                    <span style={{ "--value": h }}></span>:
                    <span style={{ "--value": m }}></span>:
                    <span style={{ "--value": s }}></span>
                </span>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={img} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><a>Settings</a></li>
                        <li><a onClick={handleLogout}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header