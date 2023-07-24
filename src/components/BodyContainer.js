import { React, useState } from "react";
import { cardJson } from "../utils/mockData";
import { ResCard } from "./ResCard";

export const Body = () => {
  const [cardList, setCardList] = useState(cardJson.cards);

  topRatedResturantHandler = () => {
    const newList = cardList.filter((item) => parseInt(item.data.avgRating) >= 4);
    setCardList(newList);
  };

  const bodyVar = cardList.map((item) => {
    return <ResCard resList={item.data} key={item.data.id} />;
  });
  return (
    <div className="body">
      <div className="serach">Search</div>
      <div className="filter">
        <button className="filter-btn" onClick={topRatedResturantHandler}>
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">{bodyVar}</div>
    </div>
  );
};
