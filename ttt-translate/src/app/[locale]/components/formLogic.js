"use client"
import React, { useState } from 'react';


export default function Form() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        setSubmitted(true);
        console.log(formData);
        event.preventDefault();
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                alert(data.message);
                setFormData({ name: "", email: "", subject: "", message: "" });
                setSubmitted(false);
            } else {
                alert(data.message);
                setFormData({ name: "", email: "", subject: "", message: "" });
                setSubmitted(false);

            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('An error occurred while sending the email, please try again');
            setFormData({ name: "", email: "", subject: "", message: "" });
            setSubmitted(false);

        }
    };

    return (
        <form id="contact-form" name="contact-form" onSubmit={handleSubmit} method="POST">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-outline mb-4">
                        <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                        <label className="form-label" htmlFor="name">Your name</label>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-outline mb-4">
                        <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                        <label className="form-label" htmlFor="email">Your email</label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="form-outline mb-4">
                        <input type="text" id="subject" name="subject" className="form-control" value={formData.subject} onChange={handleChange} required />
                        <label className="form-label" htmlFor="subject">Subject</label>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="form-outline mb-4">
                        <textarea className="form-control" id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                        <label className="form-label" htmlFor="message">Your message</label>
                    </div>
                </div>
            </div>

            {!submitted && <button type="submit" className="btn text-white" style={{ backgroundColor: "#45526e" }}>Submit</button>}
            {submitted && <p className='text-info'>Sending...</p>}
            <div className="status"></div>
        </form>
    );
}