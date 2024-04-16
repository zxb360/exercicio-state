import { useState } from 'react'
import './App.css'

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

  function carrosselHandleClickNext() {
    if (index + 1 < stacks.length) {
      setIndex(index + 1);  // acrescenta mais um para index
    } else {
      setIndex(0);
    }
  }

  function carrosselHandlecClickPreview() {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(stacks.length - 1);
    }
  }

  return (
    <>
      <section className='lista-adicao'>
        <h2>Adicione Stacks</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          />
        <button onClick={() => {
          if (inputText !== '') {
            setStacks([...stacks, inputText]); // acrescentando stacks + input
            setInputText(''); // Quando adcionado o input fica vazio
          }
        }}>
          Add
        </button>
      </section>
      <h1>Carrossel de stack</h1>
      <span className='title-stack'>{stacks[index]}</span>
      <div className='container-button'>
        <div className='carrossel-button-next'>
          <button onClick={carrosselHandleClickNext}>
            Next
          </button>
        </div>
        <div className='carrossel-button-preview'>  
          <button onClick={carrosselHandlecClickPreview}>
            Preview
          </button>
        </div>
      </div>

    </>
  )
}

export default App
