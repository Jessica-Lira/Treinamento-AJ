export default function Btn(props) { 

    function aux() {
        props.cliqueBotao('ok')
    }

    return  ( 
        <button onClick={aux}>{props.nome}</button>
    
    );
  }