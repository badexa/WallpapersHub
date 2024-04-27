// import React, { useState } from "react";
// import styled from "styled-components";
// import { BsBookmarkStarFill } from "react-icons/bs";
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import pic1 from '../images/pic1.jpg';
// import pic2 from '../images/pic2.jpg';
// import pic3 from '../images/pic3.jpg';
// import pic4 from '../images/pic4.jpg';
// import pic5 from '../images/pic5.jpg';
// import pic6 from '../images/pic6.jpg';
// import { HiArrowCircleDown } from "react-icons/hi";

// const Espace = styled.div`
//   background-color: black;
// `;

// const Titre = styled.h3`
//   font-family: FreeMono, monospace;
//   background-color: black;
//   color: chartreuse;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 40rem;
//   font-size: xxx-large;
// `;

// const Fill = styled(BsBookmarkStarFill)`
//   color: chartreuse;
// `;

// const Down = styled(HiArrowCircleDown)`
//   color:  #FFD700;
//   font-size: 50px;
// `;

// const CardContainer = styled.div`
//   display: flex;
//   justify-content: space-around;
//   flex-wrap: wrap;
// `;

// const NotificationContainer = styled.div`
//   position: fixed;
//   bottom: 20px;
//   right: 20px;
//   background-color: #4CAF50;
//   color: white;
//   padding: 15px;
//   border-radius: 5px;
//   display: ${({ show }) => (show ? "block" : "none")};
//   z-index: 999; /* Make sure it's above other elements */
//   text-align: center;
//   border: 2px solid #45a049;
//   animation: fadeIn 0.5s ease;

//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   }
// `;

// const ButtonStyled = styled(Button)`
//   && {
   
//     color: white;
//     border: none;
//     cursor: pointer;
//     margin-top: 10px;
//     transition: background-color 0.3s ease; /* Smooth transition on hover */

//     &:hover {
//       background-color: firebrick;
//     }

//     &:active {
//       background-color: #ff9800;
//       animation: pulse 0.3s ease; /* Click animation */
//     }
//   }

//   @keyframes pulse {
//     from {
//       transform: scale(1);
//     }
//     to {
//       transform: scale(1.1);
//     }
//   }
// `;

// const imageSources = [pic1, pic2, pic3, pic4, pic5, pic6];
// const cardTitles = ["A Beautful Road", "Big Space Atmosphere", "Female samurai using 2 swords", "Black Hole" , "Stunning Blood Moon" , "High Skilled Samurai"];

// function Top() {
//   const [notificationVisible, setNotificationVisible] = useState(false);

//   const handleDownload = (src) => {
//     const link = document.createElement('a');
//     link.href = src;
    
//     const imageName = src.substring(src.lastIndexOf('/') + 1);

//     link.download = imageName;
//     link.click();

//     // Show custom notification
//     setNotificationVisible(true);
//     setTimeout(() => {
//       setNotificationVisible(false);
//     }, 7000); // Hide notification after 3 seconds
//   };

//   return (
//     <>
//       <Espace>
//         <Titre>
//           <h3><Fill /> TOP WALLPAPERS <Fill /></h3><br></br>
//           <p>       <Down /> <Down />  <Down />   <br></br>     <Down/>   <Down/> <Down/>    </p>
//         </Titre>

//         <CardContainer>
//           {imageSources.map((src, index) => (
//             <Card key={index} style={{ width: '45rem', backgroundColor: 'black', marginBottom: '20px' }}>
//               <Card.Img variant="top" src={src} style={{height:'60%', borderRadius: '30px',border:'solid white 2px'}} />
//               <Card.Body className="text-center">
//                 <Card.Title style={{ color: "white" }}>{cardTitles[index]}</Card.Title>
//                 <ButtonStyled variant="warning" className="mx-auto" onClick={() => handleDownload(src)}>
//                   DOWNLOAD
//                 </ButtonStyled>
//               </Card.Body>
//             </Card>
//           ))}
//         </CardContainer>

        
//         <NotificationContainer show={notificationVisible}>
//           Download Successful!!!
//             Check Your Dowanloads Folder
//         </NotificationContainer>
//       </Espace>
//     </>
//   );
// }

// export default Top;


import React from 'react';
import { connect } from 'react-redux';
import { showNotification, hideNotification } from '../redux/actions';
import styled from 'styled-components';
import { BsBookmarkStarFill } from 'react-icons/bs';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { HiArrowCircleDown } from 'react-icons/hi';
import store from '../redux/store';

const Espace = styled.div`
  background-color: black;
`;

const Titre = styled.h3`
  font-family: FreeMono, monospace;
  background-color: black;
  color: chartreuse;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40rem;
  font-size: xxx-large;
`;

const Fill = styled(BsBookmarkStarFill)`
  color: chartreuse;
`;

const Down = styled(HiArrowCircleDown)`
  color: #ffd700;
  font-size: 50px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const NotificationContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #4caf50;
  color: white;
  padding: 15px;
  border-radius: 5px;
  display: ${({ show }) => (show ? 'block' : 'none')};
  z-index: 999;
  text-align: center;
  border: 2px solid #45a049;
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ButtonStyled = styled(Button)`
  && {
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: firebrick;
    }

    &:active {
      background-color: #ff9800;
      animation: pulse 0.3s ease;
    }
  }

  @keyframes pulse {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.1);
    }
  }
`;

const imageSources = [
  'pic1.jpg',
  'pic2.jpg',
  'pic3.jpg',
  'pic4.jpg',
  'pic5.jpg',
  'pic6.jpg',
];
const cardTitles = [
  'A Beautful Road',
  'Big Space Atmosphere',
  'Female samurai using 2 swords',
  'Black Hole',
  'Stunning Blood Moon',
  'High Skilled Samurai',
];

function Top({ notificationVisible, showNotification, hideNotification }) {
  const handleDownload = (src) => {
    const link = document.createElement('a');
    link.href = `/images/${src}`; 

    const imageName = src.substring(src.lastIndexOf('/') + 1);

    link.download = imageName;
    link.click();


    showNotification();
    setTimeout(() => {
      hideNotification();
    }, 7000);
  };

  return (
    <>
      <Espace>
        <Titre>
          <h3>
            <Fill /> TOP WALLPAPERS <Fill />
          </h3>
          <br></br>
          <p>
            {' '}
            <Down /> <Down /> <Down /> <br></br> <Down /> <Down /> <Down />{' '}
          </p>
        </Titre>

        <CardContainer>
          {imageSources.map((src, index) => (
            <Card
              key={index}
              style={{
                width: '45rem',
                backgroundColor: 'black',
                marginBottom: '20px',
              }}
            >
              <Card.Img
                variant="top"
                src={`./../images/${src}`} 
                style={{ height: '60%', borderRadius: '30px', border: 'solid white 2px' }}
              />
              <Card.Body className="text-center">
                <Card.Title style={{ color: 'white' }}>{cardTitles[index]}</Card.Title>
                <ButtonStyled
                  variant="warning"
                  className="mx-auto"
                  onClick={() => handleDownload(src)}
                >
                  DOWNLOAD
                </ButtonStyled>
              </Card.Body>
            </Card>
          ))}
        </CardContainer>

        <NotificationContainer show={notificationVisible}>
          Download Successful!!! Check Your Downloads Folder
        </NotificationContainer>
      </Espace>
    </>
  );
}

const mapStateToProps = (state) => ({
  notificationVisible: state.notificationVisible,
});

const mapDispatchToProps = {
  showNotification,
  hideNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(Top);
