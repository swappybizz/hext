import Link from 'next/link'
const FrontHero = () => {
  return (
    <section className="section-front-hero">
      <div className="container">
        <div className="front-hero">
          <div className="front-hero-section front-hero-text">
            <h1>Din Lokale Taktekker</h1>
            <p>Sunnmøre Tak AS er et allsidig firma i takbransjen. Vi tilbyr tak tilpaset til ditt ønske. Våres lange erfaring garanterer profesjonell utførelse av dine prosjekt, tilpaset et krevende norsk kyst klima. Vi tilbyr hjelp til valg av kvalitetmaterialer, faglig rådgiving samt estetisk og langvarig produkt..</p>
            <div className="flex-container">
              <Link href="/vps/kvm-vps"><a className="button button-primary">Ring oss ☎️ 46268749</a></Link>

            </div>
          </div>{/* front-hero-text */}
          <div className="front-hero-section front-hero-image">
            <img className="hero-image" src="/images/logo.svg" alt="hero image" />
          </div>{/* front-hero-image */}
        </div>
      </div>
    </section>
  )
}
export default FrontHero;