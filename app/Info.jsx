import Link from "next/link"

const Info = () => {
  return (
    <div className='container info'>
      <div className="info-main">
        <h1 className="info--title">Start building with our APIs for absolutely free.</h1>
        <div className="input-box">
          <input type="text" placeholder='Enter email address' />
          <Link className="demo" href="">Schedule a Demo</Link>
        </div>
        <p>Have any questions?<Link className="contact" href="/contact"> Contact Us</Link></p>
      </div>
      <img src="./phone.svg" alt="phone" />
    </div>
  )
}

export default Info