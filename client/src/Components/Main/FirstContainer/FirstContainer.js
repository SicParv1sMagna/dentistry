import React from "react";
import { useState } from "react";

import "./FirstContainer.css"
import axios from "axios";

const FirstContainer = () => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);
    const HandleOpenNote = () => {
        setIsOpen(true)
    }

    const HandleCloseNote = () => {
        setIsOpen(false)
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;

        const data = {
            name: name,
            number: phone,
            date: new Date().toISOString(),
        }

        console.log(data);

        axios.post('http://localhost:8082/callback/send', data)
            .then(function (response){
                console.log(response.data);
            }) 
            .catch(function (error) {
                console.log(error);
            }) 
    }

    return (
        <div className="firstComponent">
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={HandleCloseNote}>&times;</span>
                        <form className='formNote' onSubmit={handleSubmitForm}>
                            <input type="text" name="name" placeholder="Имя" id="name" required pattern="[a-zA-Zа-яА-ЯЁё\s]+" title="Введите имя на русском или английском" />
                            <input type="text" name="phone" placeholder="Телефон" id="phone" required pattern="^\+?[1-9]\d{1,10}$" title="Введите корректный номер телефона" />
                            <button type="submit">Отправить заявку</button>
                            <label>Нажимая на кнопку "Отправить заявку", Вы выражаете свое согласие на <a href="https://www.consultant.ru/document/cons_doc_LAW_61801/">обработку персональных данных</a></label>
                        </form>
                    </div>
                </div>
            )}
            <div className="WelcomeContainer">
                <div className="intro__media">
                    <video id="video" src="../Video/StomatologyVideo.mp4" className="intro__media-vide" autoPlay muted loop></video>
                </div>
                <div className="intro__content">
                    <h1>
                        Мы дарим скидку 10% за отзыв
                    </h1>
                    <p>
                        Наши врачи - профессионалы своего дела
                    </p>
                    <button onClick={HandleOpenNote}>Записаться на прием</button>
                </div>
            </div>
        </div>
    )
}

export default FirstContainer;
