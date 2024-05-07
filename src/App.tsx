import { useState } from 'react'
import './App.css'
import Formulario from './components/Form/Formulario';

function App() {
  const [books, setBooks] = useState([
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
    if (index + 1 < books.length) {
      setIndex(index + 1);  // acrescenta mais um para index
    } else {
      setIndex(0);
    }
  }

  function carrosselHandlecClickPreview() {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(books.length - 1);
    }
  }

  return (
    <>
      <section className='lista-adicao'>
        <h2 style={{color: 'black'}}>Adicione Stacks</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          />
        <button onClick={() => {
          if (inputText !== '') {
            setBooks([...books, inputText]); // acrescentando stacks + input
            setInputText(''); // Quando adcionado o input fica vazio
          }
        }}>
          Add
        </button>
      </section>
      <h1>Carrossel de stack</h1>
      <span className='title-stack'>{books[index]}</span>
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
      <section>
        <Formulario />
      </section>
    </>
  )
}

export default App
