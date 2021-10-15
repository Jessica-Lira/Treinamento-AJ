import react, { useState } from "react"; 

export default function Input(props){

    const [ newTodo, setNewTodo ] = useState();

    function setarTodo(event) {
        props.funcaoTeste(event.target.value);
        setNewTodo(event.target.value);
    }

    return(
        
        <input type="text" placeholder="Todo" onChange={setarTodo}/>
        
    )

}