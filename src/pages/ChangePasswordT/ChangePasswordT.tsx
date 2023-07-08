import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import RightT from "../../components/Right/RightT"
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";

const ChangePasswordT = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token === "fall" || token === null) {
            navigate('/');
        }
    }, [])

    return (
        <div>
            <Header />
            <RightT />
            <Footer />
        </div>
    )
}

export default ChangePasswordT