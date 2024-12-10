import {FC, useState} from "react";
import "./registrationPageStyles.scss";
import {WidgetLayout} from "../../components/layouts";
import {Button, TextField} from "../../components";
import {RoutesPath} from "../../constants/commonConstans";
import {useNavigate} from "react-router-dom";
import {Auth} from "../../api";
import {AxiosError} from "axios";

type FormFieldsNames = "login" | "password"| "repeatPassword" | "lastName" |"firstName" |"midName";

interface  RegistrationForm {
    login: string;
    password: string;
    repeatPassword: string;
   // lastName: string;
   // firstName: string;
   // midName?: string;
}

export const RegistrationPage: FC = () => {
    const [formFields, setFormFields] = useState<RegistrationForm>();
    const [ errorMessage, setErrorMessage] = useState<string>();
    const navigate = useNavigate();
    const { signUp } = Auth;

    const changeFieldValue = (value: string | undefined, fieldName: FormFieldsNames) =>{
        setFormFields(prev => {
            return{
                ...prev,
                [fieldName]:value
            } as RegistrationForm
        })
    };

    const goToLogin = () => {
      navigate(RoutesPath.Login);
    }

    const registrationHandler = () =>{
        if(!formFields?.login || !formFields?.password){
            setErrorMessage('Не задан логие или пароль');
            return;
        }

        if(formFields?.password !== formFields?.repeatPassword){
            setErrorMessage("пароль и повторенный пароль не совпадают!");
            return;
        }

        signUp({
            login: formFields.login,
            password: formFields.password
        }).then(() => {
            navigate(RoutesPath.Departments);
        }).catch((err) => {
            setErrorMessage((err as AxiosError)?.message)
        })
    }


    return(<div>
        <WidgetLayout>
            <div className="reg-page__form">
                <h3 className="reg-page__title">Регистрация</h3>
                <div className="reg-page__fields">
                    <TextField labelText="Логин" value={formFields?.login} type="text" onChange={(value) => changeFieldValue(value, "login")} />
                    <TextField labelText="Пароль" value={formFields?.password} type="password" onChange={(value) => changeFieldValue(value, 'password')} />
                    <TextField labelText="Повторите пароль" value={formFields?.repeatPassword} type="password" onChange={(value) => changeFieldValue(value, 'repeatPassword')} />
                    {
                       /* <TextField labelText="Фамилия" value={formFields?.lastName} type="text" onChange={(value) => changeFieldValue(value, 'login')} />
                        <TextField labelText="Имя" value={formFields?.firstName} type="text" onChange={(value) => changeFieldValue(value, 'login')} />
                        <TextField labelText="Отчество" value={formFields?.midName} type="text" onChange={(value) => changeFieldValue(value, 'login')} /> */
                    }
                    {errorMessage && (<span style={{color: 'red'}}>{errorMessage}</span> )}
                </div>
                <div className="reg-page__actions">
                    <Button text = "Войти" onClick= {registrationHandler} type="primary"/>
                    <Button text = "Зарегистрироваться" onClick={goToLogin} type="secondary"/>
                </div>

            </div>
        </WidgetLayout>
    </div>);
}