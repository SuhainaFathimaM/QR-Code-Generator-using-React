import { ArraySample } from './components/ArraySample';
import { ChildComponent } from './components/ChildComponent';
import { Student } from './components/Student';

import { OneOfSample } from './components/OneOfSample';
import "./css/app.css";
import { MultitypeComponent } from './components/MultitypeComponent';
import { FunctionSample } from './components/FunctionSample';

function App() {

const handleClick = () => {
  alert("Button Clicked");
};


  const items = [
    {id: 1, name : "item 1"},
    {id: 2, name : "item 2"},
    {id: 3, name : "item 3"}
  ]; 
  
  return (
    <>
     <main>
       <h1>My first React App</h1>
      <FirstComponent />
     </main>

     <Header /> 

    <Student name="Afra" age={15} ismarried = {false} /> 
    <Student name="Fathima" age={19} ismarried = {false} /> 
    <Student name="Basha" age={41} ismarried = {true} /> 
    <Student />

    <ChildComponent>
      <p> Sample para 1</p>
      <p> Sample para 2</p>
      <p> Sample Para 3</p>

    </ChildComponent>
    

      <ArraySample items = {items} />

      <OneOfSample color="green" />
     

      <MultitypeComponent value="hello" />
      <MultitypeComponent value={42} />
      <MultitypeComponent value={true} />

       
       <div>
        <h2>
          Parent Component
        </h2>
        <FunctionSample handleClick = {handleClick} />
       </div>

    </>

  );
}

export default App;