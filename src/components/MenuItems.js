import React from 'react'
import { RES_IMAGE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

export default function MenuItems({ itemCard }) {
    const info = itemCard.card ? itemCard?.card?.info : itemCard;

    const dispatch = useDispatch();

    const handleAddItem = (itemInfo) => {
        // Dispatch action
        dispatch(addItem(itemInfo))
    }

    return (
        <div className='flex w-full justify-between border-b-2 border-gray-200 my-4 pb-2'>
            <div className='w-10/12 text-left'>
                <span className=''>{info.name}</span>
                <span> - Rs {info.price ? info.price / 100 : info.defaultPrice / 100}</span>
                <p className='text-xs mt-2'>{info.description}</p>
            </div>

            <div className='w-2/12 object-contain'>
            <button 
            className='bg-black text-white p-2 rounded-md absolute'
            onClick={() => handleAddItem(info)}
            >
                Add +
            </button>
                <img src={RES_IMAGE_URL + info.imageId} className='rounded-md ' />
            </div>
        </div>
    )
}
