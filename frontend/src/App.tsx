import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetchUserData();
  }, []);

  function fetchUserData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>👾 Inshur: full stack tech test</h1>
        <a
          className="App-link"
          href="https://github.com/Inshur/full-stack-test"
          target="_blank"
          rel="noopener noreferrer"
        >
          github repo
        </a>
      </header>
    </div>
  );
}

export default App;
