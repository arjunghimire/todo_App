import React from "react";
import logo from "./logo.svg";
import "./App.css";

const namelists = [
  {
    name: "Product 1",
    price: 240
  },
  {
    name: "Product 2",
    price: 260
  },
  {
    name: "Product 3",
    price: 2630
  },
  {
    name: "Product 4",
    price: 1260
  }
];

const info = {
  name: "Arjun",
  address: "KTM"
};

const filterArray = namelists.filter(function(info) {
  return info.name !== "Hari";
});

console.log(filterArray);

function App() {
  return (
    <div>
      {/* {info["name"]}
      {info.address} */}
      {/* <ul>
        {filterArray.map(function(info) {
          return (
            <li>
              Name : {info.name} <br />
              Address: {info.address} <br />
              Age: {info.age}
            </li>
          );
        })}
      </ul> */}
      <h2>
        Total Age :
        {namelists.reduce(function(sum, info) {
          return (sum += info.price);
        }, 0)}
      </h2>
      {/* 
      <ul>
        {namelists.map(function(info) {
          return (
            <li>
              Name : {info.name} <br />
              Address: {info.address} <br />
              Age: {info.age}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
}

export default App;
