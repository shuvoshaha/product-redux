import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SetProductModal } from '../redux/actions/productActions'

const Modal = () => {
    const state = useSelector(state => state.product)
    const dispatch = useDispatch(SetProductModal(false))


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
