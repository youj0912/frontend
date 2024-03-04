import All from './View/All'
import Register1 from './View/register1';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/main"  element={<All/>}/>
          <Route path="/login" element=""/>
          <Route path="/register" element={<Register1/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;