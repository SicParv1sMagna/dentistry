import React from 'react'
import './documents.css'


const Documents = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('DOC/Документы.zip').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Документы.zip';
                alink.click();
            })
        })
    }

    return (
        <div className="backgrDoc">
            <div className="documents">
                <div className="titleDoc">
                    <h1>Документы</h1>
                </div>
                <div>
                    <ul class="breadcrumb">
                        <li><a href="/">Главная</a></li>
                        <li>Документы</li>
                    </ul>
                </div>
                <div className="textDoc">
                    <p>
                        Уважаемые пациенты, в этом разделе вы можете ознакомиться с основными документами, связанными с работой клиники "Формула Улыбки".
                        Свяжитесь с нами, если у вас возникнут вопросы. Свяжитесь с нами, если у вас возникнут вопросы.
                    </p>
                    <a href="#"><button onClick={()=>{onButtonClick()}}>Скачать документы</button></a>
                </div>
                <div className="cardDocum">
                    <div className="noPhoto">
                        <div className="stickDocum">
                            <h1>
                                Документы
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Documents