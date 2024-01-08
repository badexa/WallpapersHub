import styled from "styled-components";
import backgroundImage from "../images/ii.jpg";

function Header2() {
  const StyledHeader = styled.header`
    font-family: FreeMono, monospace;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    color: lightgray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 25rem;
    font-size: xx-large;
    & h1 {
      color: white;
      margin: 1rem auto;
    }
  `;

  return (
    <>
      <StyledHeader>
        <div>
        
        </div>
      </StyledHeader>
    </>
  );
}

export default Header2;
