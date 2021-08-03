import React from 'react'

const Modal = (setFalse) => {
    const toggleModal = (e) =>{
        e.target.classList.contain()
        setFalse(false)
    }
    return (
        <div className="modal" onClick={toggleModal}>
            <div className="modal-body">

            </div>
        </div>
    )
}

export default Modal
