import {FC, useState} from "react";
import { EmployeesListProps} from "./EmployeesListProps";
import "./employeesListStyles.scss";
import clsx from "classnames";
import {PencilIcon, TrashIcon} from "../../assets/icons";

export const EmployeesList: FC<EmployeesListProps> = props => {
    const { employeesList, onItemClick } = props;
    const [selectedUser, setSelectedUser] = useState(0);

    const employeeClickHandler = (id: number) =>{
        setSelectedUser(id);
        onItemClick && onItemClick(id);
    }

    const isSelected = (id: number) => selectedUser === id;

    return (<div>
        {employeesList.map(user =>{
            return(<div key = {user.id}
                        className={clsx("empl-list__item", {"empl-list__item_selected" : isSelected(user.id)})}
                        onClick= {() => employeeClickHandler(user.id)} >
                <div className="empl-list__item_fio">
                    <span>{`${user.lastName} ${user.firstName} ${user.middleName ?? ''}`.trim()}</span>
                </div>
                <div className="empl-list__item_actions">
                    <PencilIcon width={18} height={18}/>
                    <TrashIcon width={18} height={18}/>
                </div>
            </div>)
        })}
    </div>);
}