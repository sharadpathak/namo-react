import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logoIcon from "./assets/logo.png";
import burger from "./assets/burger.jpg";
/*
 Header 
  -- Logo
  -- Navbar
 Body
  -- Search
  -- Restaurent Container
    -- RestaurentCard
        - Image
        - Name of res, Star Rating, Cuisine,delery
 Footer
  -- CopyRight
  -- Links
  -- Address
  -- Contact

// 
*/

const cardJson = {
  cards: [
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "198493",
            name: "Leon's - Burgers & Wings (Leon Grill)",
            uuid: "9e0c9e0d-3463-494d-b384-f522145eaad4",
            city: "1",
            area: "Whitefield",
            totalRatingsString: "10000+ ratings",
            cloudinaryImageId: "f6okwzxzdjj94xwuyy9l",
            cuisines: [
              "American",
              "Snacks",
              "Turkish",
              "Portuguese",
              "Continental",
            ],
            tags: [],
            costForTwo: 30000,
            costForTwoString: "₹300 FOR TWO",
            deliveryTime: 23,
            minDeliveryTime: 23,
            maxDeliveryTime: 23,
            slaString: "23 MINS",
            lastMileTravel: 2,
            slugs: {
              restaurant: "leon-grillaa-5th-block-koramangala",
              city: "bangalore",
            },
            cityState: "1",
            address:
              "Prasanth Layout, Prasanth Extension, Whitefield, Bengaluru, Karnataka 560066",
            locality: "Whitefield",
            parentId: 371281,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            ribbon: [
              {
                type: "PROMOTED",
              },
            ],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "time",
                  fee: 0,
                  message: "",
                },
                {
                  name: "distance",
                  fee: 3300,
                  message: "",
                },
                {
                  name: "special",
                  fee: 0,
                  message: "",
                },
              ],
              totalFees: 3300,
              message: "",
              title: "Delivery Charge",
              amount: "3300",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID:
              "cid=7507537~p=1~eid=00000189-6512-4cf7-17a1-99a6008a0178~srvts=1689617845495",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "2 kms",
            hasSurge: false,
            aggregatedDiscountInfoV3: {
              header: "50% OFF",
              subHeader: "UPTO ₹100",
              discountTag: "",
              headerTypeV2: 0,
            },
            sla: {
              restaurantId: "198493",
              deliveryTime: 23,
              minDeliveryTime: 23,
              maxDeliveryTime: 23,
              lastMileTravel: 2,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: true,
            avgRating: "4.2",
            totalRatings: 10000,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "221738",
            name: "Meghana Foods",
            uuid: "106f4556-6804-4554-8c68-ee875d6acf65",
            city: "1",
            area: "Brookefield",
            totalRatingsString: "10000+ ratings",
            cloudinaryImageId: "aqsnrylokzpn45qhg1pb",
            cuisines: [
              "Biryani",
              "Andhra",
              "South Indian",
              "North Indian",
              "Chinese",
              "Seafood",
            ],
            tags: [],
            costForTwo: 50000,
            costForTwoString: "₹500 FOR TWO",
            deliveryTime: 27,
            minDeliveryTime: 27,
            maxDeliveryTime: 27,
            slaString: "27 MINS",
            lastMileTravel: 6.5,
            slugs: {
              restaurant: "meghana-foods-mahadevpura-mahadevpura",
              city: "bangalore",
            },
            cityState: "1",
            address: "Raj Pinnacle, Mahadevapura, Bengaluru, Karnataka, India",
            locality: "Mahadevpura",
            parentId: 635,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "time",
                  fee: 0,
                  message: "",
                },
                {
                  name: "distance",
                  fee: 7600,
                  message: "",
                },
                {
                  name: "special",
                  fee: 0,
                  message: "",
                },
              ],
              totalFees: 7600,
              message: "",
              title: "Delivery Charge",
              amount: "7600",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "6.5 kms",
            hasSurge: false,
            sla: {
              restaurantId: "221738",
              deliveryTime: 27,
              minDeliveryTime: 27,
              maxDeliveryTime: 27,
              lastMileTravel: 6.5,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.3",
            totalRatings: 10000,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "689529",
            name: "The Indian Food Story",
            uuid: "8c27b03f-6046-4b84-abc5-495e4d1dc94a",
            city: "1",
            area: "Marathahalli",
            totalRatingsString: "500+ ratings",
            cloudinaryImageId: "8807626469b8e4a8632bf20fc04202a3",
            cuisines: [
              "North Indian",
              "Punjabi",
              "Biryani",
              "Desserts",
              "Chaat",
              "Snacks",
            ],
            tags: [],
            costForTwo: 45000,
            costForTwoString: "₹450 FOR TWO",
            deliveryTime: 26,
            minDeliveryTime: 26,
            maxDeliveryTime: 26,
            slaString: "26 MINS",
            lastMileTravel: 4.699999809265137,
            slugs: {
              restaurant: "the-indian-food-story-marathahalli-marathahalli",
              city: "bangalore",
            },
            cityState: "1",
            address:
              "No. 5/3, Thubarahalli Village,Varthur Hobli, Bengaluru east Taluk, Bangalore Urban, Karnataka-560066",
            locality: "Varthur Hobli",
            parentId: 294086,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            ribbon: [
              {
                type: "PROMOTED",
              },
            ],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "time",
                  fee: 0,
                  message: "",
                },
                {
                  name: "distance",
                  fee: 4900,
                  message: "",
                },
                {
                  name: "special",
                  fee: 0,
                  message: "",
                },
              ],
              totalFees: 4900,
              message: "",
              title: "Delivery Charge",
              amount: "4900",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "Closes soon",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID:
              "cid=7500282~p=4~eid=00000189-6512-4cf7-17a1-99a7008a0438~srvts=1689617845495",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "4.6 kms",
            hasSurge: false,
            sla: {
              restaurantId: "689529",
              deliveryTime: 26,
              minDeliveryTime: 26,
              maxDeliveryTime: 26,
              lastMileTravel: 4.699999809265137,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: true,
            avgRating: "4.0",
            totalRatings: 500,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "61580",
            name: "Imperio Restaurant",
            uuid: "310bf316-1c3b-4408-b4a7-d6d40cb7b70b",
            city: "1",
            area: "Whitefield",
            totalRatingsString: "10000+ ratings",
            cloudinaryImageId: "a1629b9c7f59577a55411e94425c6d99",
            cuisines: [
              "Chinese",
              "South Indian",
              "North Indian",
              "Continental",
              "Desserts",
              "Kerala",
              "Andhra",
              "Beverages",
              "Mughlai",
              "Seafood",
              "Hyderabadi",
              "Healthy Food",
              "Arabian",
              "Biryani",
              "Burgers",
              "Barbecue",
              "Oriental",
            ],
            tags: [],
            costForTwo: 50000,
            costForTwoString: "₹500 FOR TWO",
            deliveryTime: 30,
            minDeliveryTime: 30,
            maxDeliveryTime: 30,
            slaString: "30 MINS",
            lastMileTravel: 4.599999904632568,
            slugs: {
              restaurant: "imperio-restaurant-whitefield-whitefield-2",
              city: "bangalore",
            },
            cityState: "1",
            address:
              "No. 101/9, Apple City, Hoskote Main Road, near H.P. Petrol Bunk, Chaitanya Ananya, Seegehalli, Kadugodi, Bengaluru, Karnataka 560067",
            locality: "Seegehalli",
            parentId: 5610,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "time",
                  fee: 0,
                  message: "",
                },
                {
                  name: "distance",
                  fee: 4900,
                  message: "",
                },
                {
                  name: "special",
                  fee: 0,
                  message: "",
                },
              ],
              totalFees: 4900,
              message: "",
              title: "Delivery Charge",
              amount: "4900",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "Closes soon",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "4.5 kms",
            hasSurge: false,
            aggregatedDiscountInfoV3: {
              header: "20% OFF",
              subHeader: "UPTO ₹50",
              discountTag: "",
              headerTypeV2: 0,
            },
            sla: {
              restaurantId: "61580",
              deliveryTime: 30,
              minDeliveryTime: 30,
              maxDeliveryTime: 30,
              lastMileTravel: 4.599999904632568,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.8",
            totalRatings: 10000,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "1221",
            name: "Biryani Day",
            uuid: "1dec917e-3f4b-479b-b4db-f7095248bbd8",
            city: "1",
            area: "Marathahalli",
            totalRatingsString: "10000+ ratings",
            cloudinaryImageId: "ucpbuzrvhg0ire3h9hwu",
            cuisines: ["North Indian", "Chinese", "Andhra", "Biryani"],
            tags: [],
            costForTwo: 25000,
            costForTwoString: "₹250 FOR TWO",
            deliveryTime: 28,
            minDeliveryTime: 28,
            maxDeliveryTime: 28,
            slaString: "28 MINS",
            lastMileTravel: 7.5,
            slugs: {
              restaurant: "biryani-day-thulsi-theater-road-marathahalli",
              city: "bangalore",
            },
            cityState: "1",
            address: "No 389/2, 7th Cross, Thulsi Theater Road, Marathalli",
            locality: "Thulsi Theater Road",
            parentId: 2635,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "time",
                  fee: 0,
                  message: "",
                },
                {
                  name: "distance",
                  fee: 8600,
                  message: "",
                },
                {
                  name: "special",
                  fee: 0,
                  message: "",
                },
              ],
              totalFees: 8600,
              message: "",
              title: "Delivery Charge",
              amount: "8600",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "Closes soon",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "7.5 kms",
            hasSurge: false,
            aggregatedDiscountInfoV3: {
              header: "20% OFF",
              subHeader: "UPTO ₹50",
              discountTag: "",
              headerTypeV2: 0,
            },
            sla: {
              restaurantId: "1221",
              deliveryTime: 28,
              minDeliveryTime: 28,
              maxDeliveryTime: 28,
              lastMileTravel: 7.5,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.7",
            totalRatings: 10000,
            new: false,
          },
          subtype: "basic",
        },
        {
          type: "restaurant",
          data: {
            type: "F",
            id: "636313",
            name: "The Rameshwaram Cafe",
            uuid: "ee7e2a22-42c6-4f59-b0a1-d1df6faf403d",
            city: "1",
            area: "Brookefield",
            totalRatingsString: "10000+ ratings",
            cloudinaryImageId: "0adee855c65fa947a256764a87a55658",
            cuisines: ["South Indian"],
            tags: [],
            costForTwo: 25000,
            costForTwoString: "₹250 FOR TWO",
            deliveryTime: 26,
            minDeliveryTime: 26,
            maxDeliveryTime: 26,
            slaString: "26 MINS",
            lastMileTravel: 6.300000190734863,
            slugs: {
              restaurant: "the-rameshwaram-café-whitefield-whitefield",
              city: "bangalore",
            },
            cityState: "1",
            address:
              "AIKYAM - THE RAMESHWARAM CAFE PLOT NO. 01, ITPL MAIN ROAD, GREEN AVENUE - BENGALURU, INDIA, B.B.M.P East, Karnataka-560037",
            locality: "ITPL Main road",
            parentId: 384316,
            unserviceable: false,
            veg: true,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            chain: [],
            feeDetails: {
              fees: [
                {
                  name: "time",
                  fee: 0,
                  message: "",
                },
                {
                  name: "distance",
                  fee: 7600,
                  message: "",
                },
                {
                  name: "special",
                  fee: 0,
                  message: "",
                },
              ],
              totalFees: 7600,
              message: "",
              title: "Delivery Charge",
              amount: "7600",
              icon: "",
            },
            availability: {
              opened: true,
              nextOpenMessage: "",
              nextCloseMessage: "",
            },
            longDistanceEnabled: 0,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
              imageBased: [],
              textBased: [],
              textExtendedBadges: [],
            },
            lastMileTravelString: "6.3 kms",
            hasSurge: false,
            sla: {
              restaurantId: "636313",
              deliveryTime: 26,
              minDeliveryTime: 26,
              maxDeliveryTime: 26,
              lastMileTravel: 6.300000190734863,
              lastMileDistance: 0,
              serviceability: "SERVICEABLE",
              rainMode: "NONE",
              longDistance: "NOT_LONG_DISTANCE",
              preferentialService: false,
              iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "4.5",
            totalRatings: 10000,
            new: false,
          },
          subtype: "basic",
        },
      ]
};

const Logo = () => {
  return <img className="logo" src={logoIcon} alt="Logo" />;
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="nav-conatiner">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = (props) => {
  const { name, cuisines, deliveryTime, costForTwo, cloudinaryImageId } =
    props.resList;
  return (
    <div className="res-card">
      <img
        className="food-item-img"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <div>
        <h3>{name}</h3>
      </div>
      <div className="card-body">
        <div className="company-name">
          <div className="description">
            <span>{cuisines.join(", ")}</span>
          </div>
        </div>
        <div className="rating">4.3</div>
      </div>
      <div className="card-footer">
        <div>{deliveryTime} Min</div>
        <div className="price">₹{costForTwo / 100}</div>
      </div>
    </div>
  );
};

const Body = () => {
  const bodyVar = cardJson.cards.map((item) => {
    return <ResCard resList={item.data} key={item.data.id} />;
  });
  return (
    <div className="body">
      <div className="serach">Search</div>
      <div className="res-container">
        {bodyVar}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      {/* // Header */}
      <Header />
      <Body />
      {/* // Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
