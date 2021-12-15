import React from "react";
import Poster from "../components/Poster/Poster";
import PlayFilters from "../components/PlayFilters/PlayFilter";
const Plays=()=>{
    return (
        <>
        <div className="conatiner mx-auto px-4 my-10 p-4">
            <div className="w-full lg:flex lg:flex-row-reverse gap-4">
                <div className="lg:w-3/4 bg-white rounded">
                    <h2 className="text-2xl font-bold mb-4 ">Plays in Gonda(U.P)</h2>
                    <div className="flex flex-wrap">
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNyBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00319282-mhghfwmyql-portrait.jpg" title="Celebrating Salim Arif" subtitle="Multiple Venues"/>
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNyBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00319282-mhghfwmyql-portrait.jpg" title="Celebrating Salim Arif" subTitle="Multiple Venues"/>
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNyBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00319282-mhghfwmyql-portrait.jpg" title="Celebrating Salim Arif" subTitle="Multiple Venues"/>
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNyBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00319282-mhghfwmyql-portrait.jpg" title="Celebrating Salim Arif" subTitle="Multiple Venues"/>
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxNyBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00319282-mhghfwmyql-portrait.jpg" title="Celebrating Salim Arif" subTitle="Multiple Venues"/>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/4 p-4 bg-white rounded">
                    <h2 className="text-2xl font-bold mb-4">Filters</h2>
                    <div>
                        <PlayFilters title="Date" tags={["Today","Tomorrow","This Week"]} />
                    </div>
                    <div>
                        <PlayFilters title="Language" tags={["English","Hindi","Marathi","Tamil"]} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Plays;