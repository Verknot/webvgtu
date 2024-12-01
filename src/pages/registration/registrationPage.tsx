import {FC, useState} from "react";
import "./registrationPageStyles.scss";
import {WidgetLayout} from "../../components/layouts";
import {Button, TextField} from "../../components";
import {RoutesPath} from "../../constants/commonConstans";
import {useNavigate} from "react-router-dom";

type FormFieldsNames = "login" | "password"| "repeatPassword" | "lastName" |"firstName" |"midName";

interface  RegistrationForm {
    login: string;
    password: string;
    repeatPassword: string;
    lastName: string;
    firstName: string;
    midName?: string;
}

export const RegistrationPage: FC = () => {
    const [formFields, setFormFields] = useState<RegistrationForm>();

    const navigate = useNavigate();

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


    return(<div>
        <WidgetLayout>
            <div className="reg-page__form">
                <div className="reg-page__title">Вход</div>
                <div className="reg-page__fields">
                    <TextField labelText="Логин" value={formFields?.login} type="text" onChange={(value) => changeFieldValue(value, "login")} />
                    <TextField labelText="Пароль" value={formFields?.password} type="password" onChange={(value) => changeFieldValue(value, 'login')} />
                    <TextField labelText="Повторите пароль" value={formFields?.repeatPassword} type="password" onChange={(value) => changeFieldValue(value, 'login')} />
                    <TextField labelText="Фамилия" value={formFields?.lastName} type="text" onChange={(value) => changeFieldValue(value, 'login')} />
                    <TextField labelText="Имя" value={formFields?.firstName} type="text" onChange={(value) => changeFieldValue(value, 'login')} />
                    <TextField labelText="Отчество" value={formFields?.midName} type="text" onChange={(value) => changeFieldValue(value, 'login')} />
                </div>
                <div className="reg-page__actions">
                    <Button text = "Войти" onClick= {() => {}} type="primary"/>
                    <Button text = "Зарегистрироваться" onClick={goToLogin} type="secondary"/>
                </div>

            </div>
        </WidgetLayout>
    </div>);
}