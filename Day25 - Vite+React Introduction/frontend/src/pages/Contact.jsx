/*******************************************************************************************************
 *************************************** CONTACT PAGE COMPONENT (`Contact.jsx`) ************************
 *
 * Concepts Covered in Day 25:
 * - Controlled Components Concept: Syncing form inputs with React state vs uncontrolled native inputs
 * - Event Handling in React: Synthetic event object handling (`e.preventDefault()`, `onChange`)
 * - Clean Component Decomposition & Structured Markup
 *******************************************************************************************************/

import { useState } from 'react';

const Contact = () => {
    // Local Component State for Contact Form Inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    // Dynamic Input Change Handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Form Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            setSubmitted(true);
        }
    };

    return (
        <div className="page-container">
            <div className="contact-header">
                <h2>📬 Contact & Feedback</h2>
                <p>Have questions about Vite, React, or frontend architecture? Send us a message!</p>
            </div>

            <div className="contact-card">
                {submitted ? (
                    <div className="success-message">
                        <h3>✅ Thank you, {formData.name}!</h3>
                        <p>Your message has been received. We will get back to you soon.</p>
                        <button 
                            className="btn-secondary" 
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
                                placeholder="Type your message here..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn-primary">
                            Submit Form
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Contact