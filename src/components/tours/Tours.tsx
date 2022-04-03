import React, { FC } from "react";
import Tour from "./Tour";
interface Propss {
  tours: {id:string}[];
  removeTour:(id: string) => void
}

const Tours: FC<Propss> = ({tours,removeTour}) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour:any) => {
          return <Tour key={tour.id} removeTour={removeTour} {...tour}/>;
        })}
      </div>
    </section>
  );
};

export default Tours;
