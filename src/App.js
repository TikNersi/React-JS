import './App.css';
import Sidebar from './Sidebar/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import Fields from './Fields/Fields';
import Project from './Project/Project';
function App() {
  return (
    <Router>
      <div className="App">
        <div className="containerr">
        <Sidebar />
        <Project />
        </div>
      </div>
    </Router>
  );
}
 
export default App;