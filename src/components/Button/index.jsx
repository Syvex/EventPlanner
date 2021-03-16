import React from 'react';
import './index.css';

const Button = ({children, onClick}) => (
    <button onClick={onClick} className='basic-button'>
        {children}
    </button>
)

export default Button