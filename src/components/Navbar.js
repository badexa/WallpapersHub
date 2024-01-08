import styled from "styled-components";
import { MdWallpaper } from "react-icons/md";
import { Link } from "react-router-dom";




function Navbar() {

    const Nav = styled.nav`
        color: black;
        background-color:	#FFD700;
        display:flex;
        justify-content:space-between;
        align-items: center;
        padding: 1rem;
        font-family: sans-serif;
       
    `;
 

    const NavLinks = styled.span`
        display: flex;
        justify-content:space-evenly;
        align-items: center;
        width: 35%;
    `;
    const LinkItem = styled(Link)`
        color: white;
        text-decoration: none;
        font-size: 30px;
        align-items: center;
        &:hover {
            color: black;
        }
    `;
      const Div = styled.div`
       display: flex;
       justify-content: center;
       align-items: center;
    `;

    const Input = styled.input`
        width: 50%;
        min-width: 300px;
        padding: 12px 24px;
        border-radius: 24px;
        font-size: 16px;
        border: solid;
        outline: none;
    `;
    const H1= styled.h1`
    justify-content:space-evenly;
    align-items: center;
    display: flex;
    height: 30px;   
    font-family: Brush Script MT, Brush Script Std, cursive;
    font-size: 35px;  
    `;
    const Wallpaper= styled(MdWallpaper)`
    font-size: 50px;
    `;

    const WallpaperLink = styled(Link)`
    color: black;
    text-decoration: none;
    font-size: 30px;
    align-items: center;
    &:hover {
        color: cadetblue;
    }
`;

return (
    <>
        <Nav>
            <NavLinks>
                <H1>
                    <WallpaperLink to='/'>
                        <Wallpaper /> Wallpapers
                    </WallpaperLink>
                </H1>

                <LinkItem to='/'>Home</LinkItem>
                <LinkItem to='Discover'>Discover</LinkItem>
                <LinkItem to="/About">About</LinkItem>
            </NavLinks>

            <Div className="search-bar">
                <Input id="search" type="search" placeholder="&#x1F50D; Start typing to search..." />
            </Div>
        </Nav>
    </>
);
}

export default Navbar;