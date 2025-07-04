import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import {  FaPaperPlane } from 'react-icons/fa'
import data from '../../data/restApi.json'
import earth from '../assets/videos/earth.mp4'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    nachName: '',
    email: '',
    telefon: '',
    nachricht: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data } = await axios.post(
        'http://localhost:4000/api/v1/contact/send',
        formData,
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        }
      )

      toast.success(data.message, {
        iconTheme: { primary: '#3b82f6', secondary: '#fff' },
      })

      setFormData({
        name: '',
        nachName: '',
        email: '',
        telefon: '',
        nachricht: '',
      })
    } catch (error) {
      const errorData = error.response?.data

      if (errorData?.errors) {
        const newErrors = {}
        Object.entries(errorData.errors).forEach(([field, message]) => {
          newErrors[field] = message
          toast.error(`${field}: ${message}`)
        })
      } else {
        toast.error(errorData?.message || 'Ein Fehler ist aufgetreten')
      }
    }
  }

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto py-20 md:py-28 px-4 sm:px-6 lg:px-8 "
    >
      {/* Header Section */}
      <div className="mb-16 text-center">
        <h2 className="text-lg md:text-xl font-semibold text-sky-400 tracking-wide mb-3">
          CONTACT
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
          I am seeking new{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
            challenges
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          I look forward to hearing from you and working together on exciting
          projects.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 cursor-pointer">
        {/* Contact Info & Video */}
        <div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
              <div className="space-y-6 bg-gray-900/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                {data.contactInfo.map((item) => (
                  <div key={item.id} className="flex items-start space-x-4">
                    <div className="p-3 bg-sky-500/10 rounded-lg shadow-sm text-2xl hover:bg-blue-300/50">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {item.title}
                      </h3>

                      {item.isLink ? (
                        <a
                          href={`mailto:${item.content}`}
                          className="text-gray-300 hover:text-sky-400 transition-colors whitespace-pre-line"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-300 whitespace-pre-line">
                          {item.content}
                        </p>
                      )}

                      {item.extra && (
                        <div
                          className="text-sm text-sky-400 mt-1"
                          dangerouslySetInnerHTML={{ __html: item.extra }}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className=" rounded-xl shadow-2xl p-6 sm:p-8 border border-gray-700/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Senden Sie uns eine Nachricht
          </h3>

          <div className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Vorname *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  placeholder="Max"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="nachName"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Nachname *
                </label>
                <input
                  type="text"
                  id="nachName"
                  name="nachName"
                  value={formData.nachName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  placeholder="Mustermann"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
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
                  className="w-full px-4 py-3 bg-gray-700/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  placeholder="max@example.com"
                  required
                />
              </div>

              <div>
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
              </div>
            </div>

            <div>
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
                className="w-full px-4 py-3 bg-gray-700/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                placeholder="Ihre Nachricht"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center">
                  <FaPaperPlane className="mr-2" /> Nachricht senden
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
