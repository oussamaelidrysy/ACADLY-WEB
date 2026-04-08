import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import './HomePage.css';

export function HomePage() {
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
      .about-container h1,
      .about-text,
      .services-title,
      .services-text,
      .feature h3,
      .feature p,
      .gallery-item,
      .coord,
      .contact-title,
      .contact-sub,
      .interest-bar__inner,
      .big-logo,
      .contact-info-section
    `);

    elementsToAnimate.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [showMore]);
  

  const allGallery = [
    '/images/realisation-num1.jpeg','/images/realisation-num2.jpeg','/images/realisation-num3.jpeg','/images/realisation-num4.jpeg',
    '/images/realisation-num5.jpeg','/images/realisation-num6.jpeg','/images/realisation-num7.jpeg','/images/realisation-num8.jpeg',
    '/images/realisation-num9.jpg','/images/realisation-num10.jpeg','/images/realisation-num11.jpeg','/images/realisation-num12.jpeg'
  ];

  const imagesToShow = showMore ? allGallery : allGallery.slice(0, 8);
    return (
    <>
        <head>
            <link rel="icon" href="/images/idryservices-mobile.png" />
        </head>
        <title>IdryServices - Home</title>
        <div className="header">
        <div className="left-section">
            <a href="/" className="header-link">
            <img className="logo"
                src="images/logo-white.jpeg" />
            <img className="mobile-logo"
                src="images/idryservices-mobile.png" />
            </a>
        </div>

        <div className="middle-section">
            <a href="/">Acceuil</a>
            <a href="/about">À propos</a>
            <a href="/realisation">Réalisations</a>
            <a href="/contact">Contactez-nous</a>
        </div>

        <div className="right-section">
            <a href="https://www.linkedin.com/company/idryservices/">
            <img className='socialmedia-logo' src="images/linkdin-logo.jpg"  />
            </a>
            <a href="">
            <img className='socialmedia-logo' src="images/facebook-logo.jpg"  />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
            <img className='socialmedia-logo' src="images/instagram-logo.jpg"  />
            </a>
        </div>
        </div>

        <div className="home-page">
            <div className="hero">
                    <img className="realisation-1" src="images/idryservices-porte.jpeg" alt="réalisation" />
                    <div className="hero-overlay" aria-hidden="true">

                    </div>
                    <div className="hero-text">
                        <div className='hero-title'>
                            agence d'amenagemnt de vos espaces professionnels
                        </div>
                        <div className='hero-cta'>
                            <a href="/about" className='AboutLink'>
                                <button className="AboutButton">En savoir plus</button>
                            </a>
                        </div>
                        
                    </div>
                    
            
           </div>
         
          <section className="about-rectangle" aria-label="Qui sommes-nous">
            <div className="about-container">

              <h1>Qui sommes-nous ?</h1>
              <div className="thin-bar" aria-hidden="true"></div>

              <p className="about-text">
                Besoin d'accompagnement dans vos projets ? besoin de développer votre communication, votre visibilité ou votre image ? IDRYSERVICES est là pour vous !

                Notre équipé d'expert vous accompagne depuis le début jusqu'à la réalisation de votre projet, et vous propose une création originale par la conception du logotype et des visuels, la mise en place de la charte graphique, la réalisation de l'outil de communication ... etc
              </p>

              <a href="/about" className="about-rect-button">En savoir plus</a>
            </div>
          </section>

         <section className="services-section" aria-label="Nos services">
           <h1 className="services-title">Nos services</h1>

           <div className="services-row">
             <div className="services-bar" aria-hidden="true"></div>

             <div className="services-text">
               L'agence Essentiel Com vous propose divers services et vous accompagne durant tout le processus de création de votre projet.
               <br />
               Nous intervenons sur la conception du logotype, la charte graphique, les visuels et la mise en place de vos supports de communication.
             </div>

             <div className="services-bar" aria-hidden="true"></div>
           </div>
         </section>
         <section className="features-section" aria-label="Trois services">
          <div className="features-container">
            <div className="features-row">
              <a href='rrr' className="feature">
                <img src="images/realisation-3D.jpeg" alt="Service design" />
                <h3>Creation 3D</h3>
                <p>Création de logos et chartes graphiques professionnelles.</p>
              </a>

              <a href='rrr' className="feature">
                <img src="images/communication-acceil.jpeg" alt="Communication" />
                <h3>Communication</h3>
                <p>Stratégies et contenus pour augmenter votre visibilité.</p>
              </a>

              <a href='rrr' className="feature">
                <img src="images/amenagement-acceuil.jpeg" alt="Aménagement" />
                <h3>Aménagement et mobilier</h3>
                <p>Agencement d'espaces professionnels esthétiques et fonctionnels.</p>
              </a>
            </div>
          </div>
        </section>
        <section className="realizations-section">
          <h1 className="services-title">Nos réalisations</h1>

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
              {showMore ? 'Afficher moins' : 'Afficher plus'}
            </button>

            <Link to="/realisation" className="see-all">Voir toutes nos réalisations</Link>
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
        </div>
    </>
    );
}