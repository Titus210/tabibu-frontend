import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps {
    buttonName?: string;
    bgColor?: string;
    textColor?: string;
    mdBgColor?: string;
    pageLink?: string;
    onClick?: () => void;
    type?: "submit" | "reset" | "button";
}

const PrimaryButton: React.FC<ButtonProps> = ({ buttonName, bgColor, onClick, type, textColor , pageLink}) => {

    const backgroundClass = bgColor ? `bg-${bgColor}` : 'bg-blue';
    const hoverClass = bgColor ? `hover:bg-${bgColor}` : 'hover:bg-blue';
    const textClass = textColor ? `text-${textColor}` : 'text-white';

    return (
        <div className='flex items-center justify-center'>
            <Link to={pageLink || '#'}>
                <button
                    className={`${backgroundClass} ${hoverClass} ${textClass} font-bold py-2 px-4 rounded-md w-full md:w-auto`}
                    onClick={onClick}
                    type={type || "button"}
                >
                    {buttonName || 'Submit'}
                </button>
            </Link>
        </div>
    );
}

export { PrimaryButton };