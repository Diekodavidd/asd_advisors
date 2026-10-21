import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import './Unknown.css';
// import heroImage from '../assets/nf-hero.png';
// import aboutImage from '../assets/nf_c1.png';
// import servicesImage from '../assets/nf_c2.png';
// import insightsImage from '../assets/nf_c3.png';
// import contactImage from '../assets/nf_c4.png';
// import helpImage from '../assets/lg_cta.png';
const heroImage = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792536796/nf-hero_he3swx.png';
const aboutImage = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792536793/nf_c1_vqllfr.png';
const servicesImage = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792536798/nf_c2_h45ktu.png';
const insightsImage = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792536800/nf_c3_qhufmc.png';
const contactImage = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792536792/nf_c4_tympc6.png';
const helpImage = 'https://res.cloudinary.com/zy7u4nqi/image/upload/v1792536799/lg_cta_agvfey.png';

const links = [
  { title: "About ASD", text: "Learn more about who we are and how we help businesses grow.", cta: "Visit About", href: "/about", img: aboutImage },
  { title: "Our Services", text: "Explore our range of advisory services designed for real opportunities.", cta: "View Services", href: "/services", img: servicesImage },
  { title: "Insights", text: "Read our latest perspectives on strategy, growth and opportunity.", cta: "Explore Insights", href: "/insights", img: insightsImage },
  { title: "Contact Us", text: "Speak to our team and discuss how we can support your business.", cta: "Get in Touch", href: "/contact", img: contactImage },
];

export default function NotFound404() {
  return <>
    <Navbar />
    <main className="asd404">
    <section className="asd404-hero" aria-labelledby="not-found-title">
      <div className="asd404-hero-img" aria-hidden="true"><img src={heroImage} alt="" /></div>
      <div className="asd404-hero-copy">
        <span className="asd404-rule" />
        <h1 className="asd404-number" id="not-found-title">404</h1>
        <h2>Page Not Found.</h2>
        <p>The page you’re looking for doesn’t seem to exist or may have been moved. Let’s get you back on the right track.</p>
        <Link className="asd404-home" to="/">Back to Home<span className="asd404-round" aria-hidden="true">→</span></Link>
      </div>
      <svg className="asd404-curve" viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true"><path d="M0 300 Q180 120 400 40" fill="none" stroke="#c39a64" strokeWidth="1" strokeOpacity=".55" /></svg>
      <div className="asd404-kicker">ERROR 404 <span /> ASD ADVISORS</div>
    </section>

    <section className="asd404-explore" aria-labelledby="explore-title">
      <div className="asd404-explore-head">
        <div><div className="asd404-eyebrow"><span className="asd404-rule" />EXPLORE OUR SITE</div><h2 id="explore-title">Where would you<br />like to go?</h2></div>
        <p className="asd404-explore-intro">Here are some helpful links to get you back on track.</p>
      </div>
      <div className="asd404-cards">{links.map(link => <Link className="asd404-card" to={link.href} key={link.title}>
        <div className="asd404-card-img"><img src={link.img} alt="" loading="lazy" /></div>
        <div className="asd404-card-copy"><div><div className="asd404-card-title">{link.title}</div><div className="asd404-card-description">{link.text}</div></div>
          <div className="asd404-card-cta">{link.cta}<span className="asd404-card-arrow" aria-hidden="true">→</span></div>
        </div>
      </Link>)}</div>
    </section>

    <section className="asd404-help" aria-labelledby="help-title">
      <div className="asd404-help-img" aria-hidden="true"><img src={helpImage} alt="" loading="lazy" /></div>
      <div className="asd404-help-copy"><span className="asd404-rule" />
        <div className="asd404-help-heading"><h2 id="help-title">Still need help?</h2><p>If you believe this is a mistake or need further assistance, feel free to contact our team.</p></div>
        <Link className="asd404-contact" to="/contact">Speak to a Consultant<span aria-hidden="true">→</span></Link>
      </div>
    </section>

  </main>
    <Footer />
  </>;
}
