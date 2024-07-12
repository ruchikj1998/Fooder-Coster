import React from 'react'
import { RES_IMAGE_URL } from '../utils/constants';

export default function MenuItems({ itemCard }) {
    const { info } = itemCard.card;
    return (
        <div className='flex w-full justify-between border-b-2 border-gray-200 my-4'>
            <div className='w-10/12 text-left'>
                <span className=''>{info.name}</span>
                <span> - Rs {info.price ? info.price / 100 : info.defaultPrice / 100}</span>
                <p className='text-xs mt-2'>{info.description}</p>
            </div>

            <div className='w-2/12 object-contain'>
                <img src={RES_IMAGE_URL + info.imageId} className='m-2 rounded-md' />
            </div>
        </div>
    )
}
