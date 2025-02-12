import {FC} from 'react';
import { IconProps } from "../../types/commonTypes";

export const UploadIcon: FC<IconProps> = props => {
    const {
        className,
        color = '#555555',
        height = 32,
        width = 32,
        onClick
    } = props;

    return (
        <svg fill={color} width={width} height={height} className={className}
             onClick={onClick} version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920"
             xmlSpace="preserve"
        >
            <path
                d="m807.186 686.592 272.864 272.864H0v112.94h1080.05l-272.864 272.978 79.736 79.849 409.296-409.183-409.296-409.184-79.736 79.736ZM1870.419 434.69l-329.221-329.11C1509.688 74.07 1465.979 56 1421.48 56H451.773v730.612h112.94V168.941h790.584v451.762h451.762v1129.405H564.714v-508.233h-112.94v621.173H1920V554.52c0-45.176-17.619-87.754-49.58-119.83Zm-402.181-242.37 315.443 315.442h-315.443V192.319Z"
                fillRule="evenodd"/>
        </svg>
    );
}