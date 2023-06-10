import Image from "next/image";
const SectionFasterHosting = () => {
  return (
    <div id="flat" className="section">
      <div className="flex-container">
        <div className="flex-item">
          <div className="flex">
<Image src="/images/ft.svg" alt="Sunnmøre Tak" width={400} height={400} />
          </div>
        </div>
        <div className="flex-item">
          <h2>FlateTak</h2>
          <h3>På flate tak vi tilbyr:</h3>
          <ul className="flex-column">
            <li>Pvc membran</li>
            <li>Asfaltbelegg</li>
            <li>Tak mekanisk festet eller balastert</li>
            <li>Isolering med mineralull og Eps</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SectionFasterHosting;
