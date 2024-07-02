import React, { useState, useEffect } from 'react';
import { SWIGGY_MENU_API } from '../utils/constants';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

export default function RestaurantMenu() {

    const [resInfo, setResInfo] = useState(null);
    const {resID} = useParams();

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const data = await fetch("https://corsproxy.io/?" + SWIGGY_MENU_API + resID);
            const jsonResponse = await data.json();
            setResInfo(jsonResponse?.data)
            console.log(jsonResponse?.data)
        } catch (error) {
            console.log(error);
        }
    }

    if (resInfo === null) return <Shimmer />;
    console.log(resInfo);

    const { name, avgRating, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(itemCards);
    return (
        <div className='menu'>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - Rs {costForTwoMessage}</p>

            <h3>Menu</h3>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>
                    {item.card.info.name} - Rs {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
                    </li>)}
            </ul>
        </div>
    )
}
