import React from "react";
import PhotoCard from "./PhotoCard";
import './PhotoList.css';

function PhotoList({photos}){
    return(
        <div className="photo_list">
            {
                photos.map((pic,index)=>{
                    return(
                        <PhotoCard
                        key={index}
                        image={pic.image.medium}
                        name={pic.name}
                        season={pic.season}
                        rating={pic.rating.average}
                        />
                    )
                })
            }
        </div>
    );
}

export default PhotoList;