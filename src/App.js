// import logo from './logo.svg';
// import './App.css';

import 'bulma/css/bulma.css';

import Navbar from './navbar/Navbar'
import FormField from './formfield/FormField'
import CoolButton from './coolbutton/coolButton'
import Signup from './signup/Signup'
import Message from './message/Message';



function App() {
  return (
    <div className="App">
      <Navbar>
        <CoolButton className="button is-info">Ciao</CoolButton>
        
      </Navbar>
      <FormField label="Name" type="text" placeholder="Alex Smith" />
      <FormField label="Email" type="email" placeholder="alexsmith@gmail.com" />
      <CoolButton className="button is-primary">Button</CoolButton>
      
      <Signup>
      <Navbar />
      <FormField label="Name" type="text" placeholder="Name" />
      <FormField label="Email" type="email" placeholder="Email" />
      <FormField label="Password" type="password" placeholder="Password" />
      <CoolButton className="button is-success">Submit</CoolButton>
      </Signup>

      <br></br>
      <Message parag={'Hello World'}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
        
       </Message>
      

      


    </div>
  );
}

export default App;
