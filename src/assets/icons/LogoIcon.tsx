import {FC} from 'react';

interface IconProps {
    width?: number | string;
    height?: number | string;
    color?: string;
    className?: string;
    onClick?: () => void;
}

export const LogoIcon: FC<IconProps> = props => {
    const {
        className,
        color = '#ffffff',
        height = 40,
        width = 40,
        onClick
    } = props;

    return (
    <svg width={width} height={height} className={className} onClick={onClick} enableBackground="new 796 796 200 200" viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9.25 3.75C9.25 4.44036 8.69036 5 8 5C7.30964 5 6.75 4.44036 6.75 3.75C6.75 3.05964 7.30964 2.5 8 2.5C8.69036 2.5 9.25 3.05964 9.25 3.75ZM12 8H9.41901L11.2047 13H9.081L8 9.97321L6.91901 13H4.79528L6.581 8H4V6H12V8Z" fill="#000000"/>
        </svg>
    );
}