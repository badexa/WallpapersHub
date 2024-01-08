import styled from "styled-components";

const MainContainer = styled.div`
  background-color: black;
  padding-top: 150px;
`;

const StyledFooter = styled.footer`
  font-family: Luminari, fantasy;
  background-color: #FFD700;
  color: Black;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  width: 100%;
  bottom: 0;
  height: 120px;
`;

const FooterSection = styled.div`
  margin: 0 20px;
`;

const CopyrightText = styled.h3`
  margin: 0;
`;

function Footer() {
  return (
    <MainContainer>
      <StyledFooter>
       

        <FooterSection>
          <h4>Description :</h4>
          <p>
          Transform your screens with our exquisite wallpaper collection. Discover a world of visual delight as our curated selection brings beauty, inspiration, and personality to your devices .
          </p>
        </FooterSection>

        <FooterSection>
          <CopyrightText>
            &copy; Bader Belhaj Allal Website 2023
          </CopyrightText>
        </FooterSection>
      </StyledFooter>
    </MainContainer>
  );
}

export default Footer;
