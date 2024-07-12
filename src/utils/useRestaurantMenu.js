import {useEffect, useState} from "react"
import { SWIGGY_MENU_API } from '../utils/constants';


const useRestaurantMenu = (resID) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const data = await fetch("https://corsproxy.io/?" + SWIGGY_MENU_API + resID);
            const jsonResponse = await data.json();
            setResInfo(jsonResponse?.data)
            //console.log(jsonResponse?.data)
        } catch (error) {
            console.log(error);
        }
    }

    return resInfo;

}

export default useRestaurantMenu;