import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MenuItems from './MenuItems';
import { clearCart } from '../utils/cartSlice';

export default function Cart() {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className='text-center m-2 p-4 m-auto container'>
            <h1 className='text-2xl font-bold'>Cart</h1>
            <button
                onClick={handleClearCart}
                className='text-right bg-black rounded-md text-white m-2 p-2'>Clear Cart</button>
            <div>
                {
                    cartItems.map((item) => {
                        return <MenuItems key={item.id} itemCard={item} />
                    })
                }
            </div>
        </div>
    )
}
