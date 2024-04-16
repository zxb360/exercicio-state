# React + TypeScript + Vite

# Exercicio de revisão
## Passo 1 - Adicionar botão e input
   
    // return (
    //   <>
    //     <h1>Caixa de ferramentas de uma Pessoa Desenvolvedora</h1>
    //     <h2>{toolKit[index]}</h2>
    //     <button onClick={handlePreviousClick}>Anterior</button>
    //     <button onClick={handleNextClick}>Próximo</button>
        <section>
          <h3>Adicione novas ferramentas:</h3>
          <input />
          <button>Adicionar</button>
        </section>
    //     </>
    //   );
    // }
  
    // export default App;

## Passo 2 - Criando um estado

    function App() {
      const [stacks, setStacks] = useState([
        'JavaScript',
        'TypeScript',
        'React',
        'HTML',
        'CSS',
        'Node',
      ])
      const [index, setIndex] = useState(0);
      const [inputText, setInputText] = useState(''); 
      

## Passo 3 - Criando um estado para armazenar o valor do input & Passo 4 - Implementando a funcionalidade de adicionar itens à lista

         <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          />
        <button onClick={() => {
          if (inputText !== '') {
            setStacks([...stacks, inputText]); // acrescentando stacks + input  <-- ESSA É A IMPLEMENTAÇÃO
            setInputText(''); // Quando adcionado o input fica vazio
          }
        }}>
