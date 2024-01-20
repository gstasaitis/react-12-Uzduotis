import Products from './pages/Products.jsx'
import Reviews from './pages/Reviews.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <>
<BrowserRouter>
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/reviews/:productId' element={<Reviews />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
