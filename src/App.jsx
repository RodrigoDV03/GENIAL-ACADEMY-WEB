import { BrowserRouter} from 'react-router-dom';
import { AppRouter } from './Router';
import './App.css'

function App() {
  return (
    <BrowserRouter> 
      <AppRouter></AppRouter>
    </BrowserRouter>
  )
}

export default App
