import './App.css';
import Mensaje from './Mensaje';

function Mensaje1(){
  return <h1>hola mundo</h1>
}

function Descripcion(){
  return <p>esta es la app del bootcamp</p>
}

function App() {
  const mensaje = 'hola mundo desde variable'
  return (
    <div className="App">
      <Mensaje1/>
      <Mensaje color='red' msg='Estamos Trabajando'/>
      <Mensaje color='green' msg='En Un Curso'/>
      <Mensaje color='yellow' msg='De React'/>
      <Descripcion/>
    </div>
  );
}

export default App;
