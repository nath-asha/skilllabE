import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="image1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        {/* Add more Carousel items as needed */}
      </Carousel>
    </div>
  );
};

export default Home;


