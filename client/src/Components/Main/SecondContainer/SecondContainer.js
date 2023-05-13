import React from "react";
import "./SecondContainer.css"
import Carousel from "./Carousel/Carousel";

const SecondContainer = () => {
    return (
        <div>
        {window.innerWidth < 900 ?
            <Carousel />
            :
        <div className="secondContainer">

            <div className="box1">
                <h1>
                    Наши специалисты
                </h1>
                <p>
                    Наших пациентов мы лечим как лечили бы себя, своих родственников или друзей.
                    Специалисты нашей клиники безгранично любят свою профессию и ответственно
                    подходят к своей работе.
                </p>
                <a href="/doctors">
                    <button>
                        Подробнее о команде {">>"}
                    </button>
                </a>
            </div>
            <div className="box2">
                <img src="../../IMG/DSC02687-2.jpg" />
                <h3>
                    Куашева Фатима Магометовна
                </h3>
                <p>
                    Терапевт
                </p>
            </div>
            <div className="box3">
                <img src="../../IMG/DSC02747-2.jpg" />
                <h3>
                    Иванов Иван Иванович
                </h3>
                <p>
                    Терапевт
                </p>
            </div>
            <div className="box4">
                <img src="../../IMG/DSC02599-2.jpg" />
                <h3>
                    Иванов Иван Иванович
                </h3>
                <p>
                    Терапевт
                </p>
            </div>
            <div className="box5">
                <img src="../../IMG/DSC02705-2.jpg" />
                <h3>
                    Иванов Иван Иванович
                </h3>
                <p>
                    Терапевт
                </p>
            </div>
        
        </div>}
        </div>
    )
}

export default SecondContainer;
