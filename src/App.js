import "./App.css";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {

  const nome = "Ana";

  return (
    <div className="App">
      <SayMyName nome="Ana" />
      <SayMyName nome="Maria" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Ana"
        idade="31"
        profissao="Programadora"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
