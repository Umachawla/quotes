
import Navbar from './components/Navbar';
import Quote from './components/Quote';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
    <Navbar/>
    <Quote/>
    </GlobalProvider>
  );
}

export default App;
