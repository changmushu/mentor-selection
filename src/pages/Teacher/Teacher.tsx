import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import TeacherDash from '../../components/TeacherDash/TeacherDash'
import { useEffect } from "react";

const Teacher = () => {

    useEffect(() => {
        const realTeacher = JSON.parse(localStorage.getItem('teacherA'));
        const newTPassword = localStorage.getItem('newTPassword')
        if (realTeacher.password !== newTPassword && !newTPassword) {
            const dialog = document.querySelector('#my_modal_2').show();
        }
    }, [])
    return (
        <div>
            <Header />
            <TeacherDash />
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

export default Teacher