import './App.css';
import React from 'react';
import Modal from './components/Modal/Modal';

function App() {

  const [isOpen, setIsOpen] = React.useState(false);

  console.log(isOpen);
  
  return (
    <div className="App">
      <h1>React Tabs Component Demo</h1>
      <button onClick={() => setIsOpen(true)}>Click me to open modal</button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>This is a test modal</Modal>
    </div>
  );
}

export default App;
