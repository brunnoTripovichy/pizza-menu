import React from 'react';

const Order = ({ closeTime }) => {
  return (
    <div className='order'>
      <p>We are open until {closeTime}:00 PM. Come visit us or order online!</p>
      <button className='btn'>Order Now</button>
    </div>
  );
};

// Export the Order component using React.memo to prevent unnecessary re-renders
export default React.memo(Order);
