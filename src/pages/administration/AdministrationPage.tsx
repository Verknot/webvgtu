import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers, setUserRole } from '../../services';
import {RoutesPath} from "../../constants/commonConstans";
import {Layout} from "../../components/layouts";
import {UsersList} from "../../components/usersList/UsersList";
import {Button} from "../../components";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxToolkitHooks";

export const AdministrationPage: FC = () => {
    const { users } = useAppSelector((state) => state.administration);
    const { accessToken, role } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(accessToken) {
            if(role === 'user' || role === 'manager' || !role) {
                navigate(RoutesPath.NoPermissions);
            } else {
                dispatch(getUsers());
            }
        } else {
            navigate(RoutesPath.Login);
        }
    }, [accessToken, role, navigate, dispatch]);

    const setAdminRoleHandler = (id: number) => {
        dispatch(setUserRole({ userId: id, role: "admin" }));
    };

    const setManagerRoleHandler = (id: number) => {
        dispatch(setUserRole({ userId: id, role: 'manager' }));
    };

    const resetPermissionsHandler = (id: number) => {
        dispatch(setUserRole({ userId: id, role: 'user' }));
    };

    return (
        <Layout title="Администрирование">
            <Button text="На главную"
                    onClick={() => navigate(RoutesPath.Departments)}
                    className="navigate-btn"
                    type="primary"
            />
            <UsersList onSetAdminRole={setAdminRoleHandler}
                       onSetManagerRole={setManagerRoleHandler}
                       onResetPermissions={resetPermissionsHandler}
                       usersList={users}
            />
        </Layout>
    );
};