import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';

function App() {
  const [show,setShow] = useState(false)
  const handleShow=()=> setShow(!show)
  return (
   <div>
     <h1>WS HOOKS</h1>
     {/* <Counter show={show} setShow={setShow}/> */}
     <button onClick={handleShow}>{show ? 'Hide' : 'Show'}</button>
     {
       show && <Counter/>
     }
     
   </div>
  );
}

export default App;
