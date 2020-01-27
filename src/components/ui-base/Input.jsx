import React from 'react';

export default ({onChange,...props}) => {
    return (
        <input type="text" onChange={onChange} {...props} />
    );
}