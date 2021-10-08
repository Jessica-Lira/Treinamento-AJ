import './App.css';
import Btn from './components/button';

export default function App() { 
  
  function mostrarMsg(msg) {
    console.log("minha msg ==> " + msg);
  }

  return  ( 
    <>
      <p>Hello world!</p>
      <p>Hello world!</p>

      < Btn 
          nome = "titulo"
          minhaFuncao = {mostrarMsg} 
      />
    </>
  );
}


