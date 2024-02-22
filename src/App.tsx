import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import AppLayout from '@/components/AppLayout';
import Home from '@/containers/Home';
import Resume from '@/containers/Resume';
import './App.css';

const store = setupStore();

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter basename="/resume-app">
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Resume />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </Provider>
  )
}

export default App
