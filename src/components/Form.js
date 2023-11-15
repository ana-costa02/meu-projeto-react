import {useState} from 'react';

function Form() {
    function cadastrarUsuario (e) {
        e.preventDefault();
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`) 
    }

    const [name, setName] = useState("");   
    const [password, setPassword] = useState("");   

 return (  
    <div>
        <h1>Meu Cadastro</h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <label htmlfor="nome">Nome:</label>
                <input type="text" id="name" name="name" placeholder="Digite o seu nome" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label htmlfor="password">Senha:</label>
                <input type="password" id="password" name="password" placeholder="Digite a sua senha" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <input type="text" value="Cadastrar"/>
            </div>
        </form>
    </div>
    )
}

export default Form;