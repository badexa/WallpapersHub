import React, { useState } from "react";
import styled from "styled-components";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FcApproval } from "react-icons/fc";
import a1 from '../images/nature/a1.jpg';
import a2 from '../images/nature/a2.jpg';
import a3 from '../images/nature/a3.jpg';
import a4 from '../images/nature/a4.jpg';
import a5 from '../images/nature/a5.jpg';
import a6 from '../images/nature/a6.jpg';

const Espace = styled.div`
  background-color: black;
`;

const Titre = styled.h2`
  font-family: Lucida Grande;
  background-color: black;
  color: lawngreen; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20rem;
  font-size: xx-large;
`;

const Approval = styled(FcApproval)`
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
  background-color: #4CAF50;
  color: white;
  padding: 15px;
  border-radius: 5px;
  display: ${({ show }) => (show ? "block" : "none")};
  z-index: 999; /* Make sure it's above other elements */
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
    transition: background-color 0.3s ease; /* Smooth transition on hover */

    &:hover {
      background-color: firebrick;
    }

    &:active {
      background-color: #ff9800;
      animation: pulse 0.3s ease; /* Click animation */
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

const imageSources = [a1, a2, a3, a4, a5, a6];
const cardTitles = ["HD wallpaper of Milky Way", "Beatifull Waterfall", "Nature is beautiful", "Forest Road", "Mountains And Lake", "Amazing Landscape"];

function Cards1() {
  const [notificationVisible, setNotificationVisible] = useState(false);

  const handleDownload = (src) => {
    const link = document.createElement('a');
    link.href = src;
    const imageName = src.substring(src.lastIndexOf('/') + 1);

    link.download = imageName;
    link.click();

    // Show custom notification
    setNotificationVisible(true);
    setTimeout(() => {
      setNotificationVisible(false);
    }, 7000); // Hide notification after 3 seconds
  };

  return (
    <>
      <Espace>
        <Titre>
          <h3><Approval /> NATURE :   </h3>
        </Titre>

        <CardContainer>
          {imageSources.map((src, index) => (
            <Card key={index} style={{ width: '45rem', backgroundColor: 'black', marginBottom: '20px' }}>
              <Card.Img variant="top" src={src} style={{ height: '60%' }} />
              <Card.Body className="text-center">
                <Card.Title style={{ color: "white" }}>{cardTitles[index]}</Card.Title>
                <ButtonStyled variant="warning" className="mx-auto" onClick={() => handleDownload(src)}>
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

export default Cards1;
