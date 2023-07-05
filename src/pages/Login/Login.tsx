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
    const hasChange = localStorage.getItem('change')
    const newPassword = localStorage.getItem('newPassword')
    if (realStudent.account === student.account && realStudent.password === student.password && !hasChange) {
      navigate('/main');
      localStorage.setItem("token", "success");
    } else if (realStudent.account === student.account && newPassword === student.password && hasChange) {
      navigate('/main');
      localStorage.setItem("token", "success");
    }
  }

  return (
    <form >
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">(学号密码均为2020211802)</p>
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