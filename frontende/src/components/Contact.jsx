import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import toast from "react-hot-toast";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';
import earth from "../assets/videos/earth.mp4";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefon: "",
    nachricht: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/contact/send",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" }
        }
      );
      
      toast.success(data.message, {
        style: {
          background: '#1f2937',
          color: '#fff',
          border: '1px solid #374151'
        },
        iconTheme: {
          primary: '#3b82f6',
          secondary: '#fff',
        }
      });
      
      setFormData({
        name: "",
        email: "",
        telefon: "",
        nachricht: ""
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Ein Fehler ist aufgetreten", {
        style: {
          background: '#1f2937',
          color: '#fff',
          border: '1px solid #374151'
        },
        iconTheme: {
          primary: '#ef4444',
          secondary: '#fff',
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const contactItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Header Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="mb-16 text-center"
      >
        <h2 className="text-lg md:text-xl font-semibold text-sky-400 tracking-wide mb-3">
          KONTAKT
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
          Lassen Sie uns <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">zusammenarbeiten</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Wir freuen uns auf Ihre Nachricht - per E-Mail, Telefon oder direkt vor Ort in unserem Büro.
        </p>
      </motion.div>
      
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info & Video */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <div className="relative h-80 lg:h-full rounded-xl overflow-hidden border border-gray-700/50 shadow-2xl group">
            <video 
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            >
              <source src={earth} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <motion.div 
                variants={staggerContainer}
                className="space-y-6 bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50"
              >
                {[
                  {
                    icon: <FaMapMarkerAlt className="text-sky-400 text-xl" />,
                    title: "Adresse",
                    content: "Rampe 12\n21217 Seevetal"
                  },
                  {
                    icon: <FaPhone className="text-sky-400 text-xl" />,
                    title: "Telefon",
                    content: "+49 40 12345678",
                    extra: (
                      <a 
                        href="https://wa.me/49123456789" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-2 text-sky-400 hover:text-sky-300 transition-colors"
                      >
                        <SiWhatsapp className="mr-2" /> WhatsApp Chat
                      </a>
                    )
                  },
                  {
                    icon: <FaEnvelope className="text-sky-400 text-xl" />,
                    title: "E-Mail",
                    content: "info@example.com",
                    isLink: true
                  },
                  {
                    icon: <FaClock className="text-sky-400 text-xl" />,
                    title: "Öffnungszeiten",
                    content: "Mo-Fr: 09:00 - 18:00 Uhr\nSa-So: Geschlossen"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={contactItem}
                    className="flex items-start space-x-4"
                  >
                    <div className="p-3 bg-sky-500/10 rounded-lg shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                      {item.isLink ? (
                        <a 
                          href={`mailto:${item.content}`} 
                          className="text-gray-300 hover:text-sky-400 transition-colors whitespace-pre-line"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-300 whitespace-pre-line">{item.content}</p>
                      )}
                      {item.extra}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-gray-800/70 rounded-xl shadow-2xl p-6 sm:p-8 border border-gray-700/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Senden Sie uns eine Nachricht</h3>
          
          <div className="space-y-5">
            <motion.div
              variants={contactItem}
            >
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Vollständiger Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                placeholder="Max Mustermann"
                required
              />
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-5"
              variants={staggerContainer}
            >
              <motion.div variants={contactItem}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  E-Mail Adresse *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  placeholder="max@example.com"
                  required
                />
              </motion.div>

              <motion.div variants={contactItem}>
                <label
                  htmlFor="telefon"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Telefonnummer
                </label>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  placeholder="+49 123 456789"
                />
              </motion.div>
            </motion.div>

            <motion.div variants={contactItem}>
              <label
                htmlFor="nachricht"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Ihre Nachricht *
              </label>
              <textarea
                id="nachricht"
                name="nachricht"
                value={formData.nachricht}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                placeholder="Wie können wir Ihnen helfen?"
                required
              ></textarea>
            </motion.div>

            <motion.div variants={contactItem}>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Wird gesendet...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <FaPaperPlane className="mr-2" /> Nachricht senden
                  </span>
                )}
              </button>
            </motion.div>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;