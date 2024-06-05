import React from 'react';
import { RES_IMAGE_URL } from '../utils/constants';

export default function ResCards(props) {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
    return (
        <div className="card">
            <img src={RES_IMAGE_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>{avgRating} stars</p>
            <p>{costForTwo}</p>
            <p>{sla.slaString}</p>

        </div>
    );
}
