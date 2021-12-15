import React, { useContext, useEffect, useState } from "react";
import MovieHero from "../components/MovieHero/MovieHero";
import { FaCcAmazonPay, FaCcVisa } from "react-icons/fa";
import Slider from "react-slick";
import Cast from "../components/Cast/Cast";
import RecommendedMovies from "../components/RecommendMovies/RecommendedMovies";
import { MovieContext } from "../context/Movie.Context";
import axios from "axios";
import { useParams } from "react-router-dom";
const MoviePage = () => {
  const { movie } = useContext(MovieContext);
  const { id } = useParams();
  const settingsCast = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    InitialSlide: 0,
    responsive: [
      {
        breakpoints: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoints: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          InitialSlide: 2,
        },
      },
      {
        breakpoints: 400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
    ],
  };
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    InitialSlide: 0,
    responsive: [
      {
        breakpoints: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoints: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          InitialSlide: 2,
        },
      },
      {
        breakpoints: 400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  // const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);
  useEffect(() => {
    const requestSimilar = async () => {
      const getSimilar = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilar.data.results);
    };
    requestSimilar();
  }, [id]);
  // useEffect(() => {
  //   const requestRecommended = async () => {
  //     const getRecommended = await axios.get(`/movie/${id}/recommendations`);
  //     setRecommended(getRecommended.data.results);
  //   };
  //   requestRecommended();
  // }, []);
  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl">About the Movie</h1>
          <p>{movie.overview}</p>
        </div>

        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-fill h-fill" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all Rupay Cars* on BookMySHow
                  Stream
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcAmazonPay className="w-fill h-fill" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all Rupay Cars* on BookMyShow
                  Stream
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">
            Cast and Crew
          </h2>
          <Slider {...settingsCast}>
            {cast.map((castData) => (
              <Cast
                image={`https://image.tmdb.org/t/p/original${castData.profile_path}`}
                castName={castData.original_name}
                castRole={castData.character}
              />
            ))}
          </Slider>
        </div>
        <div className="my-8">
          <hr />
        </div>
        <div className="my-8">
          <RecommendedMovies
            config={settings}
            title="You Might also Like"
            posters={similarMovies}
            isDark={false}
          />
        </div>
      </div>
    </>
  );
};
export default MoviePage;
