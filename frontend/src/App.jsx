import './App.css';
import Login from './components/Login.jsx';
import {io} from 'socket.io-client';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Connect to the local Socket.IO server
    const socket = io('http://localhost:3001');

    // Event listeners for socket connection
    socket.on('connect', () => {
        console.log('Connected to Socket.IO server');
    });

    socket.on('newMessage', (message) => {
        console.log('New message received:', message);
    });

    // Send a test message to the server
    socket.emit('chat message', { from: 'vitor', to: 'joao paulo', message: 'te amo' });
  })

  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;