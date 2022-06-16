import React from 'react';

// props
// state
// children - wrapping components

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;