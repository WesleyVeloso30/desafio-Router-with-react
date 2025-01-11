import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './page/products/products';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
          <div className='content'>
            <Routes>
              <Route path='/' element={<Products/>}/>
            </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
