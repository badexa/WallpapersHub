import React from 'react';
import styled from 'styled-components';

import Header2 from '../Header2';
import Footer from '../Footer';

const AboutContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    h2 {
        color: #333;
        font-size: 24px;
        margin-bottom: 16px;
    }

    p {
        color: #555;
        font-size: 16px;
        line-height: 1.5;
        margin-bottom: 12px;
        font-size: 25px;

        a {
            color: #007bff;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;

function About() {
    return (
        <>
            <Header2 />
            <AboutContainer>
                <h2>About Us</h2>
                <p>
                    Welcome to our wallpapers website! We are passionate about providing a stunning collection
                    of high-quality wallpapers for you to personalize your devices.
                </p>
                <p>
                    Our mission is to offer a diverse range of wallpapers, catering to various interests and styles.
                    Whether you're a nature enthusiast, an art lover, or someone who just wants a cool background,
                    we've got you covered.
                </p>
                <p>
                    Explore our extensive collection and find the perfect wallpaper to enhance the look of your desktop,
                    laptop, or mobile device. Feel free to download and use our wallpapers for personal enjoyment.
                </p>
                <p>
                    Thank you for visiting our website. If you have any questions or suggestions, please
                    <a href="mailto:baderblehajallal@gmail.com"> contact us</a>.
                </p>
            </AboutContainer>
            <Footer />
        </>
    );
}

export default About;
