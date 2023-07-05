import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Left from "../../components/Left/Left"
import { useEffect } from "react";


const Main = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token)
    if (token === "fall" || token === null) {
      navigate('/');
    }
    const realStudent = JSON.parse(localStorage.getItem('student'));
    const hasChange = localStorage.getItem('change')
    const newPassword = localStorage.getItem('newPassword')
    if (realStudent.account === realStudent.password & !hasChange || realStudent.account === newPassword) {
      const dialog = document.querySelector('#my_modal_2').show();
    }
  }, [])


  return (
    <div className="main">
      <Header />
      <Left />
      <Footer />
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">请更改密码使密码与学号不重复！！！</p>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}

export default Main