import './App.css';
import './Css.css';
import Timer from './Timer';
import Logo from './unnamed.png';

  const App = () => {
    return (
      <div className="app">
        <div>
          <img src={Logo} alt='pt'/>
        </div>
        <div className="container">
          <h1 className="header">
            Dias até Lula ser reeleito:
          </h1>
          <Timer/>
        </div>
      </div>
    );
  };

export default App;