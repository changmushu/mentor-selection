import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Right from "../../components/Right/Right"
import { useEffect } from "react";

const ChangePassword = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token === "fall" || token===null) {
          navigate('/');
        }
      },[])

    return (
        <div>
            <Header />
            <Right />
            <Footer />
        </div>
    )
}

export default ChangePassword