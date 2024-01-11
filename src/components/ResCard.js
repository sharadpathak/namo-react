import React from "react";
import { Link } from "react-router-dom";

export const ResCard = (props) => {
  const { name, cuisines, sla, costForTwo, cloudinaryImageId, avgRating, id,veg } =
    props.resList;
  return (
    <div className={
      (veg ? "veg-category" : "non-veg-category") + " " +  "res-card"
    }>
      <img
        className="food-item-img"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <div className="no-decoration">
      <Link to={`/restraurants/${id}`}>{name}</Link>
      </div>
      <div className="card-body">
        <div className="company-name">
          <div className="description">
            <span>{cuisines.join(", ")}</span>
          </div>
        </div>
        <div className="rating">{avgRating}</div>
      </div>
      <div className="card-footer">
        <div>{sla.deliveryTime} Min</div>
        <div className="price">{costForTwo}</div>
      </div>
    </div>
  );
};
