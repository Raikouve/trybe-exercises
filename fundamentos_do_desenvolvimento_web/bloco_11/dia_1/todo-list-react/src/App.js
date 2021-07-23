import './App.css';

const appointments = ['Acordar', 'Escovar os dentes', 'Tomar café', 'Ligar o PC', 'Começar a codar'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    appointments.map((appointment) => Task(appointment))
  );
}

export default App;
