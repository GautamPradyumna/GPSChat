import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
