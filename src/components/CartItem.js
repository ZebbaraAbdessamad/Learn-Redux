import React from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { decrease, increase, removeItem } from '../features/cartSlice' 
import { useDispatch , useSelector} from 'react-redux';
const CartItem = ({id, img , title , price , amount }) => {
    const dispatch =useDispatch()
  return (
    <article>
        <img src={img} alt={title} />
        <div>
            <h4>{title}</h4>
            <h4 className='item-price'>{price}</h4>
            <button className='remove-btn' onClick={()=> dispatch(removeItem(id))}>remove</button>
        </div>
        <div className='buttons-add'>
            <button className='amount-btn'  onClick={()=>{
                if(amount === 1 ){
                    dispatch(removeItem(id))
                }else{
                    dispatch(decrease(id))
                }
            }}>
                <AiFillCaretDown/>
            </button>
            <p className='amount'>{amount}</p>
            <button className='amount-btn' onClick={()=> dispatch(increase(id))}>
                <AiFillCaretUp/>
            </button>
        </div>
  
    </article>
  )
}

export default CartItem