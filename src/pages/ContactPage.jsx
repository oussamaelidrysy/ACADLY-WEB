import './header.css';
import './ContactPage.css';
import { useState, useEffect } from 'react';

export function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, observerOptions);

      const elementsToAnimate = document.querySelectorAll(`
        .contact-hero__title,
        .contact-hero__subtitle,
        .contact-form-container,
        .form-group,
        .submit-btn,
        .contact-info-box,
        .info-item
      `);

      elementsToAnimate.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create mailto link
        const mailtoLink = `mailto:IDRYServices@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoLink;
        
        // Reset form and show success message
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
    <>
    
    <head>
            <link rel="icon" href="/images/idryservices-mobile.png" />
            <title>IdryServices - Contact</title>
    </head>

     <div className="header">
        <div className="left-section">
          <a href="/" className="header-link">
            <img className="logo" src="images/logo-white.jpeg" alt="logo" />
            <img className="mobile-logo" src="/images/idryservices-mobile.png" alt="mobile logo" />
          </a>
        </div>

        <div className="middle-section">
          <a href="/">Acceuil</a>
          <a href="/about">À propos</a>
          <a href="/realisation">Réalisations</a>
          <a href="/contact">Contactez-nous</a>
        </div>

        <div className="right-section">
            <a href="">
            <img className='socialmedia-logo' src="images/linkdin-logo.jpg"  />
            </a>
            <a href="">
            <img className='socialmedia-logo' src="images/facebook-logo.jpg"  />
            </a>
            <a href="https://www.linkedin.com/company/idryservices/" target="_blank" rel="noopener noreferrer">
            <img className='socialmedia-logo' src="images/instagram-logo.jpg"  />
            </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero__bg"></div>
        <div className="contact-hero__overlay"></div>
        <div className="contact-hero__content">
          <h1 className="contact-hero__title">Contactez-nous</h1>
          <p className="contact-hero__subtitle">Nous sommes ici pour répondre à vos questions et discuter de votre projet</p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-wrapper">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Envoyez-nous un message</h2>
              
              {submitted && (
                <div className="success-message">
                  ✓ Merci! Votre message a été envoyé avec succès.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form-container">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+212 6XX-XXXXXX"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Sujet *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Sujet de votre message"
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Décrivez votre projet ou votre question..."
                    rows="6"
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">Envoyer le message</button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2>Informations de contact</h2>
              
              <div className="contact-info-box">
                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h3>Téléphone</h3>
                    <p>+212 662-410203</p>
                    <p>+212 631-584519</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-content">
                    <h3>Email</h3>
                    <p><a href="mailto:IDRYServices@gmail.com">IDRYServices@gmail.com</a></p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">🌐</div>
                  <div className="info-content">
                    <h3>Site Web</h3>
                    <p>Idryservices.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">💼</div>
                  <div className="info-content">
                    <h3>LinkedIn</h3>
                    <p><a href="https://www.linkedin.com/company/idryservices/" target="_blank" rel="noopener noreferrer">IDRYServices</a></p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h3>Localisation</h3>
                    <p>Opérant à Rabat et Casablanca, Maroc</p>
                  </div>
                </div>
              </div>

              <div className="working-hours">
                <h3>Heures d'ouverture</h3>
                <p>Lundi - Vendredi: 09:00 - 18:00</p>
                <p>Samedi: 10:00 - 16:00</p>
                <p>Dimanche: Fermé</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="cta-content">
          <h2>Prêt à démarrer votre projet?</h2>
          <p>Contactez-nous dès aujourd'hui et transformez votre vision en réalité</p>
        </div>
      </section>
    </>
    );
}