import "./App.css";
import { useState } from 'react'
import TodoList from "./TodoList";
function App() {
  const [inputList,Setinputlist]=useState('');
  const [items,setitem]=useState([]);

  const additem=(event)=>{
    Setinputlist(event.target.value);
    
  }
  
  const getdata=(event)=>{
    setitem((olditems)=>{
      return [...olditems,inputList]
    })
    Setinputlist("");
  }
  const deleteItems=(id)=>{
    console.log("deleted");
 
    setitem((olditems)=>{
      return olditems.filter((arrElem,i)=>{
        return i!== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input type="text" placeholder='Add a Item' value={inputList} onChange={additem} />
          <button onClick={getdata}>+</button>
          <ol>
          {items.map((itemvalue, i) => {
        return <TodoList items={itemvalue} key={i} id={i} onSelect={deleteItems}/>;
      })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
