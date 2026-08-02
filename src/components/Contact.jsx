import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError(false)

    try {
      const response = await fetch('https://formspree.io/f/maqrrykr', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })

      if (response.ok) {
        setSent(true)
      } else {
        setError(true)
      }
    } catch (err) {
      setError(true)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        {sent ? (
          <p>Thanks! Your message has been sent.</p>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit" className="button">Send</button>
            {error && <p>Something went wrong, please try again.</p>}
          </form>
        )}
      </div>
    </section>
  )
}

export default Contact