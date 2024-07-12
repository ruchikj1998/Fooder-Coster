import React, { useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategories from './MenuCategories';

export default function RestaurantMenu() {

    const [showIndex, setShowIndex] = useState(0);
    const { resID } = useParams();
    const resInfo = useRestaurantMenu(resID);

    if (resInfo === null) return <Shimmer />;

    const { name, avgRating, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const menuCategories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( 
        (c) => 
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className='container text-center m-auto'>
            <h1 className='text-2xl font-bold my-4'>{name}</h1>
            <p>{cuisines.join(", ")} - Rs {costForTwoMessage}</p>

            <div className='mt-4 w-8/12 m-auto'>
            {
                menuCategories.map((categories, index) => {
                    return <MenuCategories 
                    key={categories?.card?.card?.title} 
                    categories={categories} 
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => { 
                        index === showIndex ? setShowIndex(null) : setShowIndex(index) ;
                    }}
                    />
                })
            }
            </div>
        </div>
    )
}
