import Order from './Order';

const Footer = () => {
  const hour = new Date().getHours();
  const openTime = 10;
  const closeTime = 23;
  const isOpen = hour >= openTime && hour <= closeTime;

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order closeTime={closeTime} />
      ) : (
        <p>
          We are closed. We open at {openTime}:00 AM. Visit us tomorrow or order
          online!
        </p>
      )}
    </footer>
  );
};

export default Footer;
