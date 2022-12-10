import './App.css';
import ChangeColors from './components/ChangeColors';
import Login from './components/Login';
import Persons from './components/Persons';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Profile/>
      <Login/>
      <ChangeColors/>
      <hr/>
      <Persons/>
    </div>
  );
}

export default App;
