const Order = ({ closeTime }) => {
  return (
    <div className='order'>
      <p>We are open until {closeTime}:00 PM. Come visit us or order online!</p>
      <button className='btn'>Order Now</button>
    </div>
  );
};

export default Order;
