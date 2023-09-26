import { React, useState, useEffect } from "react";
// import { cardJson } from "../utils/mockData"; in case of local data call this file
import { ResCard } from "./ResCard";
import Shimmer from "./Shimmer";
export const Body = () => {
  const [cardList, setCardList] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  const [serachTxt, setSerachTxt] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  // Fetching API data
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9698066&lng=77.7499632&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setCardList(
      json.data.cards[5].card.card.gridElements?.infoWithStyle.restaurants
    );
    setRestaurantList(
      json.data.cards[5].card.card.gridElements?.infoWithStyle.restaurants
    );
  };

  // Filter logic
  topRatedResturantHandler = () => {
    const newList = cardList.filter(
      (item) => parseInt(item.info.avgRating) >= 4
    );
    setCardList(newList);
  };

  txtEventHandler = (e) => {
    console.log(e.target.value);
    setSerachTxt(e.target.value);
  };

  search = (e) => {
    setCardList(cardList);
    const filterData = cardList.filter((item) =>
      item.info.name.toLowerCase().includes(serachTxt.toLowerCase())
    );
    console.log(filterData);
    setRestaurantList(filterData);
  };

  cardClickHandler = (event, index) => {
    console.log("Google", event, index);
  };

  const bodyVar = restaurantList.map((item) => {
    return (
      <ResCard
        onClick={(event) => cardClickHandler(event, item.info.id)}
        resList={item.info}
        key={item.info.id}
      />
    );
  });

  return cardList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="serach">
          <input type="text" value={serachTxt} onChange={txtEventHandler} />
          <button onClick={search}>Search </button>
        </div>
        <button className="filter-btn" onClick={topRatedResturantHandler}>
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">{bodyVar}</div>
    </div>
  );
};
