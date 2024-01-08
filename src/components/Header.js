import styled from "styled-components";
import { FcMediumPriority } from "react-icons/fc";

function Header() {

    const StyledHeader = styled.header`
        font-family: American Typewriter, serif;
        background-color: black;
        color: #FFD700;
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
                <h1><FcMediumPriority />      WELCOME    <FcMediumPriority /></h1>
                <br></br>
                <h5>
"Step into a world of visual delight! Discover, explore, and adorn your screens with our captivating<br></br><center> collection of wallpapers. Your digital sanctuary begins here."</center>





</h5>
            </StyledHeader>
        </>
    );
}

export default Header;