import "./App.css";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import List from './components/List';

function App() {

  const nome = "Ana";

  return (
    <div className="App">
      <h1>Testando css</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Ana" />
      <SayMyName nome="Maria" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Ana"
        idade="31"
        profissao="Programadora"
        foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  );
}

export default App;
