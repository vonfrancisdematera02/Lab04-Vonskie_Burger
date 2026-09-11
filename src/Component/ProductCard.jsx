import './ProductCard.css';

function ProductCard({ quantities, setQuantities }) {

  const products = [
    {
      image: 'https://png.pngtree.com/png-clipart/20241025/original/pngtree-crispy-chicken-burger-with-french-fries-png-image_16498071.png',
      name: 'Crispy Chicken Burger',
      description: 'Delicious, crispy, and juicy chicken burger.',
      price: 59,
    },
    {
      image: 'https://www.honestburgers.co.uk/wp-content/uploads/2026/01/Ultimate-bacon-smashed-web.jpg',
      name: 'Ultimate Bacon Burger',
      description: 'A bacon-loaded burger with a crispy exterior and juicy center.',
      price: 69,
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGmpbIN81MRTsth9j5dWAtidWhWuFrr1u2p_1neDAJcw&s=10',
      name: 'Black Sheep Burger',
      description: 'A bold burger made with a juicy beef patty and black pepper sauce.',
      price: 99,
    },
    {
      image: 'https://www.theawesomegreen.com/wp-content/uploads/2014/09/Beet-Burger.jpg',
      name: 'Vegan Burger',
      description: 'A healthy plant-based burger with fresh vegetables and flavor.',
      price: 79,
    },
  ];

  const updateQuantity = (productName, change) => {
    setQuantities((currentQuantities) => {
      const nextQuantity = Math.max((currentQuantities[productName] || 0) + change, 0);

      return {
        ...currentQuantities,
        [productName]: nextQuantity,
      };
    });
  };

  return (
    <div className="shop-section">
      <div className="product-container">
        {products.map((product, index) => (
          <div className="product-card" key={`${product.name}-${index}`}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="product-price">₱{product.price}</p>
            <div className="quantity-control" aria-label={`Quantity for ${product.name}`}>
              <button
                type="button"
                onClick={() => updateQuantity(product.name, -1)}
                disabled={!quantities[product.name]}
                aria-label={`Decrease ${product.name} quantity`}
              >
                -
              </button>
              <span>{quantities[product.name] || 0}</span>
              <button
                type="button"
                onClick={() => updateQuantity(product.name, 1)}
                aria-label={`Increase ${product.name} quantity`}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
