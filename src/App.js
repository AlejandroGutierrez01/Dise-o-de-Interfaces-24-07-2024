import './App.css';
import Menu from './componentes/menu';
import Publicidad from './componentes/publicidad';
import Mapa from './componentes/mapa';
import Footer from './componentes/footer';
import Lista from './componentes/lista';
import ProductCard from './componentes/ProductCard';
function App() {
  const productos = [
    {
      foto: "https://st.depositphotos.com/5447696/53698/i/450/depositphotos_536987796-stock-photo-apple-sign-illustration-pop-art.jpg",
      descripcion: "Descripcion del producto 1",
      precio: 20.0
    },
    {
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUEjMSW3sdcTwvBL2FpkHpT2L0ogh1roUWxw&s",
      descripcion: "Descripcion del producto 2",
      precio: 20.0
    }
  ];
  return (
    <div>
      <Menu></Menu>
      <Publicidad></Publicidad>

      {productos.map((product, index) => (
        <ProductCard key={index}{...product} />
      ))}

      <Mapa></Mapa>
      <Footer></Footer>
      <Lista></Lista>
    </div>
  );
}

export default App;
