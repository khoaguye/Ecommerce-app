
import Nav from './component/Nav'
import Pages from './pages/Pages'
import {BrowserRouter}  from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Nav/>
      <Pages/> 
    </BrowserRouter>
    </div>
  );
}

export default App;
