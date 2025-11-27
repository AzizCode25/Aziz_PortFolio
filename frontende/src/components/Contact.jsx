import { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { FaPaperPlane, FaSpinner } from 'react-icons/fa'
import data from '../i18n/de.json'

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')
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
    setLoading(true)

    try {
      // 1. FormData erstellen und access_key hinzufügen
      const formData = new FormData(e.target)
      formData.append('access_key', 'a8f7fd23-6c47-47be-ba36-1452f9e7ce5a')
      formData.append("subject", "Neue Kontaktanfrage – Aziz-Portfoli");

      // 2. axios korrekt verwenden: POST-Methode, URL und 'data' statt 'body'
      // axios kümmert sich um das Parsen der JSON-Antwort
      const response = await axios.post(
        'https://api.web3forms.com/submit',
        formData
      )

      const data = response.data // Die Daten sind in response.data

      if (data.success) {
        setResult('Form Submitted Successfully')
        e.target.reset()

        setFormData({
          name: '',
          nachName: '',
          email: '',
          telefon: '',
          nachricht: '',
        })
      } else {
        setResult('Error: ' + data.message) // Besser: Nachricht aus der API anzeigen
      }

      toast.success(data.message, {
        iconTheme: { primary: '#3b82f6', secondary: '#fff' },
      })

      // ... setFormData zurücksetzen ...
    } catch (error) {
      const errorData = error.response?.data
      toast.error(errorData?.message || 'Ein Fehler ist aufgetreten')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-sky-50 via-white to-cyan-500 dark:from-gray-900 dark:via-gray-800 dark:to-sky-900/20"></div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-sky-200/20 to-cyan-200/10 dark:via-sky-900/10 dark:to-cyan-900/5"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-sky-600 via-blue-600 to-cyan-600 animate-gradient-x">
            Kontakt
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ich freue mich darauf, in zukünftigen Projekten gemeinsam
            erfolgreich zu sein
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 dark:border dark:border-gray-600 p-4 rounded-2xl">
          {/* Contact Info & Video */}
          <div className="space-y-8">
            <div className="relative h-80 md:h-96 lg:h-full rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100"
              >
                <source
                  src="https://videos.pexels.com/video-files/3129902/3129902-uhd_2560_1440_25fps.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

              <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-end">
                <div className="space-y-6 bg-black/40 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10">
                  {data.contactInfo.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start space-x-4 group/item"
                    >
                      <div className="p-3 bg-sky-500/20 rounded-xl shadow-lg text-2xl group-hover/item:bg-sky-400/30 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                          {item.title}
                        </h3>
                        {item.isLink ? (
                          <a
                            href={`mailto:${item.content}`}
                            className="text-gray-200 hover:text-sky-300 transition-all duration-300 whitespace-pre-line hover:underline"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-200 whitespace-pre-line">
                            {item.content}
                          </p>
                        )}
                        {item.extra && (
                          <div
                            className="text-sm text-sky-300 mt-2"
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
            onSubmit={handleSubmit}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl p-6 md:p-8 border border-gray-200/60 dark:border-gray-700/60 transition-all duration-500"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 md:mb-8">
              Send us a message
            </h3>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
                  >
                    First name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white/80 dark:bg-gray-700/80 border border-gray-300/60 dark:border-gray-600/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400/60 dark:placeholder-gray-400 transition-all duration-300 backdrop-blur-sm "
                    required
                    placeholder="Your first name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="nachName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
                  >
                    Last name *
                  </label>
                  <input
                    type="text"
                    id="nachName"
                    name="nachName"
                    value={formData.nachName}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white/80 dark:bg-gray-700/80 border border-gray-300/60 dark:border-gray-600/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400/60 dark:placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
                    required
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
                  >
                    E-mail address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white/80 dark:bg-gray-700/80 border border-gray-300/60 dark:border-gray-600/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400/60 dark:placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefon"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
                  >
                    Telephone number
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white/80 dark:bg-gray-700/80 border border-gray-300/60 dark:border-gray-600/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400/60 dark:placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
                    placeholder="+49 123 456789"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="nachricht"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
                >
                  Your message *
                </label>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  value={formData.nachricht}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3.5 bg-white/80 dark:bg-gray-700/80 border border-gray-300/60 dark:border-gray-600/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400/60 dark:placeholder-gray-400 transition-all duration-300 backdrop-blur-sm resize-none"
                  required
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex items-center justify-center px-8 py-4 
                  bg-linear-to-r from-sky-500 to-blue-600 
                  hover:from-sky-600 hover:to-blue-700 
                  text-white font-semibold rounded-xl 
                  transition-all duration-300 
                  shadow-lg hover:shadow-xl hover:shadow-sky-500/30
                  active:scale-95
                  disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100
                  group`}
                >
                  {loading ? (
                    <span className="flex items-center text-lg">
                      <FaSpinner className="animate-spin mr-3 text-xl" />
                      Wird gesendet...
                    </span>
                  ) : (
                    <span className="flex items-center text-lg">
                      <FaPaperPlane className="mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </span>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
