import React, { useEffect, useState } from 'react'
import Carousel from '../components/Carousel';

function Homescreen() {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://candyai.devicion.com/chat/list/character');
        const data = await response.json();
        setCharacters(data.characters);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching characters:', error);
        setIsLoading(false);
      }
    };
    fetchCharacters();
  }, []);
  return (
    <main className="content">
          <h1>Compani AI</h1>
          <p className="subtitle">Relax and let your AI companion take care of everything, anytime, anywhere.</p>
          <Carousel data={characters} isLoading={isLoading} />
          <button className="explore-more">Explore More</button>
        </main>
  )
}

export default Homescreen