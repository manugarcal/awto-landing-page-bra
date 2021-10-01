import './App.css';
import injectContext from "./store/appContext";
import Home from './views/Home';
import 'tachyons'

function App() {
  return (
    <div className="w-100 center ph3 ph5-l">
      <Home />
    </div>
  );
}

export default injectContext(App);
