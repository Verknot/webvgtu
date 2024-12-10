import { AccessTokenKey} from "../constants/commonConstans";
import {
    AddEducationResponseDto,
    AddEmployeeResponseDto,
    AddWorkExperienceResponseDto,
    UpdateEmployeeResponseDto
} from "../types/apiTypes";

import { AxiosInstance} from "./axiosInstance";

const { axiosDelete, axiosPut, axiosPost } = AxiosInstance(sessionStorage.getItem(AccessTokenKey) ?? '');

const addEmployee = async (addEmployeeData: AddEmployeeResponseDto) =>
    await axiosPost("/Employees/employee", addEmployeeData) as number;

const editEmployee = async (editEmployeeData: UpdateEmployeeResponseDto) =>
    await axiosPut("/Employees/employee", editEmployeeData) as void;

const deleteEmployee = async (id: string | number) =>
    await axiosDelete(`/Employees/employee?id=${id}`) as void;

const addWorkExperience = async (workExperienceData: AddWorkExperienceResponseDto) =>
    await axiosPost("/Employees/workexperience", workExperienceData) as number;

const deleteWorkExperience = async (id: string | number) =>
    await axiosDelete(`/Employees/workexperience?id${id}`) as void;

const addEducation = async (addEducationData: AddEducationResponseDto) =>
    await axiosPost("/Employees/education", addEducationData) as number;

const deleteEducation = async (id: string | number) =>
    await axiosDelete(`/Employees/education?id${id}`) as void;

export const EmployeeApi = {
    addEmployee,
    editEmployee,
    deleteEmployee,
    addWorkExperience,
    deleteWorkExperience,
    addEducation,
    deleteEducation
}