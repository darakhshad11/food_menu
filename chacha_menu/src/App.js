
import './App.css';
import Menu from './components/Menu';
function App() {
  const menuItems = [
    { name: 'Burger', price: 8.99 },
    { name: 'Pizza', price: 12.99 },
    { name: 'Salad', price: 6.99 },
    { name: 'Fries', price: 2.99 },
    { name: 'Soda', price: 1.99 },
    { name: 'Coffee', price: 1.99 },
    { name: 'Tea', price: 1.99 },
    { name: 'Ice Cream', price: 0.99 },
  ];
  return (
    <>
    <div className="App">
      <Menu menuItems={menuItems} />
    </div>
    
    </>
  );
}

export default App;
