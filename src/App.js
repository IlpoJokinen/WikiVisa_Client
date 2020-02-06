import React, { useEffect } from 'react';
import './App.css';
import io from 'socket.io-client'

const socket = io('http://localhost:3001')

function App() {
  useEffect(() => {
    socket.on('someoneClicked', (data) => {
      console.log(data)
    })

    socket.on('senderConfirmation', (data) => {
      console.log(data)
    })
  })

  const pingConnectedNodes = (event) => {
    event.preventDefault()
    const message = 'Someone clicked...'
    socket.emit('click', message)
  }

  return (
    <div className="App">
      <h3>Send a message to connected nodes</h3>
      <form onSubmit={pingConnectedNodes}>
        <input type="submit" value="Ping all nodes" />
      </form>
    </div>
  );
}

export default App;
