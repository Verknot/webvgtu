import { AccessTokenKey } from "../constants/commonConstans"
import { DownloadFileResponseDto, UploadFileResponseDto} from "../types/apiTypes";
import { AxiosInstance} from "./axiosInstance";


const { axiosDelete, axiosPost} = AxiosInstance(sessionStorage.getItem(AccessTokenKey) ??'');
const uploadFile = async(uploadFileData: UploadFileResponseDto) =>
        await axiosPost('/Files/upload', uploadFileData) as void;

const downloadFile = async (addEmployeeData: DownloadFileResponseDto) =>
        await axiosPost('/Files/download', addEmployeeData) as Blob;


const deleteFile = async(id: string | number) =>
    await axiosDelete(`/Files/delete?id=${id}`) as void;

export const FilesApi = {
    uploadFile,
    deleteFile,
    downloadFile
}
