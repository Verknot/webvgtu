import {FC, useState} from "react";
import {Button, TextField} from "../../components";
import {WidgetLayout} from "../../components/layouts";
import "./loginPageStyle.scss"

export const LoginPage: FC = () => {
    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const loginChangedHandler = (value: string)=> {
        setLogin(value);
    }

    const passwordChangedHandler = (value: string)=> {
        setPassword(value);
    }

    const loginHandler = () => {
        console.log({
            login,
            password
        })
    }

    const toRegistrationHandler = () => {
        console.log({
            login,
            password
        })
    }

    return (
        <WidgetLayout>
            <div className="login-page__form">
                <div className="login-page__title">Вход</div>
                <div className="login-page__fields">
                    <TextField labelText="Логин" value={login} type="text" onChange={loginChangedHandler} />
                    <TextField labelText="Пароль" value={password} type="password" onChange={passwordChangedHandler} />
                </div>
                <div className="login-page__actions">
                    <Button text = "Войти" onClick={loginHandler} type="primary"/>
                    <Button text = "Зарегистрироваться" onClick={toRegistrationHandler} type="secondary"/>
                </div>

            </div>
        </WidgetLayout>
    )
}