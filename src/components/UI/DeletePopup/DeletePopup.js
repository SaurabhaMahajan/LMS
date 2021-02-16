import React, { Component } from 'react'
import Modal from '../Modal/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import './DeletePopup.css';
import Button from '../Button/Button';

class DeletePopup extends Component {
    render() {
        return (
            <Modal customClass="customClass">
                <div className="delete">
                    <div className="delete-container">
                        <div className="delete-icon">
                            <em className="delete__icon">
                                <FontAwesomeIcon icon={faQuestionCircle} size="3x" />
                            </em>
                        </div>
                        <div className="delete-text">
                            <p className="delete__what">
                                Are you sure you want to delete {this.props.item} ?
                                </p>
                            {/* <p className="delete__item">
                                {this.props.item}
                            </p> */}
                        </div>
                    </div>
                    <div className="btn-wrapper">


                        <Button btn__type="blue" clicked={this.props.onDeleteClick} altStyle={{ marginRight: "16px" }}>DELETE</Button>
                        <Button btn__type="white" clicked={this.props.onCancel}>CANCEL</Button>

                    </div>

                </div>
            </Modal>
        )
    }
}

export default DeletePopup;
