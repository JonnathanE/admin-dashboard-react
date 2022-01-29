import { BrowserRouter, Routes, Route } from "react-router-dom";
import './app.css';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Topbar from './components/Topbar/Topbar.jsx';
import Home from './pages/Home/Home.jsx';
import UserList from './pages/UserList/UserList.jsx';

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<UserList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
