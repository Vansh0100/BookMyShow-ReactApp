import React from "react";
import {Route} from "react-router-dom";
import DefaultLayout from "../layouts/Default.Layout";

const DefaultHOC=({component:Component,...rest})=>{
    return (
        <div>
            <Route {...rest} component={(props)=>(
                <DefaultLayout>
                    <Component {...props}/>
                </DefaultLayout>
            )}
            />
        </div>
    )
}

export default DefaultHOC;