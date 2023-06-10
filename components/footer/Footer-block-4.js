import Link from 'next/link'
const FooterBlock4 = () => {
  return (
    <div className="footer-block">
      <ul>
        <li><Link href="mailro:post@smtak.no">post@smtak.no</Link></li>
        <li><a href="">+47-46268749</a></li>
        {/* <li><a href="#">Knowledgebase</a></li>
        <li><a href="#">Client Area</a></li> */}
      </ul>
    </div>
  )
}
export default FooterBlock4;