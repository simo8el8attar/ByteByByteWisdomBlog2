import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import TextArea from '../components/ui/TextArea';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [feedback, setFeedback] = useState({
    success: null,
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple front-end validation (optional)
    if (!formData.name || !formData.email || !formData.message) {
      setFeedback({
        success: false,
        message: 'Please fill out all fields before submitting.',
      });
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xnnqyndg', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFeedback({
          success: true,
          message: 'Your message has been sent successfully!',
        });
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        const errorData = await response.json();
        setFeedback({
          success: false,
          message: errorData?.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setFeedback({
        success: false,
        message: 'An error occurred. Please check your internet connection and try again.',
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
            Contact Us
          </h1>
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                label="Email"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <TextArea
                label="Message"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button type="submit">Send Message</Button>
            </form>

            {/* Feedback Message */}
            {feedback.message && (
              <div
                className={`mt-4 p-3 rounded ${
                  feedback.success
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {feedback.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
