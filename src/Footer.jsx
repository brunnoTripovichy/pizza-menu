import Order from './Order';
import { OPEN_TIME, CLOSE_TIME } from './data';

const Footer = () => {
  const hour = new Date().getHours();
  const closingIn = CLOSE_TIME - hour;
  const isOpen = hour >= OPEN_TIME && hour <= CLOSE_TIME;

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order closeTime={CLOSE_TIME} />
      ) : (
        <p>
          We are closed. We open at {OPEN_TIME}:00 AM.{' '}
          {closingIn > 0
            ? `Reopening in ${closingIn} hours.`
            : 'See you tomorrow!'}
        </p>
      )}
    </footer>
  );
};

export default Footer;
