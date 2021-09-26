import './App.css';
import injectContext from "./store/appContext";
import Home from './views/Home';

function App() {
  return (
    <div className="App">
     <Home />
    </div>
  );
}

export default injectContext(App);
