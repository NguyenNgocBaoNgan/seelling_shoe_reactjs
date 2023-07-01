import React, { useState } from 'react';
import '../Contact/contact.css'
import sendMail from "../sendMail/sendmail";

const Contact = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        sendMail(fullName, email, message);
        // Reset form sau khi gửi thành công
        setFullName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-container">
            <h2>Liên hệ</h2>
            <form onSubmit={handleSubmit}>
                <form className="contact-form">
                    <label htmlFor="fullName">Họ tên:</label>
                    <input
                        type="text"
                        id="fullName"
                        value={sessionStorage.getItem('fullName')}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </form>
                <form className="contact-form">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={sessionStorage.getItem('email')}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </form>
                <form className="contact-form">
                    <label htmlFor="message">Tin nhắn:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </form>
                <button type="submit">Gửi</button>
            </form>
        </div>
    );
}

export default Contact;
