import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './containers/Home';
import Resume from './containers/Resume';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Resume />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App
