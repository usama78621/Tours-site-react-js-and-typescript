import React, { FC, useEffect, useState } from "react";
import "./App.css";
import Loding from "./components/loading/Loding";
import Reload from "./components/reload/Reload";
import Tours from "./components/tours/Tours";

const url = "https://course-api.com/react-tours-project";


const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [tours, setTours] = useState<{id:string}[]>([]);

  const removeTour = (id:string)=>{
    const newTour = tours.filter((tour)=> tour.id !== id);
  setTours(newTour)
  }


  const featchTours = async () => {
    setLoading(true);
    try {
      const respoenses = await fetch(url);
      const tours = await respoenses.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    featchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loding />
      </main>
    );
  }
  if(tours.length === 0){
   return <Reload featchTours={featchTours}/>
  }
  return (
    <main>
      <Tours removeTour={removeTour} tours={tours} />
    </main>
  );
};

export default App;
