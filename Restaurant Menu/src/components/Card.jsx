import React from 'react';
function Card(props) {
    const {source} = props;

    function foodOrderHandler(){
        console.log( source.restaurantName, "Resturant is Great Choice Buddy!..." );
        console.log("It has Ratings of", source.avgRating);
        console.log("Order Soon, Estimated Delivery Time:", source.deliveryTime,"Mins");
    }
  return (
    <>
    <div className="screen" >
    <div className="card" onClick={foodOrderHandler} >
        <div className="card-header">
        <img src={source.restaurantImage || "Image Not Avaialable"} alt={source.restaurantName || " Unknown Restaurant "} className='cardImg' />
        <div className={source.avgRating> 4.0 ? 'try' : 'none'}>Must Try</div>
        </div>
        <h3 className="title">{source.restaurantName}</h3>
        <p className='cuisines'>Cuisines: <br /> {[source.cuisines || 'Various cuisines'].join(", ")}</p>
        <p className="price">₹{(source.costForTwo || 'N/A')/100} for two</p>
        <p >Ratings: {source.avgRating} ⭐</p>
        <p>Expected Delivery Time: {source.deliveryTime} Mins</p>
    </div>
    </div>
    </>
  )
}

export default Card
