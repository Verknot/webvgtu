import {FC} from 'react';
import {IconProps} from "../../types/commonTypes";

export const PencilIcon: FC<IconProps> = props => {
    const {
        className,
        color = '#313131',
        height = 24,
        width = 24,
        onClick
    } = props;

    return (
        <svg width={width} height={height} className={className}  stroke={color} fill={color} onClick={onClick} viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg">

            <title>edit_cover [#1481]</title>
            <desc>Created with Sketch.</desc>
            <defs>

            </defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-419.000000, -359.000000)" fill="#000000">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path
                            d="M384,209.210475 L384,219 L363,219 L363,199.42095 L373.5,199.42095 L373.5,201.378855 L365.1,201.378855 L365.1,217.042095 L381.9,217.042095 L381.9,209.210475 L384,209.210475 Z M370.35,209.51395 L378.7731,201.64513 L380.4048,203.643172 L371.88195,212.147332 L370.35,212.147332 L370.35,209.51395 Z M368.25,214.105237 L372.7818,214.105237 L383.18415,203.64513 L378.8298,199 L368.25,208.687714 L368.25,214.105237 Z"
                            id="edit_cover-[#1481]">

                        </path>
                    </g>
                </g>
            </g>
        </svg>
    );
}