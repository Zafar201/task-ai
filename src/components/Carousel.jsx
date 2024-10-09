import { useState } from "react";
import SkeletonLoader from "./SkeltonLoader";

const Carousel = ({ data, isLoading }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };
  
    if (isLoading) {
      return <SkeletonLoader />;
    }
  
    const getVisibleCards = () => {
      const cards = [];
      for (let i = -1; i <= 1; i++) {
        const index = (currentIndex + i + data.length) % data.length;
        cards.push({ ...data[index], position: i });
      }
      return cards;
    };
  
    return (
      <div className="carousel-container">
        <button onClick={prevSlide} className="carousel-nav carousel-prev">❮</button>
        <div className="carousel">
          {getVisibleCards().map((item, index) => (
            <div key={index} className={`carousel-item position-${item.position}`}>
              <img src={item.image_url} alt={`Character ${index + 1}`} />
              <div className="carousel-content">
                <h3>{item.name}</h3>
                <button className="chat-button">Chat</button>
              </div>
              <div className="image-label">Chip text</div>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="carousel-nav carousel-next">❯</button>
      </div>
    );
  };

  export default Carousel