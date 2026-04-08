import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import './RealisationPage.css';

export function RealisationPage() {
  const [showMore, setShowMore] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);

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

    // Select all elements to animate
    const elementsToAnimate = document.querySelectorAll(`
      .hero-title,
      .realisations-title,
      .gallery-item,
      .interest-bar__inner,
      .contact-title,
      .contact-sub,
      .big-logo,
      .coord
    `);

    elementsToAnimate.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [showMore]);

  const allGallery = [
    '/images/realisation-num1.jpeg', '/images/realisation-num2.jpeg', 
    '/images/realisation-num3.jpeg', '/images/realisation-num4.jpeg',
    '/images/realisation-num5.jpeg', '/images/realisation-num6.jpeg',
    '/images/realisation-num7.jpeg', '/images/realisation-num8.jpeg',
    '/images/realisation-num9.jpg', '/images/realisation-num10.jpeg',
    '/images/realisation-num11.jpeg', '/images/realisation-num12.jpeg',
    '/images/realisation-num13.jpeg', '/images/realisation-num14.jpeg',
    '/images/realisation-num15.jpeg', '/images/realisation-num16.jpeg',
    '/images/realisation-num17.jpeg', '/images/realisation-num18.jpeg',
    '/images/realisation-num19.jpeg', '/images/realisation-num20.jpeg' , '/images/realisation-num21.jpeg', '/images/realisation-num22.jpeg',
    '/images/realisation-num23.jpeg', '/images/realisation-num24.jpeg', '/images/realisation-num25.jpeg', '/images/realisation-num26.jpeg', '/images/realisation-num27.jpeg', '/images/realisation-num28.jpeg', '/images/realisation-num29.jpeg', '/images/realisation-num30.jpeg' , '/images/realisation-num31.jpeg', '/images/realisation-num32.jpeg', '/images/realisation-num33.jpeg', '/images/realisation-num34.jpeg', '/images/realisation-num35.jpeg', '/images/realisation-num36.jpeg'
  ];

  const imagesToShow = showMore ? allGallery : allGallery.slice(0, 12);  
  return (
    <>
      <head>
        <link rel="icon" href="/images/idryservices-mobile.png" />
        <title>IdryServices - Réalisations</title>
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

      <div className="realisation-hero">
        <div className="hero-overlay"></div>
        <img 
          className='hero-image' 
          src="/images/realisation-num3.jpeg" 
          alt="Nos réalisations" 
        />
        <h1 className='hero-title'>Nos Réalisations</h1>
      </div>
      <h2 className="realisations-title">Retrouvez toutes nos réalisations en aménagement, mobilier et communication</h2>

      <section className="realizations-section">
        <div className="gallery-grid">
          {imagesToShow.map((src, idx) => (
            <div key={idx} className="gallery-item">
              <img
                src={src}
                alt={`réalisation ${idx + 1}`}
                role="button"
                tabIndex={0}
                onClick={() => setLightboxSrc(src)}
                onKeyDown={(e) => { if (e.key === 'Enter') setLightboxSrc(src); }}
              />
            </div>
          ))}
        </div>

        {lightboxSrc && (
          <div className="lightbox" onClick={() => setLightboxSrc(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={() => setLightboxSrc(null)} aria-label="Fermer">×</button>
              <img src={lightboxSrc} alt="Agrandie" />
            </div>
          </div>
        )}

        <div className="gallery-actions">
          <button className="toggle-gallery" onClick={() => setShowMore(v => !v)}>
            {showMore ? 'Voir moins' : 'Voir plus'}
          </button>
        </div>
      </section>
                     {/* light blue interest bar */}
        <div className="interest-bar">
          <div className="interest-bar__inner">
            Vous êtes intéressés par nos <span className="highlight">services</span> ?
          </div>
        </div>

        {/* Contact section */}
        <section className="contact-hero">
          <div className="contact-hero__bg" />
          <div className="contact-hero__content">
            <p className="contact-sub">Contactez-nous! C'est par ICI:</p>
            <Link to="/contact" className="contact-btn">Contactez nous!</Link>
          </div>
        </section>

        <div className="big-logo-wrap">
          <img className="big-logo" src="/images/logo-white.jpeg" alt="IdryServices big logo" />
        </div>

        <section className="contact-info-section">
          <h3 className="contact-title">Coordonnées</h3>

        
          <div className="coords-grid">
            <div className="coord">
              <strong>Téléphone :</strong>
              <div className="phone-numbers">
                <span>+212 662-410203</span>
                <span>+212 631-584519</span>
              </div>
            </div>
            <div className="coord"><strong>E-mail :</strong> <span>IDRYServices@gmail.com</span></div>
            <div className="coord"><strong>Site :</strong> <span>Idryservices.com</span></div>
            <div className="coord"><strong>Linkedin :</strong> <span>IDRYServices</span></div>
          </div>

          <div className="credits">site produit par oussama.elidrysy@enim.ac.ma</div>
        </section>
      </>
    );
}