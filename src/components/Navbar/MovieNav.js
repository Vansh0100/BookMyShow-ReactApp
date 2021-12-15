import {BiChevronDown, BiMenu, BiSearch, BiShareAlt} from "react-icons/bi";
import React,{useContext} from "react";
import { MovieContext } from "../../context/Movie.Context";
function NavSm(){
    const {movie}=useContext(MovieContext);
    return (
        <>
            <div className="flex text-black justify-between items-center">
                <div>
                    <h3 className="text-xl font-bold">
                        {movie.original_title}
                    </h3>
                </div>
                <div className="w-8 h-8">
                    <BiShareAlt className="w-full h-full"/>
                </div>
            </div>
        </>
    )
}
function NavLg(){
    return (
        <>
            <div className="container flex  mx-auto items-center justify-between">
                <div className="flex w-1/2 gap-3 items-center justify-between">
                    <div className="w-1/4 h-10">
                        <img src='https://lh3.googleusercontent.com/m0T5pBN2VgwdbWqJCHj75qsgIXIZEf8TPtfSK3el65lxNnoxMJwF9GwEwysG-vq9Fag' alt='logo' className="w-full h-full" />
                    </div>
                    <div className="w-full flex items-center gap-3
                    bg-white rounded-lg px-3 py-1">
                        <BiSearch/>
                        <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for movies, events, plays, sports, activities"/>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">Gonda(U.P)<BiChevronDown/></span>
                    <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">Sign In</button>
                    <div className="w-8 h-8 text-white"><BiMenu className="w-full h-full"/></div>
                </div>
            </div>
        </>
    )
}

function MovieNav(){
    return(
        <>
            <nav className="bg-white border-b-2 lg:border-b-0 lg:bg-gray-800 p-4" >
                <div className="md:hidden"><NavSm/></div>
                <div className="hidden md:flex lg:hidden"><NavSm/></div>
                <div className="hidden w-full lg:flex"><NavLg/></div>
            </nav>
        </>
        )
}

export default MovieNav;