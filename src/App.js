import logo from './laura.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
        Hi, I'm Laura! A <strong>Full-Stack Web Developer</strong> based in Halifax, NS.
        </h1>
        <h3>Under Construction!</h3>
          <p>
            In the meantime, check out a few of my projects:
          </p>
          <ul>
            <li>
              <p><a href="https://scheduler-laurtann.netlify.app/">Scheduler</a> An Interview Scheduler App</p>
            </li>
            <li>
              <p><a href="https://tweeter-laurtann.herokuapp.com/">Tweeter</a> A Twitter Clone</p>
            </li>
            <li>
              <p><a href="https://tinyapp-laurtann.herokuapp.com/urls">Tinyapp</a> A URL Shortener</p>
            </li>
            <li>
              <p><a href="http://www.lauratannahill.com/robofriends/">Robofriends</a> A Robot Search App</p>
            </li>
          </ul>
      </header>
    </div>
  );
}

export default App;
