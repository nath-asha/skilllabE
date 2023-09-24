import React from 'react';

const MyRecipe = () => {
  const foodItems = [
    {
      name: 'Delicious Dish 1',
      imageSrc: 'food1.jpg', // Replace with the URL of your first food item image
      price: '$9.99',
    },
    {
      name: 'Tasty Treat 2',
      imageSrc: 'food2.jpg', // Replace with the URL of your second food item image
      price: '$12.99',
    },
    {
      name: 'Savory Delight 3',
      imageSrc: 'food3.jpg', // Replace with the URL of your third food item image
      price: '$10.49',
    },
    // Add more food items as needed
  ];

  return (
    <div>
      <h1>My Recipe Page</h1>
      <div className="container">
        <div className="row">
          {foodItems.map((food, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <img
                  src={food.imageSrc}
                  alt={food.name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{food.name}</h5>
                  <p className="card-text">Price: {food.price}</p>
                  {/*  */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyRecipe;
