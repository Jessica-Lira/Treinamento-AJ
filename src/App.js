import { useState } from 'react';
import './App.css';
import Btn from './components/button';
import Input  from './components/input';

export default function App() {
  
  const [ newTodo, setNewTodo ] = useState('');
  const [ todos, setTodos ] = useState(['teste', 'teste2', 'teste3', 'teste4']);

  const listaLayout = todos.map(todo => (
    <li> {todo} </li>
  ))
  
  function clickBotao(msg) {
      setTodos(todos.push(newTodo))
  }

  function setarTodo(teste){
    setNewTodo(teste);
  }

  return  ( 
    <>
      <p>Hello world!</p>
      <p>Hello world!</p>

      <Input funcaoTeste={setarTodo}/>

      < Btn 
          nome = "titulo"
          cliqueBotao = {clickBotao} 
      />

    <p>{todos}</p>
    <ul>{listaLayout}</ul>

    </>
  );
}


