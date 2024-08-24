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
    disabled?: boolean; 
}

const PrimaryButton: React.FC<ButtonProps> = ({ buttonName, bgColor, onClick, type, textColor, pageLink, disabled }) => {

    const backgroundClass = bgColor ? `bg-${bgColor}` : 'bg-blue';
    const hoverClass = disabled ? '' : (bgColor ? `hover:bg-${bgColor}` : 'hover:bg-blue');
    const textClass = textColor ? `text-${textColor}` : 'text-white';
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';

    return (
        <div className='flex items-center justify-center'>
            <Link to={disabled ? '#' : (pageLink || '#')}>
                <button
                    className={`${backgroundClass} ${hoverClass} ${textClass} ${disabledClass} font-bold py-2 px-4 rounded-md w-full md:w-auto`}
                    onClick={disabled ? undefined : onClick} // Disable click when the button is disabled
                    type={type || "button"}
                    disabled={disabled}
                >
                    {buttonName || 'Submit'}
                </button>
            </Link>
        </div>
    );
}

export { PrimaryButton };
