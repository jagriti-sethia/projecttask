
import './App.css';
import {
  Routes,
  Route,
  
} from "react-router-dom";
import   { One } from './components/container/one';
 




function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<One />} />
    </Routes>
    </div>
  );
}

export default App;
