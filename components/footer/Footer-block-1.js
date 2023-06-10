import Image from 'next/image'
import Link from 'next/link'
const FooterBlock1 = () => {
  return (
    <div className="footer-block">
      <div className='site-logo'><Image className="logo" src="/images/logo.svg" width={187} height={80} alt="hext" /></div>
      <p>
        <Link href="/about">Din Lokale Taktekker</Link></p>
    </div>
  )
}
export default FooterBlock1;