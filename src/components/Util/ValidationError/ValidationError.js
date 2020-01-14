import React from 'react';
import './ValidationError.css';

export default function ValidationError(props) {
    if (props) {
        return (
            <div className="error" id="validate">{props.message}</div>
        );
    }
    return <></>;
}