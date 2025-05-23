import React, { useState } from "react";
import restaurantData from "./mockData";

function Header({ setFilteredData }) {
  const [activeBtn, setActiveBtn] = useState("all");
  const [searchedFilter, setSearchedFilter] = useState("");

  let topRatedHandler = () => {
    const filteredRatings = restaurantData.filter((res) => res.avgRating > 4);
    setFilteredData(filteredRatings);
    setActiveBtn("topRated");
    // console.log("Clicked on Top Rated Button");
    // console.log(filteredRatings);
  };
  let nearByHandler = () => {
    const filteredDistance = restaurantData.filter(
      (res) => res.deliveryTime < 30
    );
    setFilteredData(filteredDistance);
    setActiveBtn("nearBy");

  };

  const resetHandler = () => {
    setFilteredData(restaurantData);
    setActiveBtn("all");
    console.log("Reset to all restaurants");
  };

  return (
    <>
      <div className="header">
        <a href="#">
          <h2 className="main-heading">UI Cloud Kitchen</h2>
        </a>

        <button
          className={`btns ${activeBtn === "topRated" ? "activeBtn" : ""}`}
          onClick={topRatedHandler}
        >
          Top Rated
        </button>
        <button
          className={`btns ${activeBtn === "nearBy" ? "activeBtn" : ""}`}
          onClick={nearByHandler}
        >
          Near by Restaurant
        </button>
        <button
          className={`btns ${activeBtn === "all" ? "" : ""}`}
          onClick={resetHandler}
        >
          Reset all Filters
        </button>
      </div>
      <div className="searchDiv">
      <input className="searchInput"
        type="text"
        placeholder="Search For your Favorite Restaurent"
        value={searchedFilter}
        onChange={(e) => {
          setSearchedFilter(e.target.value);
        }}
        />
      <button className="btns searchBtn"
        onClick={() => {
          const filterFun = restaurantData.filter((searchedData) =>
            searchedData.restaurantName
          .toLocaleLowerCase()
          .includes(searchedFilter.toLocaleLowerCase().trim())
        );
        setFilteredData(filterFun);
      }}
      >
        Search
      </button>
        </div>
    </>
  );
}

export default Header;
