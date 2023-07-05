import { NavLink } from "react-router-dom";
import "./Left.scss"
import { useState, useEffect } from 'react';

const Left = () => {
    const [level, setLevel] = useState(1);

    const [teachers, setTeachers] = useState([
        {
            id: 1,
            name: "Bo1",
            country: "China",
            choose: 10,
            haschoose: 0,
            detail: "没写完",
            isSelected: false,
        },
        {
            id: 2,
            name: "Bo2",
            country: "China",
            choose: 10,
            haschoose: 0,
            detail: "没写完",
            isSelected: false,
        },
        {
            id: 3,
            name: "Bo3",
            country: "China",
            choose: 10,
            haschoose: 0,
            detail: "没写完",
            isSelected: false,
        },
        {
            id: 4,
            name: "Bo4",
            country: "China",
            choose: 10,
            haschoose: 0,
            detail: "没写完",
            isSelected: false,
        },
        {
            id: 5,
            name: "Bo5",
            country: "China",
            choose: 10,
            haschoose: 0,
            detail: "没写完",
            isSelected: false,
        },
        {
            id: 6,
            name: "Bo6",
            country: "China",
            choose: 10,
            haschoose: 0,
            detail: "没写完",
            isSelected: false,
        },
        {
            id: 7,
            name: "Bo7",
            country: "China",
            choose: 10,
            haschoose: 0,
            detail: "没写完",
            isSelected: false,
        },
        {
            id: 8,
            name: "Bo8",
            country: "China",
            choose: 10,
            haschoose: 0,
            detail: "没写完",
            isSelected: false,
        },
        {
            id: 9,
            name: "Bo9",
            country: "China",
            choose: 10,
            haschoose: 0,
            detail: "没写完",
            isSelected: false,
        },
        {
            id: 10,
            name: "Bo10",
            country: "China",
            choose: 10,
            haschoose: 0,
            detail: "没写完",
            isSelected: false,
        },
    ])

    const [selectedTeacherId, setSelectedTeacherId] = useState(null);

    const isChoose = localStorage.getItem("isChoose");
    console.log(isChoose)

    function handleChoose(teacherId) {
        setTeachers(prevTeachers => {
            const updatedTeachers = prevTeachers.map(teacher => {
                if (teacher.id === teacherId) {
                    if (teacher.isSelected) {
                        const updatedTeacher = { ...teacher, haschoose: teacher.haschoose - 1, isSelected: false };
                        localStorage.setItem("isChoose", "no");
                        setSelectedTeacherId(null);
                        return updatedTeacher;
                    }
                    const updatedTeacher = { ...teacher, haschoose: teacher.haschoose + 1, isSelected: true };
                    localStorage.setItem("isChoose", "yes");
                    setSelectedTeacherId(teacherId);
                    return updatedTeacher;
                }
                return teacher;
            });

            return updatedTeachers;
        });

    }

    useEffect(() => {
        if (localStorage.getItem("isChoose") === "yes" && selectedTeacherId) {
            const selectedTeacher = teachers.find(teacher => teacher.id === selectedTeacherId);
            localStorage.setItem("teacher", JSON.stringify(selectedTeacher));
        }
    }, [teachers, selectedTeacherId]);

    const listItems = teachers.map(teacher =>
        <tr key={teacher.id}>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" onClick={() => handleChoose(teacher.id)} disabled={selectedTeacherId !== null && teacher.id !== selectedTeacherId} />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{teacher.id}</div>
                    </div>
                </div>
            </td>
            <td>
                {teacher.name}
                <br />
                <span className="badge badge-ghost badge-sm">可选人数{teacher.choose}</span>
            </td>
            <td>{teacher.haschoose}</td>
            <th>
                <label htmlFor="my_modal_6" className="btn">点击查看</label>
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">{teacher.name}</h3>
                        <p className="py-4">{teacher.detail}</p>
                        <div className="modal-action">
                            <label htmlFor="my_modal_6" className="btn">关闭!</label>
                        </div>
                    </div>
                </div>
            </th>
        </tr>)

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
                    <h2 className="menu-title">{level === 1 ? "学生" : "教师"}</h2>
                    <ul>
                        <li className="w-20"><NavLink to="/main">选择导师</NavLink></li>
                        <li className="w-20"><NavLink to="/change">修改密码</NavLink></li>
                    </ul>
                </li>
            </ul>
            <div className="right-border">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>编号</th>
                                <th>姓名</th>
                                <th>可选学生人数</th>
                                <th>详细信息</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listItems}

                        </tbody>

                    </table>
                </div>
                <br/>
                <button className="btn" onClick={() => window.my_modal_5.showModal()}>确认</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <form method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg">警告！</h3>
                        <p className="py-4">选择导师后将无法更改，请慎重选择！！！（没写完）</p>
                        <div className="modal-action">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">确定</button>
                        </div>
                    </form>
                </dialog>
            </div>
        </div >

    )
}

export default Left