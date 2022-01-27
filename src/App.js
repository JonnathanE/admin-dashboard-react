import Sidebar from './components/Sidebar/Sidebar.jsx';
import Topbar from './components/Topbar/Topbar.jsx';
import './app.css';
import Home from './pages/Home/Home.jsx';

function App() {
  return (
    <div>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
