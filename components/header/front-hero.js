const FrontHero = () => {
  return (
    <section className="section-front-hero">
      <div className="container">
        <div className="front-hero">
          <div className="front-hero-section front-hero-text">
            <h1>Fast, Powerful, Secure and Reliable VPS Hosting</h1>
            <p>High performance Windows VPS and Linux VPS backed by enterprise hardware, 10G network and excellent 24/7 customer care.</p>
            <div className="flex-container">
              <a className="button button-primary" href="#">KVM VPS</a>
              <a className="button button-secondary" href="#">Dedicated Server</a>         
            </div>
          </div>{/* front-hero-text */}
          <div className="front-hero-section front-hero-image">
            <img className="hero-image" src="/images/hero-image.svg" alt="hero image" />
          </div>{/* front-hero-image */}
        </div>
      </div>
    </section>
  )
}
export default FrontHero;