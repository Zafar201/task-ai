const SkeletonLoader = () => (
    <div className="carousel-container">
      <div className="carousel">
        {[-1, 0, 1].map((position) => (
          <div key={position} className={`carousel-item skeleton position-${position}`}>
            <div className="skeleton-image"></div>
            <div className="skeleton-content">
              <div className="skeleton-text"></div>
              <div className="skeleton-button"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  export default SkeletonLoader