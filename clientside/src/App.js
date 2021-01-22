import './App.css';
import { SkinProvider } from './context/SkinContext';
import Wrapper  from './components/Wrapper';
import UserList from './components/UserList';
import UserLogin from './components/UserLogin';

function App() {

  return (
    <SkinProvider>
      <div className="App">
        <UserLogin />
        <Wrapper />
        <UserList />
      </div>
    </SkinProvider>
  );
}

export default App;
