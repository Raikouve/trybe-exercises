import './App.css';
import Greetings from './Greetings';

const users = [
  {
    name: 'Marcelo',
    lastName: 'Silva',
  },

  {
    name: 'Flávia',
    lastName: 'Miranda',
  },
]

function App() {
  return (
    users.map((user) => <Greetings name={user.name} lastName={user.lastName}/>)
  );
}

export default App;
