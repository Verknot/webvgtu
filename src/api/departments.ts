import { AccessTokenKey} from "../constants/commonConstans";
import {AxiosInstance} from "./axiosInstance";
import {AddDepartmentResponseDto, EditDepartmentResponseDto} from "../types/apiTypes";
import {Department} from "../types/models";


const { axiosDelete, axiosGet, axiosPut, axiosPost } = AxiosInstance(sessionStorage.getItem(AccessTokenKey) ?? '');

const getDepartments = async () =>
    await axiosGet("/Departments") as Array<Department>;

const addDepartment = async(addDepartmentData: AddDepartmentResponseDto) =>
    await axiosPost("/Departments/department", addDepartmentData) as number;

const editDepartment = async (editDepartmentData: EditDepartmentResponseDto) =>
    await axiosPut("/Departments/department", editDepartmentData) as void;

const deleteDepartment = async (id: string | number) =>
    await axiosDelete(`/Departments/department?id=${id}`) as void;

export const Departments = {
    addDepartment,
    editDepartment,
    deleteDepartment,
    getDepartments
}