import { useState, useRef } from 'react';
import Navbar from './Component/Navbar';
import Description from './Component/Description';
import ProductCard from './Component/ProductCard';
import About from './Component/About';
import Shop from './Component/Shop';
import Contact from './Component/Contact';
import './App.css';

function App() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [showAbout, setShowAbout] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const productRef = useRef<HTMLDivElement>(null);

  const cartCount = Object.values(quantities).reduce((total, quantity) => total + quantity, 0);

  const scrollToProducts = () => {
    productRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar
        cartCount={cartCount}
        quantities={quantities}
        setQuantities={setQuantities}
        onAboutClick={() => setShowAbout(true)}
        onShopClick={() => setShowShop(true)}
        onContactClick={() => setShowContact(true)}
        onMenuClick={scrollToProducts}
      />
      {!showAbout && !showShop && !showContact && (
        <>
          <Description />
          <div ref={productRef}>
            <ProductCard quantities={quantities} setQuantities={setQuantities} />
          </div>
        </>
      )}
      {showAbout && <About onClose={() => setShowAbout(false)} />}
      {showShop && <Shop onClose={() => setShowShop(false)} />}
      {showContact && <Contact onClose={() => setShowContact(false)} />}
    </>
  );
}

export default App;