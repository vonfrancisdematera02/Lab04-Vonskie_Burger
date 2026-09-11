import { useState } from 'react';
import './Modal.css';

function Contact({ onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally send the form data to a server
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            onClose();
        }, 2000);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} type="button">✕</button>
                <h2>Contact Us</h2>
                <div className="modal-body">
                    {submitted ? (
                        <div className="success-message">
                            <p>✓ Thank you for your message! We'll get back to you soon.</p>
                        </div>
                    ) : (
                        <>
                            <p>We'd love to hear from you! Drop us a message and we'll respond as soon as possible.</p>
                            
                            <div className="contact-info">
                                <div className="contact-item">
                                    <strong>📧 Email</strong>
                                    <p>vonskieburgers@gmail.com</p>
                                </div>
                                <div className="contact-item">
                                    <strong>📞 Phone</strong>
                                    <p>+639457168535</p>
                                </div>
                                <div className="contact-item">
                                    <strong>📍 Address</strong>
                                    <p>Gate 2, Bibincahan, Sorsogon City</p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@gmail.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+639457168535"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your message here..."
                                        rows="5"
                                    ></textarea>
                                </div>

                                <button type="submit" className="submit-btn">Send Message</button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Contact;
