import {BiChevronDown, BiMenu, BiSearch} from "react-icons/bi";
function NavSm(){
    return (
        <>
            <div className="flex text-white justify-between items-center">
                <div>
                    <h3 className="text-xl font-bold">It All Starts Here</h3>
                    <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">Gonda(U.P)<BiChevronDown/></span>
                </div>
                <div className="w-8 h-8">
                    <BiSearch className="w-full h-full"/>
                </div>
            </div>
        </>
    )
}
function NavMd(){
    return (
        <>
            <div className="w-full flex items-center gap-3
                    bg-white rounded-md px-3 py-1">
                        <BiSearch/>
                        <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for movies, events, plays, sports, activities"/>
                    </div>
        </>
    )
}
function NavLg(){
    return (
        <>
            <div className="container flex  mx-auto px-4 items-center justify-between">
                <div className="flex items-center w-1/2 gap-3">
                    <div className="w-10 h-10">
                        <img src='https://lh3.googleusercontent.com/m0T5pBN2VgwdbWqJCHj75qsgIXIZEf8TPtfSK3el65lxNnoxMJwF9GwEwysG-vq9Fag' alt='logo' className="w-full h-full" />
                    </div>
                    <div className="w-full flex items-center gap-3
                    bg-white rounded-md px-3 py-1">
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

function Header(){
    return(
        <>
            <nav className="bg-gray-700 px-4 py-3">
                <div className="md:hidden"><NavSm/></div>
                <div className="hidden md:flex lg:hidden"><NavMd/></div>
                <div className="hidden w-full lg:flex"><NavLg/></div>
            </nav>
        </>
        )
}

export default Header;