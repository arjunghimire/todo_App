import React from "react";
import logo from "./logo.svg";
import "./App.css";

const namelists = [
  {
    name: "Hari",
    address: "KTM",
    age: 24
  },
  {
    name: "Shyam",
    address: "Kalanki",
    age: 26
  }
];

function App() {
  return (
    <div>
      <ul>
        {namelists
          .filter(function(info) {
            return info.address !== "KTM";
          })
          .map(function(info) {
            return (
              <li>
                Name : {info.name} <br />
                Address: {info.address} <br />
                Age: {info.age}
              </li>
            );
          })}
      </ul>
      <h2>
        Total Age :
        {namelists.reduce(function(sum, value) {
          return (sum += value.age);
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
