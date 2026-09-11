import { useState } from 'react';
import './Navbar.css';
import logo from '../assets/vonskie.png';

function Navbar({
  cartCount,
  quantities,
  setQuantities,
  onAboutClick,
  onShopClick,
  onContactClick,
  onMenuClick,
}) {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const products = [
        { name: 'Crispy Chicken Burger', price: 59 },
        { name: 'Ultimate Bacon Burger', price: 69 },
        { name: 'Black Sheep Burger', price: 99 },
        { name: 'Vegan Burger', price: 79 },
    ];

    const cartItems = products.filter((product) => quantities[product.name] > 0);
    const cartTotal = cartItems.reduce(
        (total, product) => total + product.price * quantities[product.name],
        0,
    );

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
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="logo" />
                <span className="logo-text">Vonskie Burger</span>
            </div>

            <div className="navbar-links">
                <button
                  className="nav-link"
                  onClick={onAboutClick}
                  type="button"
                >
                  ABOUT
                </button>
                <button
                  className="nav-link"
                  onClick={onMenuClick}
                  type="button"
                >
                  OUR MENU
                </button>
                <button
                  className="nav-link"
                  onClick={onShopClick}
                  type="button"
                >
                  SHOP
                </button>
                <button
                  className="nav-link"
                  onClick={onContactClick}
                  type="button"
                >
                  CONTACT
                </button>

                <div className="cart-container">
                    <button
                        className="cart"
                        onClick={() => setIsCartOpen(!isCartOpen)}
                        aria-label={`View cart with ${cartCount} items`}
                        type="button"
                    >
                        <span className="cart-icon">🛒</span>
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </button>

                    {isCartOpen && (
                        <div className="cart-dropdown">
                            <div className="cart-dropdown-heading">
                                <h3>Your Cart</h3>
                                <button
                                    className="close-cart"
                                    onClick={() => setIsCartOpen(false)}
                                    aria-label="Close cart"
                                    type="button"
                                >
                                    ✕
                                </button>
                            </div>

                            {cartItems.length === 0 ? (
                                <p className="empty-cart-dropdown">Your cart is empty</p>
                            ) : (
                                <>
                                    <div className="cart-dropdown-items">
                                        {cartItems.map((product) => (
                                            <div className="cart-dropdown-item" key={product.name}>
                                                <div>
                                                    <strong>{product.name}</strong>
                                                    <span>₱{product.price} each</span>
                                                </div>
                                                <div className="quantity-control compact">
                                                    <button
                                                        onClick={() => updateQuantity(product.name, -1)}
                                                        type="button"
                                                    >
                                                        −
                                                    </button>
                                                    <span>{quantities[product.name]}</span>
                                                    <button
                                                        onClick={() => updateQuantity(product.name, 1)}
                                                        type="button"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="cart-dropdown-total">
                                        <span>Total</span>
                                        <strong>₱{cartTotal}</strong>
                                    </div>
                                    <button className="checkout-btn" type="button">
                                        Proceed to Checkout
                                    </button>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;