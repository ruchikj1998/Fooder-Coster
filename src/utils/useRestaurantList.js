import React,{useEffect, useState} from "react";

const useRestaurantList = (APIUrl) => {

    const [restaurantList, setRestaurantList] = useState({});
    const [filteredResList, setFilteredResList] = useState({});
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const data = await fetch("https://corsproxy.io/?" + APIUrl);
            const jsonResponse = await data.json();
            const resultList = jsonResponse?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            if (resultList) {
                setRestaurantList(resultList)
                setFilteredResList(resultList)
            }
            console.log("Fetched data!");
        } catch (error) {
           return {};
        }
    }

    return [restaurantList, filteredResList];
}

export default useRestaurantList;