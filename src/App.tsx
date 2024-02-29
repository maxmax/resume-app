import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import AppLayout from '@/components/AppLayout';
import Home from '@/containers/Home';
import Resume from '@/containers/Resume';
import RepoPage from '@/containers/RepoPage';
import NotFoundPage from '@/containers/NotFoundPage';
import './App.css';

const store = setupStore();
const BASE_URL = import.meta.env.VITE_BASE_URL; // gh pages routes fix

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter basename={BASE_URL}>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume/:id" element={<Resume />} />
            <Route path="/resume/:usernameId/:repoId" element={<RepoPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </Provider>
  )
}

export default App
