import {FC, useEffect, useState} from "react";
import {Layout} from "../../components/layouts";
import "./departmentsPageStyle.scss"
import {Button, DropDown, EmployeesList, Dialog, TextField} from "../../components";
import { Department, Employee } from "../../types/models";
import {DropDownItem} from "../../components/dropDown/DropDownProps";


const fakeEmployeesData = [
    {id: 1, lastName: "Иванов", firstName: "Иван", middleName: "Иванович", birthDate: new Date().toISOString(), email: 'ivanov2@mail.ru', phoneNumber: '8-800-535-35-35' },
    {id: 2, lastName: "Иванов1", firstName: "Иван1", birthDate: new Date().toISOString(), email: 'ivanov@mail.ru', phoneNumber: '8-800-535-35-35'},
    {id: 3, lastName: "Иванов2", firstName: "Иван2", middleName: "Иванович", birthDate: new Date().toISOString(), email: 'ivanovdasddsa@mail.ru', phoneNumber: '8-800-535-35-35'},
    {id: 4, lastName: "Иванов3", firstName: "Иван3", middleName: "Иванович", birthDate: new Date().toISOString(), email: 'ivanov1@mail.ru', phoneNumber: '8-800-535-35-35'},
    {id: 5, lastName: "Иванов5", firstName: "Иван4"}

]

const fakeDepartmentsData = [
    { id: 1, name: 'Отдел 1', employees: [] },
    { id: 2, name: 'Отдел 2', employees: fakeEmployeesData },
    { id: 3, name: 'Отдел 3', employees: [] },
] as Array<Department>;

export const DepartmentsPage: FC = () =>{

    const [departmentsData, setDepartmentsData] = useState<Array<Department>>([]);
    const [selectedDepartmentId, setSelectedDepartmentId] = useState<number>();
    const [selectedEmployeeId, setSelectedEmployeeId] = useState<number>();
    const [employeesData, setEmployeesData] = useState<Array<Employee>>([])
    const [showEmployeeDialog,  setShowEmployeeDialog] = useState(false);
    const [userActionMode, setUserActionMode] = useState<'create' | 'edit'>('create');
    const[userToEdit, setUserToEdit] = useState(0);
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [midleName, setMidleName] = useState('');

    useEffect(() => {
        setTimeout(()=> {
            setDepartmentsData(fakeDepartmentsData);
            if(Array.isArray(fakeDepartmentsData) && fakeDepartmentsData.length) {
                setSelectedDepartmentId(fakeDepartmentsData[0].id);
            }
        }, 2000);
    }, []);


    useEffect(() => {
        const selectedDepartment = departmentsData.find(d => d.id === selectedDepartmentId);
        setEmployeesData(selectedDepartment ? selectedDepartment.employees : []);
        setSelectedEmployeeId(undefined);
    }, [departmentsData, selectedDepartmentId]);

    useEffect(() => {
        clearEmployeeDialogFields();
        if (userActionMode === 'edit') {
            const employee = userActionMode === 'edit'
                ? employeesData.find(e => e.id === userToEdit)
                : undefined;

            setLastName(employee?.lastName ?? '');
            setFirstName(employee?.firstName ?? '');
            setMidleName(employee?.midleName ?? '');
        }
    }, [employeesData, userActionMode, userToEdit])

    const clearEmployeeDialogFields = () => {
        setLastName('');
        setFirstName('');
        setMidleName('');
    }

    const  createEmployeeHandler = () => {
        setUserActionMode('create');
        setShowEmployeeDialog(true);
    }

    const editEmployeeHandler = (id: number) => {
        setUserActionMode('edit');
        setUserToEdit(id);
        setShowEmployeeDialog(true);
    }

    const closeEmployeeDialogHandler = () => {
        setShowEmployeeDialog(false);
        clearEmployeeDialogFields();
    }

    const departmentChangeHandler = (id?: string) => {
        const _id: number | undefined = !id ? undefined : +id;
        setSelectedDepartmentId(_id);
    }

    const  onEmployeeSelectedHandler = (id: number) => {
        setSelectedEmployeeId(id);
    }

    const userDialogContentRenderer = () => {
        return (
            <>
                <TextField labelText="Фамилия" value={lastName} onChange={(val) => setLastName(val)}/>
                <TextField labelText="Имя" value={firstName} onChange={(val) => setFirstName(val)}/>
                <TextField labelText="Отчество" value={midleName} onChange={(val) => setMidleName(val)}/>
            </>
        );
    }

    return (
        <Layout>
            <Dialog title={userActionMode !== 'edit' ? 'Добавить сотрудника' : 'Изменить сотрудника'}
                    open={showEmployeeDialog}
                    onSave={() => {}}
                    onCancel={closeEmployeeDialogHandler}
            >
                {userDialogContentRenderer()}
            </Dialog>
            <div className="dep-page">
                <div className="dep-page__users-list-container">
                    <DropDown items={departmentsData.map(dd => {
                        return {
                            text: dd.name,
                            value: dd.id.toString()
                        } as DropDownItem;
                    })}
                              label="Отделы:"
                              selectedChanged={(val) => departmentChangeHandler(val)}
                    />
                    <EmployeesList employeesList={employeesData}
                                   onItemClick={(id) => onEmployeeSelectedHandler(id)}
                                   onItemDelete={(id) => console.log('delete', id)}
                                   onItemEdit={editEmployeeHandler}
                    />
                    <Button text ="Добавить сотрудника" className="dep-page_add-user-btn" onClick={createEmployeeHandler}/>
                </div>
                <div>
                    <Dialog title={userActionMode !== 'edit' ? 'Добавить сотрудника' : 'Изменить сотрудника'}
                            open={showEmployeeDialog}
                            onSave={() => {}}
                            onCancel={closeEmployeeDialogHandler}
                    >
                        {userDialogContentRenderer()}
                    </Dialog>
                    <div>
                        <span>ФИО</span>
                        <div>*</div>
                    </div>
                    <div>
                        <div>Личные данные</div>
                        <div>Данные о работе</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}