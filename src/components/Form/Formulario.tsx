import { useState } from "react";
import Button from "../Button/Button";
import './formulario.css'

// import Input from "./Input";

export default function Formulario() {
    const [name, setName] = useState("");
    const [endereco, setEndereco] = useState("");
    const [show, setShow] = useState(false);
    const [schooling, setSchooling] = useState("Médio");
    

    // const show = true;       Depois fazer botão para cadastrar toggle
    
    return (
        <form>
            <h1>Formulario</h1>
            <Button onClick={(event) => {
                    event.preventDefault();
                    setShow(!show)
                }}>
                {show ? 'Oculta Cadastro' : 'Cadastrar'}
            </Button>
            {show ? (
                <>
                    <div className="label-input">
                        <label htmlFor="Nome">
                            Nome:
                            <input
                                id="Nome"
                                type="text"
                                value={name}
                                onChange={({ target }) => setName(target.value)}
                                />
                        </label>
                        <label htmlFor="Endereco">
                                Endereço:
                                <input
                                    id="Endereco"
                                    type="text"
                                    value={endereco}
                                    onChange={({ target }) => setEndereco(target.value)}
                                    />
                        </label>
                        <label htmlFor="Escolaridade">
                            Escolaridade:
                            <select
                                id="Escolaridade"
                                value={schooling}
                                onChange={({ target }) => setSchooling(target.value)}
                                >
                                    <option value="Médio">Médio</option>
                                    <option value="Superior">Superior</option>
                                    <option value="Pós-Graduação">Pós-Graduação</option>
                            </select>
                        </label> 
                    </div>
                </>
            ) : (
                <h3>...</h3>
            )}
     
        </form>
    )
}