import './App.css';
import Application from './components/application/Application';
import { MuiMode } from './components/mui/muiMode';
import Provider from './providers/Provider';


function App() {
  return (
    <Provider>
      <div className="app">
        <MuiMode />
       </div>
     </Provider>
  );
}

export default App;
