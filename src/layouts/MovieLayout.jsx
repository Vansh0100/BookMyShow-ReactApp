import React,{useEffect,useContext} from "react";
import MovieNav from "../components/Navbar/MovieNav";
import axios from "axios";
import {useParams} from "react-router-dom"
import {MovieContext} from "../context/Movie.Context";
const MovieLayout = (props) => {
  const {id}=useParams();
  const {movie,setMovie}=useContext(MovieContext);
  useEffect(()=>{
    const requestMovie=async ()=>{
      const getMoviedata=await axios.get(`/movie/${id}`);
      setMovie(getMoviedata.data)
    }
    requestMovie(); 
  },[id])
  return (
    <div>
      <MovieNav />
      {props.children}
    </div>
  );
};
export default MovieLayout;
