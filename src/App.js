import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import FormData from './components/FormData';

function App() {
  const [State, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPass: ""
});

  return (
    <div className="App">
      <div className='Form'>
        <Form setInput={setState} input={State}/>
      </div>
      <FormData data={State}/>
    </div>
  );
}

export default App;
