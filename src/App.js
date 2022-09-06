import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Blog  from './pages/Blog';
function App() {
  return (
    <div className="container">
      <Routes>
        <Route element={<Home/>} exact path="/" ></Route>
        <Route element={<Blog/>} exact path="/blog/:id" ></Route>
      </Routes>
    </div>
  );
}

export default App;
