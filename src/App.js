import logo from './logo.svg';
import './App.css';
import { fields } from "./data/formdata";
import { Dynamicform } from "./components/Dynamicform";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="login-container">
      <h1>Dynamic form</h1>
       <Dynamicform fields={fields} /> 
    </div>
  );
}

export default App;
