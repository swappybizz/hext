import { FeaturesData } from "../data/FeaturesData";
const Features = () => {
  return (
    <section id="ter" className="section">
      <div className="section-title">
        <h2>Terrasse</h2>
        <h4>På terrasse vi tilbyr:</h4>
      </div>
      <div className="cards">
        {FeaturesData.map((item) => <div key={item.id} className="card">
          <div><img className="img-size3" src={item.image} alt={item.title} /></div>
          <h4 className="card-title">{item.title}</h4>
          <p className="card-text">{item.text}</p>
        </div>)}
      </div>
    </section>
  )
}
export default Features;