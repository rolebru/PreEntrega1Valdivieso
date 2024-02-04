
import Navbar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import BarNotice from './components/BarNotice';
import ItemsCount from './components/ItemsCount';

function App() {

  return (
    <main>
      <section>
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos'} />
      <ItemsCount initial={1} stock={20} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
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
