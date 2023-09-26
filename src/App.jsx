import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Recipe } from './pages/Recipe';
import { Category } from './pages/Category';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="container content">
          <>
            <Routes basename="/react-food">
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/category/:name" element={<Category />} />
              <Route path="/meal/:id" element={<Recipe />} />
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
