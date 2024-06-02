import React from "react";
import ReactDOM from "react-dom/client";
import logo from './logo.png';


const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} width="200" />
            </div>

            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    );
};

const resList = [
    {
        "info": {
          "id": "239792",
          "name": "Maharaj Pavbhaji",
          "cloudinaryImageId": "khkkpjihjbcskh5yevh2",
          "locality": "Ghanshyam Nagar",
          "areaName": "Bhuj Locality",
          "costForTwo": "₹100 for two",
          "cuisines": [
            "Fast Food",
            "Street Food",
            "Snacks"
          ],
          "avgRating": 4.2,
          "veg": true,
          "parentId": "129816",
          "avgRatingString": "4.2",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 15,
            "lastMileTravel": 0.1,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "0.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-02 23:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/maharaj-pavbhaji-ghanshyam-nagar-bhuj-locality-bhuj-239792",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "174073",
          "name": "Ten11 Lounge",
          "cloudinaryImageId": "rheyayr45b88rfcu0q9i",
          "locality": "Aiya Nagar",
          "areaName": "Mundra Road",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "North Indian",
            "Thalis",
            "Punjabi",
            "Biryani",
            "Beverages",
            "Chinese"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "203165",
          "avgRatingString": "4.3",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 2.2,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-02 23:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {

          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/ten11-lounge-aiya-nagar-mundra-road-bhuj-174073",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "257667",
          "name": "Hotel Noorani Mahal",
          "cloudinaryImageId": "g9gy72imvtj19f7takmt",
          "locality": "New Station Road",
          "areaName": "Old Dhatia Falia",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "North Indian",
            "Biryani",
            "Snacks"
          ],
          "avgRating": 4.4,
          "parentId": "100828",
          "avgRatingString": "4.4",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 2.4,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "2.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-02 23:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "UPTO ₹40"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/hotel-noorani-mahal-new-station-road-old-dhatia-falia-bhuj-257667",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "174016",
          "name": "Faizz Restaurant",
          "cloudinaryImageId": "wgeykjmos362hudrlmxp",
          "locality": "Station Road",
          "areaName": "Madhapara",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "North Indian",
            "Biryani"
          ],
          "avgRating": 4.2,
          "parentId": "78211",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 2.4,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "2.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-02 23:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/faizz-restaurant-station-road-madhapara-bhuj-174016",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "707980",
          "name": "Sankalp - Hotel N Square Restaurant",
          "cloudinaryImageId": "39e0ac9e01e139dd8c50aa35fddead14",
          "locality": "New Station Road",
          "areaName": "Bhuj Town",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Indian",
            "South Indian",
            "Thalis",
            "Ice Cream"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "423217",
          "avgRatingString": "4.4",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 1.9,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "1.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-02 23:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/sankalp-hotel-n-square-restaurant-new-station-road-bhuj-town-bhuj-707980",
          "type": "WEBLINK"
        }
      }
];

const ResCards = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
    return (
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>{avgRating} stars</p>
            <p>{costForTwo}</p>
            <p>{sla.slaString}</p>
            
        </div>
    );
}

const Body = () => (
    <div className="bodyContainer">
        <div className="searchContainer">

        </div>
        <div className="resContainer">
            <div className="resCards">
                {
                    resList.map((restaurant) => {   
                           return( <ResCards key={restaurant.info.id} resData={restaurant}/>);
                        }
                    )
                }
            </div>
        </div>
    </div>
);

const Footer = () => (
    <div className="footer">
        <a href="#">Login</a>
    </div>
);

const Main = () => (
    <div className="container">
        <Header />
        <Body />
        <Footer />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Main />);