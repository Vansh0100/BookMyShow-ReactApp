import React,{useState} from "react";
import Payment from "../paymentModal/Payment";
const MovieInfo = ({ movie }) => {
  const [isOpen,setIsOpen]=useState(false);
  const [price,setPrice]=useState(0);

  const genres = movie.genres?.map(({ name }) => name).join(", ");

  const rentMovies=()=>{
    setIsOpen(true);
    setPrice(149);
  }
  const buyMovies=()=>{
    setIsOpen(true);
    setPrice(599);
  }
  return (
    <>
    <Payment setIsOpen={setIsOpen} isOpen={isOpen} price={price}/>
      <div className="flex flex-col gap-8">
        <h1 className="text-white text-5xl font-bold">
          {movie.original_title}
        </h1>
        <div className="flex flex-col gap-5 text-white">
          <h4>4k Ratings</h4>
          <h4>English, Hindi, Kannada, Tamil, Telugu</h4>
          <h4>
            {(movie.runtime / 60).toFixed(2)} h • {genres}{" "}
          </h4>
        </div>
        <div className="flex items-center gap-3 w-full">
          <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg" onClick={rentMovies}>
            Rent ₹149
          </button>
          <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg" onClick={buyMovies}>
            Buy ₹599
          </button>
        </div>
      </div>
    </>
  );
};
export default MovieInfo;
