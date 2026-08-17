/*******************************************************************************************************
 *************************************** CONTACT PAGE (`Contact.jsx`) **********************************
 *
 * Concepts Covered in Day 26:
 * - Form Handling & Controlled Inputs with React Hooks (`useState`)
 * - Handling Form Reset & Feedback Display
 *******************************************************************************************************/

import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            setSubmitted(true);
        }
    };

    return (
        <div className="page-container">
            <div className="hero-section">
                <h2>📬 Contact & Support</h2>
                <p>Feel free to reach out with questions regarding React Hooks, state updates, or API integration.</p>
            </div>

            <div className="section-card contact-card">
                {submitted ? (
                    <div className="success-message">
                        <h3>✅ Message Received, {formData.name}!</h3>
                        <p>Thank you for submitting your feedback. We will get back to you shortly.</p>
                        <button 
                            className="btn btn-primary" 
                            onClick={() => {
                                setSubmitted(false);
                                setFormData({ name: '', email: '', message: '' });
                            }}
                        >
                            Send Another Message
                        </button>
                    </div>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name:</label>
                            <input 
                                type="text" 
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address:</label>
                            <input 
                                type="email" 
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="name@example.com"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea 
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit Form
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Contact;