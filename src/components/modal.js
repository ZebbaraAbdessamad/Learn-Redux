import React from 'react'
import { useDispatch , useSelector} from 'react-redux';
import {clearCart} from '../features/cartSlice'
import { closeModal} from '../features/modalSlice';

const  Modal = () => {
    const dispatch = useDispatch();
    return (
        <div className="modal">
        <div className="modal-content">
          <h3>Confirmation</h3>
          <p>Are you sure you want to clear all?</p>
          <div className="button-container">
            <button className="clear-btn" onClick={()=>{
                  dispatch(clearCart())
                dispatch(closeModal())
            }}>Clear All</button>
            <button className="cancel-btn"onClick={()=>dispatch(closeModal())}>Cancel</button>
          </div>
        </div>
      </div>
    );
}

export default Modal;