import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import Footer from './Footer';

// Define the App component
function App() {
  let name = "wscube";
  let l = [10, 20, 30, 40];
  let obj = {
    'name': "ws",
    'cName': "mern",
    'desc': 'React js'
  };
  let status = true;

  return (
    <div className="main">
      <h1>{name}</h1>
      <Header />
   
      <div className='row'>
        {/* Use Card component correctly */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />

      {/* Display array values */}
      {l.map((v) => (
        <div key={v}>{v}</div>
      ))}

      <div>{obj.cName}</div>

      {/* Conditional rendering based on status */}
      {status ? (
        <h1 style={{ color: 'red', backgroundColor: 'yellow' }}>
          Welcome to wscube
        </h1>
      ) : (
        <p>--</p>
      )}
    </div>
  );
}

export default App;

// Define the Card component
function Card() {
  return (
    <div className='cardItems'>
      Card Div
    </div>
  );
}
