import { NavLink, useNavigate } from "react-router-dom";
import "./Left.scss"
import { useState, useEffect } from 'react';

const Left = () => {
    const [level, setLevel] = useState(localStorage.getItem("level"));

    const navigate = useNavigate();

    const [teachers, setTeachers] = useState([
        {
            id: 1,
            name: "李莉",
            country: "China",
            choose: 10,
            haschoose: 9,
            detail: "李莉，博士，教授，硕士生导师，东北林业大学青年成栋名师、软件工程专业主任、专业党支部书记。美国加州大学（河滨）访问学者。主持和参加国家级、省部级各类科研、教研项目15项，各级各类获奖10余项，作为第一作者发表SCI、EI、中文核心期刊等论文20余篇、主编教材4部。主持国家级一流本科课程、黑龙江省线上线下精品课程、东北林业大学一流本科课程、东北林业大学重点课程。获得第二届全国高校混合式教学设计创新大赛一等奖、华为产学合作专项奖；2次入选黑龙江省在线教学优秀案例；多次获得东北林业大学教学质量优秀奖、教学改革奖、教书育人先进个人称号。",
            isSelected: false,
            picture: "https://ccec.nefu.edu.cn/__local/D/CC/CD/111CCD3716FBCD4A97948BBE090_4DC1EC65_CA0E3.png"
        },
        {
            id: 2,
            name: "罗嗣卿",
            country: "China",
            choose: 10,
            haschoose: 10,
            detail: "罗嗣卿，硕士，副教授，硕士生导师。主要研究方向：信息系统析与设计、图像处理、软件服务与应用。主持和参加省攻关重点、省自然基金、国家林业公益性行业专项、省教改项目15项，发表论文20余篇，教材3部。",
            isSelected: false,
            picture: "https://ccec.nefu.edu.cn/__local/4/9A/93/2DC4E922D52C923A80EEFB592A0_D959E15A_11121.png?e=.png"
        },
        {
            id: 3,
            name: "温雪岩",
            country: "China",
            choose: 10,
            haschoose: 4,
            detail: "温雪岩，软件工程专业领域负责人，硕士，副教授，硕士生导师；黑龙江省计算机学会教育委员会委员。主要研究方向：算法与程序设计与开发、机器学习与深度学习、软件服务工程。主持或参加科研、教学项目10项，科研与教学获奖3项。出版教材5部，发表论文20余篇，EI1篇。",
            isSelected: false,
            picture: "https://ccec.nefu.edu.cn/__local/7/76/5B/2228B8CBADC0E7A2E27EDEDB82A_D9F9FCBD_A40E.jpg?e=.jpg"
        },
        {
            id: 4,
            name: "谷志新",
            country: "China",
            choose: 10,
            haschoose: 10,
            detail: "谷志新，博士，副教授，硕士生导师。主持黑龙江省自然科学基金、哈尔滨市应用技术研究与开发项目、中央高校基本科研业务费专项基金项目5项；获得哈尔滨市科技进步三等奖，东北林业大学教学质量优秀奖；主要研究方向：人工智能、信息技术应用。发表科技论文20余篇，其中SCI、EI收录5篇，出版专著1部，主编教材2部。获得专利4项。",
            isSelected: false,
            picture: "https://ccec.nefu.edu.cn/__local/9/74/7B/443286A5DD5C30AB813A5F39C2E_23226E5E_F02A4.png"
        },
        {
            id: 5,
            name: "刘丹",
            country: "China",
            choose: 10,
            haschoose: 3,
            detail: "刘丹，副教授，工学博士，硕士生导师。主要研究方向：无线传感器网络相关技术、数据仓库，数据挖掘。主持或参与科技部支撑计划项目、省自然科学基金项目、省科技攻关项目、哈尔滨科技局项目、中央高校基本可言业务C类项目等科研、教学项目20余项，出版教材7部，发表论文10余篇，其中EI收录论文7篇。获黑龙江省科技进步三等奖1项，省级奖励2项。授权发明专利、实用新型专利、软件著作权10余项。",
            isSelected: false,
            picture: "https://ccec.nefu.edu.cn/__local/C/21/93/FDB07A86F88F0EE41C0694AECF9_B0684D42_9C1F.jpg?e=.jpg"
        },
        {
            id: 6,
            name: "张锡英",
            country: "China",
            choose: 10,
            haschoose: 4,
            detail: "张锡英， 副教授，硕士，硕士生导师。主要研究方向：现代信息技术及网络应用，数据库技术、图像检索。主持或参加科研项目 11 项，发表论文 9 篇，出版教材 2 部。获得省级科学技术进步奖1次， 2 门课精品课主讲教师。",
            isSelected: false,
            picture: "https://ccec.nefu.edu.cn/__local/A/76/3A/42104ECFDBC4520F0C84D30A83B_258709F7_C507.jpg?e=.jpg"
        },
        {
            id: 7,
            name: "邱兆文",
            country: "China",
            choose: 10,
            haschoose: 5,
            detail: "邱兆文，博士，教授，博士生导师。博士毕业于哈工大，美国卡内基梅隆大学访问学者。东北林业大学三维数字化技术研究所所长。黑龙江省医学影像三维可视化与3D打印工程技术中心主任。拓盟科技董事长。中国计算机学会（CCF）理事，CCF杰出会员，CCF计算机应用专委常务委员，CCF哈尔滨执行委员，中国抗癌协会人工智能专委委员。主要研究方向为人工智能、混合现实。主持参加国家自然科学基金、科技部中央引导地方重大专项基金等18项。国家发明专利5项。主编专著1部。在Nature Machine Intelligence（IF=25.898）等期刊发表SCI论文20篇，H-index为6。获省科技进步三等奖 2项，获省高等教育教学成果二等奖2项。2016年获第五届“中国创新创业大赛”互联网及移动互联网行业企业组第三名 。2020年获第四届“中国创翼”创业创新大赛全国三等奖。2018年入选科技部创新人才推进计划，2019年入选国家万人计划领军人才。2019年获黑龙江省十大杰出创业青年。2022年获第八届“黑龙江省优秀科技工作者”。2020年挑战杯竞赛国赛金奖指导教师。2021年“互联网+”大赛国赛银奖指导教师。哈工大客座教授。",
            isSelected: false,
            picture: "https://ccec.nefu.edu.cn/__local/A/49/53/215689CF6B473A67F5090EF9092_433DF71E_8583.jpeg"
        },
        {
            id: 8,
            name: "赵玉茗",
            country: "China",
            choose: 10,
            haschoose: 6,
            detail: "赵玉茗，博士，副教授，博士生导师。主要研究方向：生物信息学、数据挖掘。中国计算机学会生物信息专委会委员。主持国家自然科学基金面上项目、国家自然科学基金青年基金项目、国家重点研发项目子课题、黑龙江省自然科学基金、林木遗传育种国家重点实验室开放基金、中央高校基本科研业务费专项基金项目等多项科研项目；获得东北林业大学青年教师授课大赛二等奖；主讲精品在线课程1门；获得专利5项；发表学术论文30余篇，其中EI、SCI收录10余篇，参与编写教材1部。美国Indiana University-Purdue University Indianapolis访问学者，美国The Johns Hopkins University博士后访问学者。",
            isSelected: false,
            picture: "https://ccec.nefu.edu.cn/__local/9/E2/A8/E0115D7EA756C24AFD7ADE995DF_BF3AF56B_688A.jpg?e=.jpg"
        },
        {
            id: 9,
            name: "李琰",
            country: "China",
            choose: 10,
            haschoose: 7,
            detail: "李琰，讲师，主要研究方向：软件工程，遥感和林业信息。参与科研项目多项，参编教材1部，并发表部分相关论文。",
            isSelected: false,
            picture: "https://ccec.nefu.edu.cn/__local/C/83/1B/A933C13BDF700DD82E5144B0092_A1692092_9FC7.jpg?e=.jpg"
        },
        {
            id: 10,
            name: "王波",
            country: "China",
            choose: 10,
            haschoose: 10,
            detail: "王波，讲师，硕士。主要研究方向：计算数学，软件开发。发表学术论文3篇。",
            isSelected: false,
            picture: "https://ccec.nefu.edu.cn/__local/0/13/A7/E674AC69D2A77D3F4AAE70A54B5_3E40B0CF_8C3E.jpg?e=.jpg"
        },
        {
            id: 11,
            name: "单颖",
            country: "China",
            choose: 10,
            haschoose: 8,
            detail: "单颖，博士，讲师，主要研究方向：软件工程，林业信息。参与科研项目多项，并发表相关论文。",
            isSelected: false,
            picture: "https://ccec.nefu.edu.cn/__local/2/72/75/4FF54112BBA54D0EC59102287EA_EDC248AD_1D34C.png"
        },
        {
            id: 12,
            name: "边继龙",
            country: "China",
            choose: 10,
            haschoose: 8,
            detail: "边继龙，讲师，工学博士，硕士生导师，软件工程专业副主任，支部委员，毕业于哈尔滨工程大学计算机应用技术专业，美国印第安纳大学访问学者。主要研究方向：计算机视觉，深度学习，生物信息学等方面的研究。主持黑龙江省自然科学基金面上项目、中央高校基本科研经费项目3项科研项目。累计发表学术论文20余篇，其中被EI/SCI收录10余篇，发明及实用新型专利3项。",
            isSelected: false,
            picture: "https://ccec.nefu.edu.cn/__local/C/6A/DF/EF4C5006758948C62BF7EE1FE95_0232131F_14CED.png"
        },
    ])

    const [selectedTeacherId, setSelectedTeacherId] = useState(null);

    const isChoose = localStorage.getItem("isChoose");

    function handleClick(e) {
        if (isChoose === "yes") {
            navigate('/main/choose');
        }
    }

    function handleClickQ(e) {
        localStorage.setItem("isChoose", "no");
        location.reload()
    }



    function handleChoose(teacherId) {
        setTeachers(prevTeachers => {
            const updatedTeachers = prevTeachers.map(teacher => {
                if (teacher.id === teacherId) {
                    if (teacher.isSelected) {
                        const updatedTeacher = { ...teacher, haschoose: teacher.haschoose - 1, isSelected: false };
                        localStorage.setItem("isChoose", "no");
                        setSelectedTeacherId(null);
                        return updatedTeacher;
                    } else {
                        if (teacher.haschoose >= 10) {
                            return teacher; // 如果已达到10个选择，则不进行任何操作
                        }
                        const updatedTeacher = { ...teacher, haschoose: teacher.haschoose + 1, isSelected: true };
                        localStorage.setItem("isChoose", "yes");
                        setSelectedTeacherId(teacherId);
                        return updatedTeacher;
                    }
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
                    <input type="checkbox" className="checkbox" onClick={() => handleChoose(teacher.id)} disabled={selectedTeacherId !== null && teacher.id !== selectedTeacherId ||
                        teacher.haschoose >= 10} />
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
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={teacher.picture} alt="" />
                    </div>
                </div>
            </td>
            <td>{teacher.haschoose}</td>
            <td>计算机控制与工程学院</td>
            <td>软件工程专业</td>
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
                    <h2 className="menu-title">{level === "1" ? "学生" : "教师"}</h2>
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
                                <th>照片</th>
                                <th>可选学生人数</th>
                                <th>所在学院</th>
                                <th>所在专业</th>
                                <th>详细信息</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listItems}

                        </tbody>

                    </table>
                </div>
                <br />
                <div>
                    <button className="btn" onClick={handleClickQ}>取消</button>
                    <span>          </span>
                    <button className="btn" onClick={() => window.my_modal_5.showModal()}>确认</button>
                </div>


                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <form method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg">警告！</h3>
                        <p className="py-4">选择导师后将无法更改，请慎重选择！！！（没写完）</p>
                        <div className="modal-action">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn" onClick={handleClick}>确定</button>
                        </div>
                    </form>
                </dialog>
            </div>
        </div >

    )
}

export default Left