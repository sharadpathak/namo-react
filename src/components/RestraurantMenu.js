import React, { useState, useEffect } from "react";
import { useParams} from 'react-router-dom';
import Shimmer from "./Shimmer";
import Recommended from "./Recommended";

const RestraurantMenu = () => {
  const [resMenuList, setResMenuList] = useState(null);
  const paramId = useParams();
  useEffect(() => {
    fetchData();
    console.log(paramId)
  }, [paramId]);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9698066&lng=77.7499632&restaurantId=${paramId.resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setResMenuList(json.data);
    console.log(json.data);
  };

  if(resMenuList === null) {
   return <Shimmer /> 
  } 
  const {id, name, cuisines, cloudinaryImageId, costForTwoMessage, avgRating} = resMenuList?.cards[0]?.card?.card?.info;

  const {itemCards} = resMenuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // const {itemCards} = resMenuList?.cards[0]?.card?.card;
  console.log(itemCards, resMenuList?.cards[0]?.card?.card?.info)

  return (
    <div className="menu">
      <h1>Name of Restraurant</h1>
      <h2> {name}</h2>
      <h3>Recommended ({itemCards.length})</h3>
     <p>{cuisines.join(",")}</p>
        { itemCards.map((item) => (
          <Recommended key={item.card.info.id} itemcard={item.card.info} />
        ))}
    </div>
  );
};

export default RestraurantMenu;
