import './App.css';
import { SkinProvider } from './context/SkinContext';
import Wrapper  from './components/Wrapper';

function App() {

  return (
    <SkinProvider>
      <div className="App">
        <Wrapper />
      </div>
    </SkinProvider>
  );
}

export default App;
