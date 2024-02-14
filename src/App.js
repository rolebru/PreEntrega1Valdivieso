
import Navbar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import BarNotice from './components/BarNotice';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (
    <main>
      <section>
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path= '/' element={<ItemListContainer/>}  />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
      </BrowserRouter>
      <ItemListContainer greeting={'Bienvenidos'} />
      <BarNotice>
        <p>hast 6 cuotas sin interes</p>
      </BarNotice>
      <BarNotice descuento="20%">
      <p>promocion del 20% descuento <strong>HOY!</strong></p>
      </BarNotice>
    </div>
    </section>
    </main>
  );
}

export default App;
