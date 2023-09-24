import React from 'react';

const MyRecipe = () => {
  return (
    <div>
      <h1>My Recipe Page</h1>
      {
        <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/* Food Item 1 */}
          </div>
          <div className="col-md-4">
            {/* Food Item 2 */}
          </div>
          <div className="col-md-4">
            {/* Food Item 3 */}
          </div>
          {/* Repeat for additional food items */}
        </div>
      </div>      
      }
    </div>
  );
};

export default MyRecipe;
