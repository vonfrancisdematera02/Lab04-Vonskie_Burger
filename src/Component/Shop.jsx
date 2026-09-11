import './Modal.css';

function Shop({ onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} type="button">✕</button>
                <h2>Our Shop</h2>
                <div className="modal-body">
                    <p>
                        Visit our flagship shop located in the heart of the city. We offer a cozy atmosphere perfect for enjoying our delicious burgers with friends and family.
                    </p>
                    <h3>Shop Information</h3>
                    <div className="shop-info">
                        <div className="shop-item">
                            <strong>📍 Location</strong>
                            <p>Gate 2, Bibincahan, Sorsogon City</p>
                        </div>
                        <div className="shop-item">
                            <strong>⏰ Hours</strong>
                            <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
                            <p>Friday - Saturday: 11:00 AM - 11:30 PM</p>
                            <p>Sunday: 12:00 PM - 9:00 PM</p>
                        </div>
                        <div className="shop-item">
                            <strong>📞 Contact</strong>
                            <p>+639457168535</p>
                            <p>vonskieburgers@gmail.com</p>
                        </div>
                        <div className="shop-item">
                            <strong>🅿️ Parking</strong>
                            <p>Free parking available at the back of the restaurant. Limited valet parking on weekends.</p>
                        </div>
                    </div>
                    <h3>Dining Experience</h3>
                    <p>
                        Our restaurant features comfortable seating for up to 100 guests. We offer both dine-in and takeout options. Our friendly staff is always ready to make your experience memorable. For larger groups or special events, please call ahead to make a reservation.
                    </p>
                    <h3>Special Offers</h3>
                    <ul>
                        <li>🎯 Happy Hour: 3 PM - 6 PM weekdays - 20% off selected burgers</li>
                        <li>👥 Family Combo: Buy 4 burgers, get 1 free</li>
                        <li>🎁 Loyalty Program: Every 10th burger is free!</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Shop;
