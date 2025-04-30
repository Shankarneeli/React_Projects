import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import Card from "./components/Card.jsx";
import cc from './assets/cc.png';
import nvbt from './assets/nvbt.png';
import nvgs from './assets/nvgs.png';
import nvsp from './assets/nvsp.png';
import vcs from './assets/vcs.png';
import vpp from './assets/vpp.png';
import vsb from './assets/vsb.png';
import vts from './assets/vts.png';

const foodArray = [
  {
    imageUrl: vpp,
    title: "Pepperoni Pizza",
    price: 250,
    type: "veg",
    description: "Classic pizza with pepperoni and cheese",
    rating: 4.3,
    id:0,
  },
  {
    imageUrl: nvsp,
    title: "Sushi Platter",
    price: 400,
    type: "Non-veg",
    description: "Assorted sushi with fresh seafood",
    rating: 3.2,
    id:1,
  },
  {
    imageUrl: cc,
    title: "Chocolate Cake",
    price: 780,
    type: "Non-veg",
    description: "Rich and moist chocolate cake",
    rating: 4.3,
    id:2,
  },
  {
    imageUrl: nvbt,
    title: "Beef Tacos",
    price: 299,
    type: "Non-veg",
    description: "Soft tortillas filled with spiced beef",
    rating: 4.7,
    id:3,
  },
  {
    imageUrl: nvgs,
    title: "Grilled Steak",
    price: 360,
    type: "Non-veg",
    description: "Juicy steak with a side of fries",
    rating: 4.4,
    id:4,
  },
  {
    imageUrl: vsb,
    title: "Spaghetti Bolognese",
    price: 650,
    type: "veg",
    description: "Pasta with rich Bolognese sauce",
    rating: 2.9,
    id:5,
  },
  {
    imageUrl: vts,
    title: "Turkey Sandwich",
    price: 140,
    type: "veg",
    description: "Sliced turkey with fresh veggies",
    rating: 4.3,
    id:6,
  },
  {
    imageUrl: vcs,
    title: "Caesar Salad",
    price: 290,
    type: "veg",
    description: "Crispy romaine lettuce with Caesar dressing",
    rating: 4.0,
    id:7,
  },
];

// console.log(foodArray);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <a href="#"><h2>UI Cloud Kitchen</h2></a>

    <div className="container">
    {foodArray.map((item) => {
        return (
          <div key={item.id}> 
          {/* Always provide key in the top-most element in a mapped component. */}

          <Card data = {item} />
          
          {/* <Card
            img={item.imageUrl}
            title={item.title}
            price={item.price}
            desc={item.description}
            type={item.type}
            rating={item.rating}
            /> */}
            </div>
        );
      })}
    </div>
    {/* <App/> */}
  </StrictMode>
);
