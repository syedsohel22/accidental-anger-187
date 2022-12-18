import React from "react";
import HotelCard from "./HotelCard";

// city
// :
// "New Delhi"
// id
// :
// 1668088096495.4824
// image
// :
// "https://cf.bstatic.com/xdata/images/hotel/square600/92310554.webp?k=b41da3cee7dfd8f148a0aa95a118783231f6dba759218b67224cc4f703036e6a&o=&s=1"
// name
// :
// "Hotel Aura"
// price
// :
// 2442
// rating
// :
// 3
// review
// :
// 7.6
// strikeprice
// :
// 4070
// type
// :
// "Standard  Room"
const HotelList = ({ hotel = [] }) => {
  return (
    <div>
      {hotel.map((data) => (
        <HotelCard
          key={data.id}
          name={data.name}
          city={data.city}
          price={data.price}
          rating={data.rating}
          review={data.review}
          strikeprice={data.strikeprice}
          image={data.image}
          type={data.type}
        />
      ))}
    </div>
  );
};

export default HotelList;
