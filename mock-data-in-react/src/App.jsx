// App.jsx
import "./App.css";
import Async from "./components/Async";
import TextDisplay from "./components/TextDisplay";

function App() {
  return (
    <>
      <h1>Learn React</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis nostrum
        non voluptatibus ratione reiciendis quae animi voluptas eveniet cum
        facilis.
      </p>
      <TextDisplay />
      <Async />
    </>
  );
}

export default App;
