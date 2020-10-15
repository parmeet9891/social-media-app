import React from 'react';
import './Error.css';

const Error = ({message, err}) => {
    return (
            <div className ={err === 'Y' ? 'error': 'success'}>
                <p style = {{textAlign:'center', alignItems: 'center'}}>{message}</p>
            </div>
    )
}

export default Error;