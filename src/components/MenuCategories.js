import React, {useState} from 'react'
import MenuItems from './MenuItems';

export default function MenuCategories({ categories, showItems, setShowIndex }) {
    
    const {itemCards} = categories?.card?.card;

    const handleClick = () => {
        setShowIndex();
    }
    
    return (
        <div className='bg-gray-100 border-gray-200 border-b-2 m-4 p-4 shadow-lg'>
            {/* Accordian header */}
            <div className='flex justify-between' onClick={() => {
                handleClick();
            }}>
                <span className='font-bold'>{categories?.card?.card?.title} ({itemCards.length}) </span>
                <span>&#8628;</span>
            </div>

            {/* Accordian Body */}
            
            {
                showItems && itemCards.map( (item) => {
                    return <MenuItems key={item.card.info.id} itemCard={item}/>
                })
            }
        </div>
    )
}
