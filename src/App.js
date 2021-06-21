import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Project from './Project/Project';
import Sidebar from './Sidebar/Sidebar';
function App() {
  return (
    <Router>

        <Sidebar />
      <div className="App">
        <Project /> 
      </div>
    </Router>
  );
}
 
export default App;