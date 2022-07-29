import './App.css';
import './Css.css';
import Timer from './Timer';
import ReactDOM from 'react-dom';

  const App = () => {
    return (
      <div className="app">
        <div className="container">
          <h1 className="header">
            O próximo Ano Novo é em:
          </h1>
          <Timer/>
        </div>
      </div>
    );
  };

export default App;