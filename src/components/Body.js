import React from 'react'
import { useState, useEffect } from 'react';
import ResCards from './ResCards';
import Shimmer from './Shimmer';
import { SWIGGY_RESTAURANT_API } from '../utils/constants';
import { Link } from 'react-router-dom';

export default function Body() {

    const [resList, setResList] = useState([]);
    const [resFilteredList, setResFilteredList] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [errorMessage, setErrorMessage] = useState("");

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

    // Shimmer UI : Conditional rendring
    return resList?.length === 0 ? <Shimmer /> : (
        <div className="bodyContainer">
            <div className='searchBar'>
                <input type='text' className='search' id="searchInput" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button className='searchButton' onClick={() => {
                    // user click on button searchRes function is called
                    searchRes(searchText, resList);
                }}>Search</button>
            </div>
            <div className="filter">
                <button className='filter-btn' onClick={filterClick} >Top rated restaurants</button>
            </div>

            {errorMessage && <div className="error-container">{errorMessage}</div>}

            <div className="resContainer">
                <div className="resCards">
                    {
                        resFilteredList.map((restaurant) => {
                            return (
                                <Link key={restaurant.info.id} to={"/reataurants/"+ restaurant.info.id}>
                                <ResCards
                                    resData={restaurant}
                                />
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}
