import { pizzaData } from './data';
import PizzaItem from './PizzaItem';

const Menu = () => {
  const isNotEmpty = pizzaData?.length > 0;

  return (
    <main className='menu'>
      <h2>Menu</h2>

      {isNotEmpty ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className='pizzas'>
            {pizzaData.map((pizza) => (
              <PizzaItem key={pizza.name} pizza={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>There are no pizzas available at the moment.</p>
      )}
    </main>
  );
};

export default Menu;
