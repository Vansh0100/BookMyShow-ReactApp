import React from "react";
// import {Link} from "react-router-dom";
import { Link } from "react-router-dom";
const Poster = (props) => {
  return (
    <Link to={`/movie/${props.id}`}>
    <div className="flex flex-col  gap-2 px-1 md:px-3 justify-center">
      <div className="h-40  md:h-80 ">
        <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt="poster" className="h-full w-full rounded-md" />
      </div>
        <h3 className={`text-lg font-bold ${props.isDark?"text-white":"text-gray-800"} `}>{props.title}</h3>
        <p className={`lg:text-sm md:text-xs sm:text-xs  ${props.isDark?"text-white":"text-gray-700"}`}>{props.subtitle}</p>
    </div>
    </Link>
  );
};
export default Poster;
