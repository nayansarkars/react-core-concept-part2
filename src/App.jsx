import Counter from './Counter';
import Batsman from './Batsman';
import './App.css'

function App() {
  function handleClick(){
    alert("i am clicked")
  }

  const handleClick3 = () => {
    alert("Click 3")
  }
    const handleAdd5 = (num) => {
      const newNum = num + 5;
      alert(newNum);
    }
  
  return (
    <>
      <h1>Vite + React</h1>
      <Batsman></Batsman>
      <Counter></Counter>
      {/* <button onClick={"handleClick"}>Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick(){
        alert("Clicked 2")
      }}>Click Me 2</button>
      <button onClick={handleClick3}>Click Me 3</button>
      <button onClick={() => alert("click 4")}>Click Me4</button>
      <button onClick={() => handleAdd5(10) }>Click Me 5</button>
    </>
  )
}

export default App
