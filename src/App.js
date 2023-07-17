import './App.css';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { useDispatch , useSelector} from 'react-redux';
import { calculateTotals , getCartItems } from './features/cartSlice';
import { useEffect } from 'react';
import Modal from './components/modal';



function App() {
  const {cartItems , isLoading } = useSelector((state) => state.cart);
  const {isOpen} = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getCartItems());
  },[])

  useEffect(()=>{
    dispatch(calculateTotals());
  },[cartItems])

  return (
    <main>
      <Navbar />

      {isLoading ? (
        <div className='loading'>
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
          {isOpen && <Modal />}
          <CartContainer />
        </>
      )}
    </main>
  );
}

export default App;
