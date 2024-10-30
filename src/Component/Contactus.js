import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Users, MessageSquare } from 'lucide-react';



const ContactPage = () => {

  const generateMailtoLink = (name, company, email, phone, message) => {
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);
    return `mailto:${email}?subject=${subject}&body=${body}`;
};

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   enquiryType: '',
  //   message: '',
  // });

  const [name, setName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const mailtoLink = generateMailtoLink(name, lastName, email, phone, message);
    window.location.href = mailtoLink;
    setSubmitted(true)
};

  return (
    <div className="min-h-screen bg-white" name="contact">
      {/* Hero Section */}
      <section className="relative bg-neutral-50 py-20">
        <div className="container mx-auto px-6 pt-[20vh]">
          <h1 className="text-5xl font-light mb-6">Contact Us</h1>
          <p className="text-xl text-neutral-600 max-w-2xl">
            We're here to help with any questions about Mia Peel treatments, training programs.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-neutral-50 p-8">
              <Mail className="h-6 w-6 mb-4" />
              <h3 className="text-xl font-medium mb-2">Email Us</h3>
              <p className="text-neutral-600 mb-4">
                For general inquiries:
                <br />
                info@miapeel.com
              </p>
              <p className="text-neutral-600">
                For professional inquiries:
                <br />
                professional@miapeel.com
              </p>
            </div>
            <div className="bg-neutral-50 p-8">
              <Phone className="h-6 w-6 mb-4" />
              <h3 className="text-xl font-medium mb-2">Call Us</h3>
              <p className="text-neutral-600 mb-4">
                Customer Support:
                <br />
                +44 (0) 20 XXXX XXXX
              </p>
              <p className="text-neutral-600">
                Professional Line:
                <br />
                +44 (0) 20 XXXX XXXX
              </p>
            </div>
            <div className="bg-neutral-50 p-8">
              <Clock className="h-6 w-6 mb-4" />
              <h3 className="text-xl font-medium mb-2">Business Hours</h3>
              <p className="text-neutral-600 mb-2">
                Monday - Friday: 9:00 - 17:30
              </p>
              <p className="text-neutral-600">
                Response within 24 business hours
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light mb-8">Get in Touch</h2>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full p-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full p-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone (optional)</label>
                      <input
                        type="tel"
                        className="w-full p-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Enquiry Type</label>
                      <select
                        className="w-full p-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                        required
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
                      >
                        <option value="">Select an option</option>
                        <option value="treatment">Treatment Information</option>
                        <option value="professional">Professional Training</option>
                        <option value="business">Business Opportunity</option>
                        <option value="support">Customer Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      className="w-full p-3 border border-neutral-300 focus:outline-none focus:border-neutral-900 h-32"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-neutral-900 text-white px-8 py-4 hover:bg-neutral-800 transition"
                  >
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="bg-neutral-50 p-8 text-center">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-light mb-4">Thank You</h3>
                  <p className="text-neutral-600">
                    We've received your message and will respond within 24 business hours.
                  </p>
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-3xl font-light mb-8">Quick Links</h2>
              <div className="space-y-6">
                <div className="bg-neutral-50 p-6">
                  <h3 className="text-xl mb-4">Find a Clinic</h3>
                  <p className="text-neutral-600 mb-4">
                    Locate your nearest certified Mia Peel provider.
                  </p>
                  <button className="flex items-center text-neutral-900 hover:text-neutral-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    Clinic Finder
                  </button>
                </div>
                <div className="bg-neutral-50 p-6">
                  <h3 className="text-xl mb-4">Professional Training</h3>
                  <p className="text-neutral-600 mb-4">
                    Learn about becoming a certified provider.
                  </p>
                  <button className="flex items-center text-neutral-900 hover:text-neutral-600">
                    <Users className="h-5 w-5 mr-2" />
                    Training Information
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
