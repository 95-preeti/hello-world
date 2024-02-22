import logo from './logo.svg';
import './App.css';
import  Greet from  './component/Greet'
import Welcome from './component/Welcome'
import Hello from './component/Hello'
import Message from './component/Message';
import Counter from './component/Counter'
function App (){
  return (
    <div className="App">
      < Counter />
     {/*} <Message />
      {/*<Greet  name="bruce" heroName="batman">
      <p>This is children props</p></Greet>
      <Greet name="clark" heroName="superman">
        <button>Action</button>
      </Greet>
      <Greet name="diana" heroName="wonder woman"/>
      <Welcome name="bruce" heroName="batman" />
      <Welcome  name="clark" heroName="superman" />
      <Welcome name="diana" heroName="wonder woman" />
      {/*<Hello />*/}
      
    </div>
  );
  }

export default App;
