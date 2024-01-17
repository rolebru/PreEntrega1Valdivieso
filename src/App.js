
import Navbar from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import BarNotice from './components/BarNotice';

function App() {

  return (
    <main>
      <section>
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos'} />
      <BarNotice>
        <p>hast 6 cuotas sin interes</p>
      </BarNotice>
      <BarNotice>
      <p>promocion hasta agotar stock</p>
      </BarNotice>
    </div>
    </section>
    </main>
  );
}

export default App;
