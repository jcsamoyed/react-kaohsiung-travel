import logo from './logo.svg';
import './App.css';
import { Route, Routes, Outlet } from "react-router-dom";

function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  )
}
function NotFound() {
  return (
    <p>頁面不存在</p>
  )
}
function App() {
  return (
    <div className="App">
      <Outlet />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
