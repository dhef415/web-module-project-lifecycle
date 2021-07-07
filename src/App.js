import './App.css';
import User from './components/UserComponent';
import Followers from './components/Followers';

function App() {
  return (
    <div className='App'>
      <h1 style={{color: 'green'}}>My Github User Card</h1>
      <h2 style={{color:'green'}}>👀 No Dark Mode Needed 👀</h2>
      <User />
      <Followers />
    </div>
  );
}

export default App;