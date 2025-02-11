import './index.css';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

const App = () => {
  return (
    <div className='container'>
      <Header title='Ristoranti' />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
