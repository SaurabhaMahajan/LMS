import React from 'react';

import './Backdrop.css';

const Backdrop = (props) => (
    <div className="ModalBackdrop" style={props.style}></div>
);

export default Backdrop;