import React from 'react'
import { useState } from 'react';
import ResCards from './ResCards';
import resData from '../utils/mokeData';

export default function Body() {

    const [resList, setResList] = useState(resData);

    function filterClick(e) {
        const baseRatings = 4.0;
        let filteredList = resList.filter((restraurant) => restraurant.info.avgRating > baseRatings);
        console.log(resList);
        setResList(filteredList);
    }

    return (
        <div className="bodyContainer">
            <div className="filter">
                <button className='filter-btn' onClick={filterClick} >Top rated restaurants</button>
            </div>
            <div className="resContainer">
                <div className="resCards">
                    {
                        resList.map((restaurant) => {
                            return (<ResCards key={restaurant.info.id} resData={restaurant} />);
                        }
                        )
                    }
                </div>
            </div>
        </div>
    )
}
