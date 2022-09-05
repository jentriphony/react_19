import {
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import NotFound from './pages/NotFound'
import LayoutHeader from './components/Layout/Header'
import Home from './pages/Home/Home'
import HomeRoom from './pages/Home/Room'
import ProductsList from './pages/Products/List'
import ProductsItem from './pages/Products/Item'



function App() {
  
  
  
  return (

    <section>



      <LayoutHeader />

      <main>
        <Routes>
          <Route path='/home/*' element={ ( <Home /> ) }>
            <Route path='room' element={ ( <HomeRoom /> ) } />
          </Route>

          <Route path='/products/list' element={ ( <ProductsList /> ) } />

          <Route path='/products/:itemId' element={ ( <ProductsItem /> ) } />

          <Route path='/' element={ ( <Navigate to='/home' replace /> ) } />

          <Route path='*' element={ ( <NotFound /> ) } />
        </Routes>
      </main>



    </section>

  )



}



export default App