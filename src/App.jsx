// src/App.jsx
import './App.css';
import ImageOne from './components/ImageOne';
import ImageTwo from './components/ImageTwo';
import ImageThree from './components/ImageThree';
import ImageFour from './components/ImageFour';
import Nav from './components/Nav'
import Main from './components/Main'
function App() {
  return (
    
    <div className="App">
    
    <div className="content">
    < Nav  />
    < Main />
    </div>
    
      <div className='image'>
    < ImageOne />
    < ImageTwo />
    < ImageThree />
    < ImageFour />
    </div>
    </div>
  );
}

export default App;