import React from "react";
import './PhotoCard.css';
import Container from 'react-bootstrap/Container';


function PhotoCard({image,name,season,rating}){
    return(
        <div >
                <div className="card">
            <div className="card_image">
                <img src={image} alt={name}/>
            </div>
            <div className="card_info">
                <p><b>Name : {name}</b></p>
                <p><b>Season : {season} | <span>Rating : {rating}</span></b></p>
                <button className="info_btn">See More</button>
            </div>
            </div>
        </div>
    );
}

export default PhotoCard;