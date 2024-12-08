import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { UsersList } from '../../components/usersList/UsersList';
import { User } from '../../types/models';
import { Button} from '../../components';
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from "../../constants/commonConstans";
import './administrationPageStyles.scss';

const fakeUsersListData: Array<User> = [{
    id: 1,
    login: 'user1',
    password: '1234',
    role: 'user'
},{
    id: 2,
    login: 'user2',
    password: '12345',
    role: 'manager'
},{
    id: 3,
    login: 'user3',
    password: '123456',
    role: 'admin'
}];

export const AdministrationPage = () => {
    const  [users, setUsers] = useState<Array<User>>([]);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setUsers(fakeUsersListData);
        }, 500);
    }, []);

    const setAdminRoleHandler = (id: number) => {
        setUsers(prev => {
            const cloneArray = [...prev];
            const currentUser = cloneArray.find(u=>u.id === id);
            if(currentUser) {
                currentUser.role = 'admin';
            }
            return cloneArray;
        });
    }

    const setManageRoleHandler = (id: number) => {
        setUsers(prev => {
            const cloneArray = [...prev];
            const currentUser = cloneArray.find(u=>u.id === id);
            if(currentUser) {
                currentUser.role = 'manager';
            }
            return cloneArray;
        });
    }

    const resetPermissionsHandler = (id: number) => {
        setUsers(prev => {
            const cloneArray = [...prev];
            const currentUser = cloneArray.find(u=>u.id === id);
            if(currentUser) {
                currentUser.role = 'user';
            }
            return cloneArray;
        });
    }

    return (
        <Layout title="Администрирование">
            <Button text="На главную"
                    onClick={() => navigate(`/${RoutesPath.Departments}`)}
                    className="navigate-btn"
                    type="primary"
            />
            <UsersList onSetAdminRole={setAdminRoleHandler}
                       onSetManagerRole={setManageRoleHandler}
                       onResetPermissions={resetPermissionsHandler}
                       usersList={users}
            />
        </Layout>
    );
}