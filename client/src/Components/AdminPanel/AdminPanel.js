import React, { useState } from "react";
import axios from "axios";

import "./adminPanel.css";
import AdminCallBack from "./CallBack/AdminCallBack";
import AdminComment from "./Comment/AdminComment";
import Pictures from "./Pictures/Pictures";

const AdminPanel = () => {
  const [btn, setBtn] = useState('');
  const [auth, setAuth] = useState(false);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    const data = {
      login: login,
      password: password,
    }

    console.log(data);

    axios.post("http://45.12.72.31:8082/checkAuth", data)
    .then(function(response) {
      setAuth(true);
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  return (
    <div className="admin-panel">
      {!auth ? (
        <div className="auth">
          <form onSubmit={handleSubmitForm} className="auth-form">
            <h2>Вход</h2>
            <input className="login" name="login" placeholder="Логин" id="login" required></input>
            <input className="password" name="password" placeholder="Пароль" id="password" required></input>
            <button type="submit">Войти</button>
          </form>
        </div>
      ) : (
        <div className="AdminTitle">
          <h2>Панель администратора</h2>
          {btn === 'до/после' ? (
            <Pictures setBtn={setBtn} />
          ) : btn === 'обратный звонок' ? (
            <AdminCallBack setBtn={setBtn} />
          ) : btn === 'комментарии' ? (
            <AdminComment setBtn={setBtn} />
          ) : btn === '' ? (
            <div className="data-list" style={{height: "50vh", width:"100%", marginLeft:"auto", marginRight:"auto"}}>
              <button onClick={() => { setBtn('обратный звонок') }} style={{width:"200px"}}>Обратный звонок</button>
              <button onClick={() => { setBtn('комментарии') }} style={{width:"200px"}}>Комментарии</button>
              <button onClick={() => { setBtn('до/после') }} style={{width:"200px"}}>До/После</button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
