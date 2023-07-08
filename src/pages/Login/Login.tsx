import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const Login = () => {

  const navigate = useNavigate();

  const [student, setStudent] = useState({
    account: '',
    password: '',
  })

  function handleAccountChange(e) {
    setStudent({
      ...student,
      account: e.target.value
    });
  }

  function handlePasswordChange(e) {
    setStudent({
      ...student,
      password: e.target.value
    });
  }



  function handleClick(e) {
    const realStudent = JSON.parse(localStorage.getItem('student'));
    const hasChangeS = localStorage.getItem('changeS')
    const hasChangeT = localStorage.getItem('changeT')
    const newSPassword = localStorage.getItem('newSPassword')
    const newTPassword = localStorage.getItem('newTPassword')
    const realTeacher = JSON.parse(localStorage.getItem('teacherA'));
    if (realStudent.account === student.account && realStudent.password === student.password && !hasChangeS) {
      navigate('/main');
      localStorage.setItem("token", "success");
      localStorage.setItem("level", "1");
    } else if (realStudent.account === student.account && newSPassword === student.password && hasChangeS) {
      navigate('/main');
      localStorage.setItem("token", "success");
      localStorage.setItem("level", "1");
    }
    if (realTeacher.account === student.account && realTeacher.password === student.password && !hasChangeT) {
      navigate('/teacher');
      localStorage.setItem("token", "success");
      localStorage.setItem("level", "2");
    } else if (realTeacher.account === student.account && newTPassword === student.password && hasChangeT) {
      navigate('/teacher');
      localStorage.setItem("token", "success");
      localStorage.setItem("level", "2");
    }
  }

  function handleClickChongzhi(e){
    localStorage.removeItem("changeT")
    localStorage.removeItem("newSPassword")
    localStorage.removeItem("newTPassword")
    localStorage.removeItem("level")
    localStorage.removeItem("changeS")
    localStorage.removeItem("isChoose")
    localStorage.removeItem("teacher")
    localStorage.removeItem("token")
  }

  return (
    <form >
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-2">学生端学号密码均为2020211802</p>
            <p className="py-1">教师端学号密码均为admin</p>
            <p className="py-1">退出请点击右上角头像</p>
            <button className="btn btn-primary" onClick={handleClickChongzhi}>重置</button>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">学号</span>
                </label>
                <input type="text" placeholder="请输入学号" className="input input-bordered" value={student.account} onChange={handleAccountChange} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">密码</span>
                </label>
                <input type="text" placeholder="请输入密码" className="input input-bordered" value={student.password} onChange={handlePasswordChange} />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handleClick}>登录</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Login
