import './Modal.css';

function About({ onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} type="button">✕</button>
                <h2>About Our Restaurant</h2>
                <div className="modal-body">
                    <p>
                        Welcome to <strong>Vonskie Burgers</strong>, a family-owned burger restaurant dedicated to serving the most delicious and high-quality burgers since 2004.
                    </p>
                    <h3>Our Story</h3>
                    <p>
                        Founded by the Vonskie family, our restaurant has been a cornerstone of the community for nearly two decades. What started as a small food stall has grown into a beloved establishment known for our commitment to quality, taste, and exceptional customer service.
                    </p>
                    <h3>Our Commitment</h3>
                    <ul>
                        <li>✓ Premium quality ingredients sourced locally whenever possible</li>
                        <li>✓ Fresh, hand-made burgers prepared to order</li>
                        <li>✓ Exceptional customer service and dining experience</li>
                        <li>✓ Sustainable and eco-friendly business practices</li>
                        <li>✓ Community involvement and support</li>
                    </ul>
                    <h3>Why Choose Us?</h3>
                    <p>
                        Every burger that leaves our kitchen is crafted with passion and attention to detail. We believe that great burgers start with great ingredients and are prepared by people who genuinely care about quality. Visit us today and taste the difference!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
