import React from "react";
import './Doctor.css';

const ElenaTac = () => {

    const Doc = {
        id: 1,
            img: "../../IMG/DSC02747-2.jpg",
            surname: "Таценко",
            name: "Елена",
            patronimic: "Генадьевна",
            specialization: "Ортодонт",
            docs: [],
            education: [`- Выпускница Кубанского государственного медицинского университета 2007`, <br />,
            `Специальность: «Стоматология»`, <br />,
            `- Проходила интернатуру в Кубанском государственном медицинском университете (КГМУ).
            Специальность: «Стоматология ортопедическая» `, <br />,
            `- 2007 Получила сертификат «Кубанского
            государственного медицинского университета» по специальности «Стоматология общей
            практики»`, <br />,
            `- 2007 Диплом о профессиональной переподготовке «Кубанский государственный
            медицинский университет». Специальность: «Ортодонтия» `, <br />,
            `- Получила сертификат «Кубанского
            государственного медицинского университета» по специальности «Ортодонтия»`, <br />,
            `- 2008 Диплом о
            профессиональной переподготовке «Кубанский государственный медицинский университет».
            Специальность: «Организация здравоохранения и общественного здоровья» `, <br />,
            `- Получила сертификат
            «Кубанского государственного медицинского университета» по специальности «Организация
            здравоохранения и общественного здоровья»`],
            qualification: [`Постоянно повышает свой профессионализм, посещая в г. Москве и г. Санкт-Петербурге ведущие
            зарубежные (W.Proffit (США), V.Cachifesta (Италия)), и российские (А. Тугарин, С. Попов,
            А. Тихонов) конференции и семинары.`],
            about: [`- Кандидат медицинских наук.`, <br />,`- Врач высшей категории 2022
            Член Орто-Клуба г. Краснодар и г. Ростова-на-Дону.`, <br />,
            `- Член профессионального общества
            Ортодонтов России.`],
    }

    return (
        <div className="doctorContainer">
            <h1>
                {Doc.surname} {Doc.name} {Doc.patronimic}
            </h1>
            <div className="DoctorCard">
                <div>
                    <img src={Doc.img} alt={Doc.surname}/>
                </div>
                <div>
                    <h2>Образование</h2>
                    <p>
                        {Doc.education}
                    </p>
                    <h2>Квалификация</h2>
                    <p>
                        {Doc.qualification}
                    </p>
                    <h2>О стоматологе</h2>
                    <p>
                        {Doc.about}
                    </p>
                    <a href="../DOC/Таценко Елена Геннадьевна.zip"><button>Документы</button></a>
                </div>

            </div>
        </div>
    )
};

export default ElenaTac;