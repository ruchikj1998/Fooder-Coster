import React from 'react';
import { RES_IMAGE_URL } from '../utils/constants';

export default function ResCards(props) {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
    return (
        <div data-testid="res-card" className="card rounded-md bg-gray-200 p-2 m-2 w-72 hover:bg-gray-400">
            <div className='w-full'>
                <img className='mb-4 w-full object-cover size-60 rounded-md' src={RES_IMAGE_URL + cloudinaryImageId} />
            </div>
            <div className='h-[180px] text-center'>
                <h3 className='font-bold'>{name}</h3>
                <p>{cuisines.join(", ")}</p>
                <p>{avgRating} stars</p>
                <p>{costForTwo}</p>
                <p>{sla.slaString}</p>
            </div>
        </div>
    );
}


// Higher Order Component (Component which takes a Component as a request and upgrades it and returns a Component)
export const promotedResCards = (ResCards) => {
    return (props) => {
        return (
            <div>
                <label className='absolute bg-black text-white p-2 rounded-md'>Promoted</label>
                <ResCards {...props} />
            </div>
        )
    }
}

