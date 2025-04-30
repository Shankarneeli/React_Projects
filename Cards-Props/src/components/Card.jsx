import React from 'react';

function Card(props) {
    const {data} = props;
    const {imageUrl, title, price, type, description, rating} = data;

    function foodOrderHandler(){
    
        console.log("Order Successfully placed for ", title);
        let amount =0;
        if(price>199){
            amount= price;
        }else{
            amount = price + 40;
        }
        console.log("Total Amount ", amount);
        
    }
  return (
    <>
    <div className="screen">
    <div className="card" onClick={foodOrderHandler}>
        <div className="card-header">
        <img src={imageUrl} alt={title} className='cardImg' />
        <div className={rating > 4.2 ? 'try' : 'none'}>Must Try</div>
        </div>
        <div className="flex">
        <h3 className="title">{title}</h3>
        <p className={type === 'Non-veg' ? 'Non-veg': 'veg'}></p>
        </div>
        <p className="price">Rs. {price}/- for one</p>
        <p className="desc">{description}</p>
    </div>
    </div>
    </>
  )
}

export default Card
