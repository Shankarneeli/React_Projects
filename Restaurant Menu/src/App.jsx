import './App.css'
import Card from "./components/Card.jsx";
import restaurantData from "./components/mockData.js";
import Header from "./components/Header.jsx";
import { useState } from 'react';

function App() {
  const [filteredData, setFilteredData] = useState(restaurantData);

  return (
    <>
      
      {/* <Card
        restaurantImage={item.restaurantImage}
        restaurantName={item.restaurantName}
        costForTwo={item.costForTwo}
        avgRating={item.avgRating}
        cuisines={item.cuisines}
        /> */}

      {/* Pass the setter function to Header */}
      {/* Episode 6 */}

      <Header setFilteredData={setFilteredData}/>

      <div className="container">
        {filteredData.length === 0 ? (
          <div className='flex'>
          <img src="../public/404Page.jpg" alt="" className='notfound-img' />
          <p className='noData'>Restaurants Not Available 🤷🏻</p>
          </div>
        ): 
       ( filteredData.map((item) => {
         return (
           <div key={item.id}>
              <Card source={item} />
            </div>
          );
        }))}
      </div>
    </>
  );
}


export default App
