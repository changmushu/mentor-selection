import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import img from "../../assets/1.png"

const Choose = () => {

    const [level, setLevel] = useState(localStorage.getItem("level"));
    const teacher = JSON.parse(localStorage.getItem("teacher"))
    console.log(teacher.id)
    return (
        <div><div className="main-border">
            {/* <div className="left-border">
              <div className="choose">
                  <div className="first">{level === 1 ? "选择导师" : "学生选择"}</div>
                  <div className="second">修改密码</div>
              </div>

          </div> */}
            <ul className="menu bg-base-200 w-56 rounded-box ">
                <li>
                    <h2 className="menu-title">{level === "1" ? "学生" : "教师"}</h2>
                    <ul>
                        <li className="w-20"><a><NavLink to="/main">你的导师</NavLink></a></li>
                        <li className="w-20"><a><NavLink to="/change">修改密码</NavLink></a></li>
                    </ul>
                </li>
            </ul>
            <div className="right-border">

                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={teacher.picture} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">你选择的导师是{teacher.name}导师!</h1>
                            <p className="py-6">{teacher.detail}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        </div>
    )
}

export default Choose