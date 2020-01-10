import React from 'react';
import './Button.css';

export default function Button(props) {
    return (
        <button className='util-button' type={props.type}>
            {props.content}
        </button>
    );
}