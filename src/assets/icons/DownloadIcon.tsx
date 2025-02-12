import {FC} from 'react';
import { IconProps } from "../../types/commonTypes";

export const DownloadIcon: FC<IconProps> = props => {
    const {
        className,
        color = '#313131',
        height = 24,
        width = 24,
        onClick
    } = props;

    return (
        <svg fill={color} width={width} height={height} className={className}
             onClick={onClick} version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920"
             xmlSpace="preserve">
            <path d="M533.333 586.667v106.666h-320v479.997h.422l233.6 213.34H1472.64l233.6-213.34h.43V693.333h-320V586.667h352c41.23 0 74.66 33.429 74.66 74.666v511.997H1856c35.35 0 64 28.66 64 64V1856c0 35.35-28.65 64-64 64H64c-35.346 0-64-28.65-64-64v-618.67c0-35.34 28.654-64 64-64h42.667V661.333c0-41.237 33.429-74.666 74.666-74.666h352ZM172.378 1280h-65.711v533.33H1813.33V1280h-65.71l-233.6 213.33H405.978L172.378 1280ZM1013.33 0v1044.579l228.96-228.958 75.42 75.425L960 1248.76 602.288 891.046l75.424-75.425 228.955 228.955V0h106.663Z" fillRule="evenodd"/>
        </svg>
    );
}