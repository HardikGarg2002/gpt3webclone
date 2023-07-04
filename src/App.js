import './App.css';
import {Header} from './containers/Container'
import {Navbar,Brand} from './components/Components'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Brand />
    </div>
  );
}

export default App;
