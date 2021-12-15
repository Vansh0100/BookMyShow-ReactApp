import React, { useState, useEffect } from "react";
import EntertainmentSlider from "../components/Entertainment/Entertainment";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import RecommendedMovies from "../components/RecommendMovies/RecommendedMovies";
import axios from "axios";
function Home() {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premiereMovies, setPremiereMovies] = useState([]);
  const [onlineStreamMovies, setOnlineStreamMovies] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setRecommendedMovies(getPopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);
  useEffect(() => {
    const requestPopularMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setPremiereMovies(getTopRatedMovies.data.results);
    };
    requestPopularMovies();
  }, []);
  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      setOnlineStreamMovies(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);
  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-12 my-8">
        <RecommendedMovies
          title="Recommended Movies"
          subtitle="List Of Recommended Movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-12 my-12">
        <h1 className="text-2xl font-bold text-gray-800 my-2">
          The Best of Entertainment
        </h1>
        <EntertainmentSlider />
      </div>
      <div className="bg-gray-900 py-12 container">
        <div className="container mx-auto flex flex-col gap-3 px-12 my-8">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <RecommendedMovies
            title="PREMIERE"
            subtitle="Watch new movies at home,every Friday"
            posters={premiereMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-12 my-8">
        <RecommendedMovies
          title="Online Streaming Movies"
          subtitle=""
          posters={onlineStreamMovies}
          isDark={false}
        />
      </div>
    </>
  );
}
export default Home;
