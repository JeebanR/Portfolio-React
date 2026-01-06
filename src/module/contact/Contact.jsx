import { useState, useRef } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_jae86qd", // e.g. service_xxx from EmailJS dashboard
        "template_knaifa9", // e.g. template_xxx
        formRef.current,
        "-FKeBkbg4WzmS2TX6" // e.g. wJk7P9W6X2abcd
      )
      .then(
        () => {
          setSubmitted(true);
          setLoading(false);
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setSubmitted(false), 3000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 sm:px-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FiMail className="text-blue-600 dark:text-blue-400 text-xl" />
              <p>jeebanrout9090@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FiPhone className="text-blue-600 dark:text-blue-400 text-xl" />
              <p>+918249829625</p>
            </div>
            <div className="flex items-center gap-4">
              <FiMapPin className="text-blue-600 dark:text-blue-400 text-xl" />
              <p>Hyderabad, India</p>
            </div>

            <p className="text-gray-600 dark:text-gray-400">
              Feel free to reach out for collaborations, project discussions, or
              just a friendly chat!
            </p>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {submitted && (
              <p className="text-green-500 text-center font-medium">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
