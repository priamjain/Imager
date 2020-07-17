import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
      <Header></Header>
        <Main></Main>
    </div>
  );
}

export default App;
