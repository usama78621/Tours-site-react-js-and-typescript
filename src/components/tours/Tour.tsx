import React, { FC, useState } from "react";
interface TourPrpos {
  id:string
  image: string;
  info: string;
  price: string;
  name: string;
  removeTour:(id: string) => void
}

const Tour: FC<TourPrpos> = ({removeTour, id, image, info, price, name }) => {
  const [readmore, setReadmore] = useState<boolean>(false)
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{ readmore ? info :`${info.substring(0,200)}...`}
        <button onClick={()=>setReadmore(!readmore)}>
          {readmore ? 'See less':'See More'}
        </button>
        </p>
        <button className="delete-btn" onClick={()=> removeTour(id)}>not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
