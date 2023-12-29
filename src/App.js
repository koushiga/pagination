import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import PhotoList from './components/PhotoList';


function App() {

  const [photos,setPhotos]=useState([]);
  const[currentPage,setCurrentPage]=useState(1);
  const[postPerPage,setPostPerPage]=useState(8);  


  useEffect(()=>{
    axios.get("https://api.tvmaze.com/shows/1/episodes")
    .then((res)=>{
    console.log(res.data);
    setPhotos(res.data)
    })
  })

  const lastPostIndex=currentPage*postPerPage;
  const firstPostIndex=lastPostIndex-postPerPage;
  const currentPost=photos.slice(firstPostIndex,lastPostIndex);

  return (
    <div className="App">
      <div className='content'>
        <h1>Pagination</h1>  
        <PhotoList photos={currentPost}/>
        <Pagination      
        totalPosts={photos.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        />
      </div>
    </div>
  )
}

export default App;
