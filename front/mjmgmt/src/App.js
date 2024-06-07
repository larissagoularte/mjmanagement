import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { AuthProvider} from './context/AuthContext'
import PrivateRoute from './utils/PrivateRoute';

import Header from './components/Header';
import DetalhesAnuncio from './pages/DetalhesAnuncio';
import LoginPage from './pages/Login';
import Home from './pages/Home';
import CriarAnuncio from './pages/CriarAnuncio';
import EditarAnuncio from './pages/EditarAnuncio';

function App() {

  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path='/' element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } />
            <Route path='/anuncio/:id' element={<DetalhesAnuncio />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/criar-anuncio' element={
              <PrivateRoute>
                <CriarAnuncio />
              </PrivateRoute>

            } />

            <Route path='/anuncio/:id/editar/' element={
              <PrivateRoute>
                <EditarAnuncio />
              </PrivateRoute>
            } />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
