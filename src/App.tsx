import logo from './logo.svg'
import './App.css'
import {EstadoGlobal} from './components/EstadoGlobal';
import {TesteContextApiProvider} from './store/ContexApi';
import ProviderContexZustand from './store/ContextZustandStore';

function App() {
  return (
    <TesteContextApiProvider>
      <ProviderContexZustand initialNumber={2}>
        <div className="App">
          <header className="App-header">
             <EstadoGlobal />
          </header>
        </div>
      </ProviderContexZustand>
    </TesteContextApiProvider>

  )
}

export default App
