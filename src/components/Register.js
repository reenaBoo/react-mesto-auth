import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register({onSubmit}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeEmail(evt) {
        setEmail(evt.target.value)
    }

    function handleChangePassword(evt) {
        setPassword(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onChange({
            email,
            password
        })
    }

    return {
        <form className="form" onSubmit={handleSubmit}>
            <h3 className="form__title">Регистрация</h3>
            <input className="form__input" type="email" placeholder="Email" required value={email || ''} onChange={handleChangeEmail}/>
            <input className="form__input" type="text" placeholder="Пароль" required  value={password || ''} onChange={handleChangePassword}/>
            <button className="form__button">Зарегистрироваться</button>
            <div className="form__text-container">
                <p className="form__caption">Уже зарегистрированы?</p>
                <Link to="/sign-up" className="form__caption">Войти</Link>
            </div>
        </form>
    }
}
export default Register;