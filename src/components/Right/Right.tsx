import { NavLink, useNavigate } from "react-router-dom";

import { useState } from 'react';

const Right = () => {
  const [level, setLevel] = useState(1);

  const [success, setSuccess] = useState(0);

  const navigate = useNavigate();

  const [firstPassword, setFirstPassword] = useState({
    password: '',
  })

  function handleFirstPasswordChange(e) {
    setFirstPassword({
      password: e.target.value
    });
  }

  const [secondPassword, setSecondPassword] = useState({
    password: '',
  })

  function handleSecondPasswordChange(e) {
    setSecondPassword({
      password: e.target.value
    });
  }

  console.log(firstPassword.password)

  function handleClick(e) {
    if (firstPassword.password == secondPassword.password) {
      setSuccess(0);
      localStorage.setItem("change","hasChange");
      localStorage.setItem("newPassword",firstPassword.password);
      navigate('/');
    } else {
      setSuccess(1)
    }
  }


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
            <li className="w-20"><a><NavLink to="/main">选择导师</NavLink></a></li>
            <li className="w-20"><a><NavLink to="/change">修改密码</NavLink></a></li>
          </ul>
        </li>
      </ul>
      <div className="right-border">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">输入新密码</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={handleFirstPasswordChange} />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">再次输入密码</span>

          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={handleSecondPasswordChange} />
        </div>
        <br />
        <button className="btn btn-outline" onClick={handleClick}>修改密码</button>
        <br />
        {success === 1 ? <div className="alert alert-error w-60">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>输入密码不同！（没写完）</span>
        </div> : <br />}

      </div>
    </div >
  )
}

export default Right