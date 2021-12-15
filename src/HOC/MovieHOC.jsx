import React from "react";
import {Route} from "react-router-dom";
import MovieLayout from "../layouts/MovieLayout";
const MovieHOC=({component:Component,...rest})=>{
    return (
        <div>
            <Route {...rest} component={(props)=>(
                <MovieLayout>
                    <Component {...props}/>
                </MovieLayout>
            )}
            />
        </div>
    )
}

export default MovieHOC;