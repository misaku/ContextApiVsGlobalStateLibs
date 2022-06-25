import logo from './logo.svg'
import './App.css'
import {EstadoGlonbal} from './components/EstadoGlobal';
import {TesteContextApiProvider} from './store/ContexApi';
import ProviderContexZustend from './store/ContextZuztandStore';

function App() {
  return (
    <TesteContextApiProvider>
      <ProviderContexZustend initialNumber={2}>
        <div className="App">
          <header className="App-header">
             <EstadoGlonbal />
          </header>
        </div>
      </ProviderContexZustend>
    </TesteContextApiProvider>

  )
}

export default App
