export default function Btn(props) { 

    function aux() {
        props.minhaFuncao('ok')
    }

    return  ( 
        <button onClick={aux}>{props.nome}</button>
    
    );
  }