import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import '../App.css';

const Space = styled.div`
  background-color: black;
  height: 150px;
  color: black;
`;

const Section = styled.div`
  background-color: lightyellow;
`;

const DiscoverContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 16px;
  transition: box-shadow 0.3s, transform 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
`;

const GenreCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const GenreCard = styled(Link)`
  width: calc(50.33% - 20px);
  margin-bottom: 60px;
  text-decoration: none;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  div {
    padding: 20px;
    text-align: center;
    font-family: Impact, fantasy;
    font-size: 20px;
    color: #ffd700;
  }
`;

function Discover() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredGenres = [
    { to: '/nature', image: require('../images/nature.jpg'), name: 'Nature' },
    { to: '/abstract', image: require('../images/abstract.jpg'), name: 'Abstract' },
    { to: '/cars', image: require('../images/cars.jpg'), name: 'Cars' },
    { to: '/animals', image: require('../images/animals.jpg'), name: 'Animals' },
    { to: '/space', image: require('../images/space.jpg'), name: 'Space' },
    { to: '/samurai', image: require('../images/samurai.jpg'), name: 'Samurai' },
  ].filter((genre) => genre.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <Space>
        <div>fzfzefko<br></br>zegfzg<br></br>ifngn<br></br>zrgzgz<br></br>fnhzieflz<br></br>zefnzl</div>
      </Space>

      <Section>
        <DiscoverContainer>
          <SearchBar
            type="text"
            placeholder="Search Genre..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <GenreCardContainer>
            {filteredGenres.map((genre) => (
              <GenreCard key={genre.to} to={genre.to}>
                <img src={genre.image} alt={genre.name} />
                <div>{genre.name}</div>
              </GenreCard>
            ))}
          </GenreCardContainer>
        </DiscoverContainer>
      </Section>
    </>
  );
}

export default Discover;
