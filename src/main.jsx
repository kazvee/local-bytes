import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <NavigationBar />
    <App />
    <Footer />
  </>
);
