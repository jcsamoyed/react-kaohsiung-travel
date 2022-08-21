import './App.css';
import { Route, Routes, Outlet } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import TourList from './components/TourList';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Outlet />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tour-list" element={<TourList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
