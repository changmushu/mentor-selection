import React from 'react'
import { NavLink } from 'react-router-dom'

import { useState } from 'react';

const TeacherDash = () => {

    const [level, setLevel] = useState(localStorage.getItem("level"));
    return (
        <div className="main-border">
            {/* <div className="left-border">
                <div className="choose">
                    <div className="first">{level === 1 ? "选择导师" : "学生选择"}</div>
                    <div className="second">修改密码</div>
                </div>

            </div> */}
            <ul className="menu bg-base-200 w-56 rounded-box">
                <li>
                    <h2 className="menu-title">{level === "1" ? "学生" : "教师"}</h2>
                    <ul>
                        <li className="w-20"><a><NavLink to="/teacher">查看学生</NavLink></a></li>
                        <li className="w-20"><a><NavLink to="/teacher/change">修改密码</NavLink></a></li>
                    </ul>
                </li>
            </ul>
            <div className="right-border">
                <div className="overflow-x-auto">
                    <table className="table table-lg">
                        <thead>
                            <tr>
                                <th></th>
                                <th>名字</th>
                                <th>专业</th>
                                <th>学号</th>
                                <th>学分绩点</th>
                                <th>选择时间</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>沈张旭</td>
                                <td>软件工程</td>
                                <td>2020211802</td>
                                <td>xx</td>
                                <td>07/08/2023</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>软件工程</td>
                                <td>未完成</td>
                                <td>United States</td>
                                <td>12/5/2020</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>软件工程</td>
                                <td>Carroll Group</td>
                                <td>China</td>
                                <td>8/15/2020</td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>Marjy Ferencz</td>
                                <td>软件工程</td>
                                <td>Rowe-Schoen</td>
                                <td>Russia</td>
                                <td>3/25/2021</td>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td>Yancy Tear</td>
                                <td>软件工程</td>
                                <td>Wyman-Ledner</td>
                                <td>Brazil</td>
                                <td>5/22/2020</td>
                            </tr>
                            <tr>
                                <th>6</th>
                                <td>Irma Vasilik</td>
                                <td>软件工程</td>
                                <td>Wiza, Bins and Emard</td>
                                <td>Venezuela</td>
                                <td>12/8/2020</td>
                            </tr>
                            <tr>
                                <th>7</th>
                                <td>Meghann Durtnal</td>
                                <td>软件工程</td>
                                <td>Schuster-Schimmel</td>
                                <td>Philippines</td>
                                <td>2/17/2021</td>
                            </tr>
                            <tr>
                                <th>8</th>
                                <td>Sammy Seston</td>
                                <td>软件工程</td>
                                <td>O'Hara, Welch and Keebler</td>
                                <td>Indonesia</td>
                                <td>5/23/2020</td>
                            </tr>
                            <tr>
                                <th>9</th>
                                <td>Lesya Tinham</td>
                                <td>软件工程</td>
                                <td>Turner-Kuhlman</td>
                                <td>Philippines</td>
                                <td>2/21/2021</td>
                            </tr>
                            <tr>
                                <th>10</th>
                                <td>Zaneta Tewkesbury</td>
                                <td>软件工程</td>
                                <td>Sauer LLC</td>
                                <td>Chad</td>
                                <td>6/23/2020</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                            <th></th>
                                <th>名字</th>
                                <th>专业</th>
                                <th>学号</th>
                                <th>学分绩点</th>
                                <th>选择时间</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default TeacherDash