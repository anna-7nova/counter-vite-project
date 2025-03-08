import React, { ButtonHTMLAttributes } from 'react';

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({title, onClick, disabled, style}: ButtonType) => {
    return (
        <>
            <button onClick={onClick} disabled={disabled} style={style}>{title}</button>
        </>
    );
}


