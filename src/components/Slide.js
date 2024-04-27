import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import a1 from '../images/nature/a1.jpg'
import b3 from '../images/abstract/b3.jpg'
import c5 from '../images/cars/c5.jpg'
import d1 from '../images/animals/d1.jpg'
import e1 from '../images/space/e1.jpg'
import f4 from '../images/samurai/f4.jpg'
import a2 from '../images/nature/a2.jpg'


const Div = styled.div`
 height: 500px;
 width :90%;
 margin: auto;
 

`;
const Espace = styled.div`
background-color: black;

`;

function Slide(){


const fadeImages = [
 { 
    url: a1,
    caption: 'First Slide'
 },
 {
    url: b3,
    caption: 'Second Slide'
 },
 {
    url: c5,
    caption: 'Third Slide'
 },
 {
    url: d1,
 },
 {
    url: e1,
    caption: 'Third Slide'
 },
 {
    url: f4,
    caption: 'Third Slide'
 },
 {
    url: a2,
    caption: 'Third Slide'
 },
];





 return (
        <Espace>
    <div className="slide-container">
      <Fade Duration={500}>
        {fadeImages.map((fadeImage, index) => (
          <Div key={index}>
            <img style={{ width: '100%', height:'500px' , borderRadius: '10px',border:'solid #FFD700 5px' }} src={fadeImage.url} alt={`Slide ${index + 1}`} />
          </Div>
        ))}
      </Fade>
    </div>
    </Espace>
 )
}

export default Slide;