// IMPORT useState
import React, {useState} from 'react';
import './styles.css';
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr
import imagesArr from './imageData'

export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage] 
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY
  const [bigImage, setBigImage] = useState(imagesArr[0].img);
  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
  const handleClick = (imageURL) => {setBigImage(imageURL)}
  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL
  const images = imagesArr.map((ele, index)=>{
    return(
      <img className="thumb"
      src={ele.img}
      city={ele.city}
      onClick={() => {handleClick(ele.img)}}
      key={index}
      />
    );
  });

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {images}
        </div>
        {<img id="bigimage" src={bigImage}/>}
      </div>
    </div>
  );
}
