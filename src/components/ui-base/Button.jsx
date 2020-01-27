import React from 'react';

export default ({onClick, label})=> {
    return (
        <button onClick={onClick}>{label}</button>
    );
}