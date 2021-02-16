import React, { Fragment } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.scss';
import crossIcon from '../../../assets/close-icon.svg';

const Modal = props => {
	return(
		<Fragment>
			<Backdrop clicked={props.closeModal}></Backdrop>
			<div className={`CustomModal ${props.customClass}`}  style={props.style}>
				<div className='close-icon'>
					<img onClick={props.closeModal} src={crossIcon} className='icon-img' alt='crossIcon'/>
				</div>
					{props.children}
			</div>
		</Fragment>
	)
}

export default Modal
