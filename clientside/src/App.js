import './App.css';
import { SkinProvider } from './context/SkinContext';
import Wrapper  from './components/Wrapper';
import UserLogin from './components/UserLogin';

function App() {

  return (
    <SkinProvider>
      <div className="App">
        <UserLogin />
        <Wrapper />
      </div>
    </SkinProvider>
  );
}

export default App;
