import "./App.css";
import { CharacterList } from "./components/CharacterList";
import logo from "./assets/logo.png";
function App() {
  return (
    <div className="App">
      <img src={logo} alt="rick-morty-logo" />
      <h3>App</h3>
      <p></p>
      <CharacterList></CharacterList>
    </div>
  );
}

export default App;
