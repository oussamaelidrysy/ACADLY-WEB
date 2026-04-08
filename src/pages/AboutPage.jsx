import './header.css';
import './AboutPage.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './header.css';
import './AboutPage.css';

export function AboutPage() {
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
        .about-hero__right h1,
        .about-hero__right h2,
        .about-hero__right h3,
        .about-hero__right h5,
        .about-hero__btn,
        .TopSection span,
        .MidleSection h1,
        .MidleSection span,
        .BottomSection span,
        .expertise-title,
        .expertise-card,
        .interest-bar__inner,
        .contact-title,
        .contact-sub,
        .big-logo,
        .coord
      `);

      elementsToAnimate.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }, []);
    return (
    <>
    <head>
            <link rel="icon" href="/images/idryservices-mobile.png" />
            <title>IdryServices - About</title>
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
    
      <section className="about-hero" role="region" aria-label="Bannière about">
        <div
          className="about-hero__bg"
          style={{ backgroundImage: "url('/images/relalisation -about.jpeg')" }}
        />
        <div className="about-hero__inner">
          <div className="about-hero__left" />
          <div className="about-hero__right">
            <h3>IdryServices</h3>
            <h2>Bienvenue</h2>
            <h1>Nous construisons votre vision</h1>
            <h5>
              Tramcotech Société des Travaux de Construction, Voirie, Menuiserie et
              Aménagement  Decoration
            </h5>            <a href="/contact" className="about-hero__btn">Contactez nous</a>
          </div>
        </div>
      </section>
      <section className='blueGround'>
        <div className='TopSection'>
          <span>
            <img src="/images/building-logo.png" alt="" />
            <p>
              construction
            </p>
          </span>
          <span>
            <img src="public/images/house-logo.png" alt="" />
            <p>
              Architecture
            </p>  
          </span>
          <span>
            <img src="public/images/decoration-logo.png" alt="" />
            <p>
              Decoration
            </p>  
          </span>
        </div>
        <div className='MidleSection'>
          <h1>Nous sommes une entreprise de construction clé en main</h1>
          <span>
            "Grâce à un effort constant et un investissement important en matière de développement, Carlintechs, entreprise de construction au Maroc, offre des services complets d’ingénierie, d’architecture et de construction destinés aux milieux bâtis et naturels et ce, en utilisant des techniques et des technologies révolutionnaires. Notre société de construction s’engage à offrir à sa clientèle un service de haute qualité, efficace et fiable.
 
            Notre entreprise de construction basée à Rabat s’occupe de tout le processus de construction ou de rénovation de votre bâtiment, soient la conception des plans d’architechture et de béton armé, l’analyse des soumissions, l’ordonnancement, le pilotage, la coordination, la surveillance et le contrôle de la qualité des travaux de construction. De plus, notre entreprise de construction au Maroc met en oeuvre les plans élaborés par notre architecte et notre bureau d’études. Nous vous garantissons ainsi un ouvrage bâti selon les règles de l’art et qui répond entièrement à vos besoins. 

            Confiez votre projet à notre société de construction et nous le réalirons tel que vous l’avez tant imaginé !
            Équipe compétente et expérimentée
            Meilleur prix sur le marché"

          </span>
        </div>
        <div className='BottomSection'>
          <span>
            <img src="public/images/location-logo.png" alt="" />
            <p>
              Opérant Rabat et Casablanca
            </p>
          </span>
          <span>
            <img src="public/images/dollar-logo.png" alt="" />
            <p>
              Meilleur rapport qualité/prix
            </p>  
          </span>
          <span>
            <img src="public/images/group-logo.png" alt="" />
            <p>
              Équipe compétente et expérimentée
            </p>
          </span>
        </div>
      </section>
      

      <section className='light-blue-ground'>
        <h1 className='expertise-title'>Notre expertise : résidentiel, industriel et commercial</h1>
        
        <div className='expertise-grid'>
          <div className='expertise-card'>
            <img src="/images/realisation-num28.jpeg" alt="Villas & Maisons" />
            <h2>Villas & Maisons</h2>
            <div className='card-divider'></div>
            <p>Notre entrprise de construction au Maroc se démarque en matiére de construction. Tramcotech est capable de transformer votre réve en réalité. Faites nous confiance et contactez-nous dés maintenant pour une estimation</p>
          </div>

          <div className='expertise-card'>
            <img src="/images/construction.jpeg" alt="Bâtiments Industriels" />
            <h2>Bâtiments Industriels</h2>
            <div className='card-divider'></div>
            <p>Notre entrprise de construction au Maroc se démarque en matiére de construction. Tramcotech est capable de transformer votre réve en réalité. Faites nous confiance et contactez-nous dés maintenant pour une estimation</p>
          </div>

          <div className='expertise-card'>
            <img src="/images/realisation-num1.jpeg" alt="Espaces Commerciaux" />
            <h2>Espaces Commerciaux</h2>
            <div className='card-divider'></div>
            <p>Notre entrprise de construction au Maroc se démarque en matiére de construction. Tramcotech est capable de transformer votre réve en réalité. Faites nous confiance et contactez-nous dés maintenant pour une estimation</p>
          </div>
        </div>
      </section>
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
