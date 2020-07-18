import React,{useState} from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import MyList from './Components/MyList/MyList'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
	const [liked, setLiked] = useState([]);
	const addToLiked = (id)=>setLiked((prev) => [...prev,id])
  return (
    <div className="App">
      <Header></Header>
      <div className='d-flex flex-row justify-content-around'>
      	<MyList liked={liked}></MyList>
        <Main addToLiked={addToLiked}></Main>
       </div>
    </div>
  );
}

export default App;
