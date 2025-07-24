import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-6 md:px-20 lg:px-32">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-10">
        We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
      </p>

      <form className="grid grid-cols-1 gap-5">
        {/* Name Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Your name"
            required
            className="mt-1 block w-[300px] bg-white border border-gray-300 rounded-md shadow-sm px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="mt-1 block w-[300px] bg-white border border-gray-300 rounded-md shadow-sm px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Subject Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Subject</label>
          <input
            type="text"
            required
            placeholder="Subject"
            className="mt-1 block w-[300px] bg-white border border-gray-300 rounded-md shadow-sm px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            rows={4}
            placeholder="Your message"
            required
            className="mt-1 block w-[300px] bg-white border border-gray-300 rounded-md shadow-sm px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 w-[150px] text-white px-5 py-1.5 rounded-md text-sm hover:bg-blue-700 transition-all duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
