import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
      <div className="flex flex-col h-full w-full">
        <div>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
        </div>
        <Header />
        <Home className="flex-grow" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
