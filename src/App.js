import "./App.css";
import React from 'react';
import { useState } from "react";

function App() {
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [Bmi, setBmi] = useState('');
  const [message, setmessage] = useState("");

  let calculatebmi = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please Enter correct Input");
    }
    else {

      let Bmi = (weight / (height * height) * 10000);
      setBmi(Bmi.toFixed(1));
      if (Bmi < 18.5) {
        setmessage("You are Under Weight");
      }
      if (18.5 < Bmi && Bmi < 25) {
        setmessage("You are Normal");
      }
      else if (Bmi > 25 && Bmi < 29.9) {
        setmessage("You are OverWeighted");
      }
      else if(Bmi>30){
        setmessage("You are Morbidly obese");
      }
    }

  }
  let reloaded = () => {
    setweight(0);
    setheight(0);
    setBmi("");
    setmessage('');

  }

  return (
    <form className="mx-[35%] my-[3%] h-auto text-center border-solid border-4 border-teal-600 bg-teal-400 p-8 inline-block">
      <div className="text-2xl font-serif font-extrabold mb-10 mt-3 ">BMI Calculator</div>
      <div className="text-xl font-sans font-bold mb-5 ">
        <label>Weight in Kilogram</label>
        <br />
        <input className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" type="text" placeholder="Enter Your Weight" onChange={(e) => { setweight(e.target.value) }} />
      </div>
      <div className="text-xl font-sans font-bold mb-5 ">
        <label>Height in Centimeter</label>
        <br />
        <input className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" type="text" placeholder="Enter Your Height" onChange={(e) => { setheight(e.target.value) }} />
      </div>

      <div className="flex items-center justify-center gap-10">
        <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br 
        focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium
         rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={calculatebmi}>Submit</button>

        <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br 
        focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 
        font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={reloaded}>Reload</button>
      </div>
      <div className=" bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">BMI {Bmi}</div>
      <div className=" bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500">Message {message}</div>

    </form>
  );
}

export default App;
