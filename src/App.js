import './App.css';
import React from 'react';
import Header from './components/Header/index';
import CreateEvent from './components/CreateEvent/index';
import Content from './components/Content/index';
import Footer from './components/Footer/index';
import EventProvider from './providers/EventProvider/index.jsx';

function App() {

  return (
    <div className="App">
      <Header />

      <EventProvider>
        <CreateEvent />
        <Content />
      </EventProvider>

      <Footer />
    </div>
  );
}

export default App;