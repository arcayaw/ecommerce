import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='bg-main-bg'>
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
