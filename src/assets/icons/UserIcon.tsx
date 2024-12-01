import {FC} from 'react';

interface IconProps {
    width?: number | string;
    height?: number | string;
    color?: string;
    className?: string;
    onClick?: () => void;
}

export const UserIcon: FC<IconProps> = props => {
    const {
        className,
        color = '#ffffff',
        height = 40,
        width = 40,
        onClick
    } = props;

    return (
        <svg width={width} height={height} viewBox="0 0 16 16" enableBackground="new 796 796 200 200" className={className} onClick={onClick} fill={color} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M8 16L3.54223 12.3383C1.93278 11.0162 1 9.04287 1 6.96005C1 3.11612 4.15607 0 8 0C11.8439 0 15 3.11612 15 6.96005C15 9.04287 14.0672 11.0162 12.4578 12.3383L8 16ZM3 6H5C6.10457 6 7 6.89543 7 8V9L3 7.5V6ZM11 6C9.89543 6 9 6.89543 9 8V9L13 7.5V6H11Z"
                  fill="#000000"/>
        </svg>
    );
}