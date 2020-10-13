import React from 'react';
import Contact from './components/Contact';
import './App.css';
import './components/contact.css';

function App(props) {
  return (
    <div className="App">
      <Contact name="Victor Stone" avatar="https://randomuser.me/api/portraits/men/50.jpg" status />
      <Contact name="Mae Jacobs" avatar="https://randomuser.me/api/portraits/women/69.jpg" status={false} />
      <Contact name="Elijah Cook" avatar="https://randomuser.me/api/portraits/women/33.jpg" status />
    </div>
  );
}

export default App;
