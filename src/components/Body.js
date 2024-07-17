import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import ResCards, { promotedResCards } from './ResCards';
import Shimmer from './Shimmer';
import { SWIGGY_RESTAURANT_API } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserInfoContext from '../utils/UserInfoContext';

export default function Body() {

    const [resList, setResList] = useState([]);
    const [resFilteredList, setResFilteredList] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    const {userName, setUserInformation} = useContext(UserInfoContext);

    const PromotedResCards = promotedResCards(ResCards);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const data = await fetch("https://corsproxy.io/?" + SWIGGY_RESTAURANT_API);
            const jsonResponse = await data.json();
            const restaurantList = jsonResponse?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            if (restaurantList) {
                setResList(restaurantList);
                setResFilteredList(restaurantList);
            }
            console.log("Fetched data!");
            //console.log(restaurantList)
        } catch (error) {
            console.log(error);
        }
    }

    function filterClick(e) {
        const baseRatings = 4.0;
        let filteredList = resList.filter((restaurant) => restaurant.info.avgRating > baseRatings);
        setResFilteredList(filteredList);
    }

    const searchRes = (searchText, restaurants) => {
        if (searchText !== '') {
            const filteredData = restaurants.filter((restaurant) =>
                restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setResFilteredList(filteredData);
            setErrorMessage("");
            if (filteredData?.length === 0) {
                setErrorMessage("No matches restaurant found");
            }
        } else {
            setErrorMessage("");
            setResFilteredList(restaurants);
        }
    };


    const onlineStatus = useOnlineStatus();


    if (!onlineStatus) return <h1>You are offline!!</h1>

    // Shimmer UI : Conditional rendring
    return resList?.length === 0 ? <Shimmer /> : (
        <div className="bodyContainer mt-2">
            <div className='flex justify-between'>
                <div className='searchBar'>
                    <input type='text' className='search border-dotted border-2 border-black hover:border-solid rounded-md p-2 mx-4 ' id="searchInput" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className='searchButton p-2 px-4 bg-green-400 m-2 rounded-md' onClick={() => {
                        // user click on button searchRes function is called
                        searchRes(searchText, resList);
                    }}>Search</button>
                </div>
                <div className="filter">
                    <button className='filter-btn p-2 px-4 bg-gray-500 text-gray-50 m-2 rounded-md' onClick={filterClick} >Top rated restaurants</button>

                    <input type='text' 
                    className='user border-dotted border-2 border-black hover:border-solid rounded-md p-2 mx-4 ' 
                    placeholder='User Name' 
                    id="" 
                    value={userName}
                    onChange={(e) => { setUserInformation(e.target.value) }}
                    />
                </div>
            </div>
            {errorMessage && <div className="error-container">{errorMessage}</div>}

            <div className="resContainer container m-auto mt-2">
                <div className="resCards flex flex-wrap">
                    {
                        resFilteredList.map((restaurant) => {
                            return (
                                <Link key={restaurant.info.id} to={"/reataurants/" + restaurant.info.id}>
                                    {
                                        restaurant.info.avgRating > 4.3 ? <PromotedResCards resData={restaurant} /> : <ResCards resData={restaurant} />
                                    }
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}
