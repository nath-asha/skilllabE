import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Our Food Website</h1>
      
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages%2Ffood&psig=AOvVaw3tUgUWi5l9lhEzJTINCAE4&ust=1695629902369000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNicw4XmwoEDFQAAAAAdAAAAABAE" 
            alt="Delicious Food 1"
          />
          <Carousel.Caption>
            <h3>Delicious Dish 1</h3>
            <p>Explore our mouthwatering dishes</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Findian%2520food%2F&psig=AOvVaw3tUgUWi5l9lhEzJTINCAE4&ust=1695629902369000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNicw4XmwoEDFQAAAAAdAAAAABAJ" 
            alt="Delicious Food 2"
          />
          <Carousel.Caption>
            <h3>Delicious Dish 2</h3>
            <p>Discover new flavors and recipes</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="ihttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fdelicious-food&psig=AOvVaw3tUgUWi5l9lhEzJTINCAE4&ust=1695629902369000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNicw4XmwoEDFQAAAAAdAAAAABAS.jpg" 
            alt="Delicious Food 3"
          />
          <Carousel.Caption>
            <h3>Delicious Dish 3</h3>
            <p>Join us for a culinary adventure</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
