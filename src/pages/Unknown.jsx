import React from "react";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import heroImage from '../assets/nf-hero.png';
import aboutImage from '../assets/nf_c1.png';
import servicesImage from '../assets/nf_c2.png';
import insightsImage from '../assets/nf_c3.png';
import contactImage from '../assets/nf_c4.png';
import helpImage from '../assets/lg_cta.png';

const links = [
  { title: "About ASD", text: "Learn more about who we are and how we help businesses grow.", cta: "Visit About", href: "/about", img: aboutImage },
  { title: "Our Services", text: "Explore our range of advisory services designed for real opportunities.", cta: "View Services", href: "/services", img: servicesImage },
  { title: "Insights", text: "Read our latest perspectives on strategy, growth and opportunity.", cta: "Explore Insights", href: "/insights", img: insightsImage },
  { title: "Contact Us", text: "Speak to our team and discuss how we can support your business.", cta: "Get in Touch", href: "/contact", img: contactImage },
];

const nav = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"],
  ["Insights", "/insights"], ["Industries", "/industries"], ["Careers", "/careers"],
];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Gilda+Display&family=Jost:wght@300;400;500&display=swap');
.asd404,.asd404 *{box-sizing:border-box}.asd404{--navy:#0b1625;--ivory:#faf5ec;--white:#f2ece2;--gold:#c39a64;--ink:#0f1a2a;margin:0;background:var(--navy);color:var(--white);font-family:Jost,sans-serif;overflow:hidden;-webkit-font-smoothing:antialiased}.asd404 a{color:inherit;text-decoration:none}.asd404 a:hover{color:var(--gold)}.asd404 :focus-visible{outline:2px solid var(--gold);outline-offset:3px}.asd404 img{display:block;width:100%;height:100%;object-fit:cover}
.asd404-header{position:absolute;top:0;left:0;right:0;z-index:5;padding:22px clamp(24px,6vw,88px)}.asd404-navrow{display:flex;align-items:center;justify-content:space-between;gap:24px}.asd404-logo{display:flex;flex-direction:column;align-items:center;line-height:1;color:var(--white);flex-shrink:0}.asd404-logo-main{position:relative;font-weight:500;font-size:34px;letter-spacing:-1px}.asd404-logo-main svg{position:absolute;left:-6px;top:4px;width:44px;height:16px}.asd404-logo-sub{font-size:9px;letter-spacing:2.6px;margin-top:4px}.asd404-nav{display:flex;gap:clamp(16px,2.6vw,40px);font-size:14px}.asd404-actions{display:flex;align-items:center;gap:20px}.asd404-pill,.asd404-home{display:flex;align-items:center;gap:14px;background:#f4efe7;color:var(--ink)!important;border-radius:40px;padding:5px 5px 5px 22px;font-size:13px;font-weight:500;white-space:nowrap}.asd404-round{width:38px;height:38px;border-radius:50%;background:var(--gold);display:grid;place-items:center;color:#f4efe7;font-size:18px}.asd404-menu{width:44px;height:44px;border-radius:50%;border:1px solid #777;background:transparent;color:var(--white);font-size:20px}
.asd404-hero{position:relative;min-height:max(100vh,640px);display:grid;grid-template-columns:1fr 1fr;background:var(--navy);overflow:hidden}.asd404-hero-img{position:absolute;inset:0 0 0 38%}.asd404-hero-img:before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,#0b1625 0%,rgba(11,22,37,.75) 22%,transparent 60%)}.asd404-hero-img:after{content:"";position:absolute;inset:auto 0 0;height:30%;background:linear-gradient(0deg,rgba(11,22,37,.6),transparent)}.asd404-hero-copy{position:relative;z-index:2;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:22px;padding:150px clamp(24px,4vw,56px) 90px clamp(24px,7vw,54px)}.asd404-rule{width:70px;height:1.5px;background:var(--gold)}.asd404-number{margin:0;font-family:'Gilda Display',serif;font-size:clamp(120px,19vw,220px);line-height:.85;letter-spacing:-4px;font-weight:400;background:linear-gradient(170deg,#f6e2c2,#d9b07a 45%,#a8763f);background-clip:text;color:transparent}.asd404 h2{font-family:'Gilda Display',serif;font-weight:400}.asd404-hero h2{margin:0;font-size:clamp(38px,4.6vw,64px);line-height:1;letter-spacing:-.8px}.asd404-hero p{margin:0;max-width:400px;font-size:16px;line-height:1.6;color:#e7e2d9;font-weight:300}.asd404-home{gap:22px;padding-left:30px;font-size:15px;margin-top:8px}.asd404-home .asd404-round{width:46px;height:46px}.asd404-kicker{position:absolute;left:clamp(24px,7vw,54px);bottom:26px;z-index:3;display:flex;align-items:center;gap:12px;font-size:10px;letter-spacing:3px;color:#cfd2d8}.asd404-kicker span{width:30px;height:1px;background:#777}.asd404-curve{position:absolute;left:30%;bottom:10%;width:55%;height:40%;pointer-events:none;z-index:1}
.asd404-explore{background:var(--ivory);color:var(--ink);padding:clamp(48px,6vw,72px) clamp(24px,4vw,30px) clamp(48px,6vw,80px) clamp(24px,6vw,48px)}.asd404-explore-head{display:grid;grid-template-columns:1.3fr .7fr;gap:32px;align-items:end;padding-bottom:clamp(32px,4vw,52px)}.asd404-eyebrow{display:flex;align-items:center;gap:30px;font-size:13px;letter-spacing:3.2px;color:#a8642e;font-weight:500}.asd404-explore h2{margin:18px 0 0;font-size:clamp(40px,5.4vw,64px);line-height:1;letter-spacing:-.8px}.asd404-explore-intro{margin:0 0 12px;font-size:15px;line-height:1.55;color:#3c4452;max-width:230px}.asd404-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,320px),1fr));gap:clamp(16px,3.4vw,26px)}.asd404-card{display:grid;grid-template-columns:.72fr 1.28fr;min-height:205px;background:#fbf8f2;border:1px solid rgba(15,26,42,.08);color:var(--ink)!important;overflow:hidden;transition:transform .4s,box-shadow .4s,border-color .4s}.asd404-card:hover{transform:translateY(-6px);box-shadow:0 26px 50px -30px rgba(15,26,42,.55);border-color:rgba(195,154,100,.55)}.asd404-card-img{min-height:205px;overflow:hidden;background:#1a1a1c}.asd404-card-img img{transition:transform 1s}.asd404-card:hover .asd404-card-img img{transform:scale(1.08)}.asd404-card-copy{display:flex;flex-direction:column;justify-content:space-between;gap:18px;padding:22px 20px 20px}.asd404-card-title{font-family:'Gilda Display',serif;font-size:22px;line-height:1.15}.asd404-card-description{margin-top:10px;font-size:13.5px;line-height:1.55;color:#3c4452}.asd404-card-cta{display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:14px;font-weight:500}.asd404-card-arrow{width:38px;height:38px;flex-shrink:0;border-radius:50%;background:var(--gold);color:#f4efe7;display:grid;place-items:center;transition:transform .4s}
.asd404-help{position:relative;display:grid;grid-template-columns:1fr .9fr;min-height:310px;background:var(--navy);overflow:hidden}.asd404-help-img{position:absolute;inset:0 0 0 45%}.asd404-help-img:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,#0b1625,transparent 45%)}.asd404-help-copy{position:relative;z-index:1;display:flex;flex-direction:column;align-items:flex-start;gap:20px;padding:clamp(40px,4vw,52px) clamp(24px,3vw,40px) clamp(40px,4vw,52px) clamp(24px,7.6vw,58px)}.asd404-help-heading{position:relative;padding-left:20px;display:flex;flex-direction:column;gap:12px}.asd404-help-heading:before{content:"";position:absolute;left:0;top:6px;bottom:6px;width:1.5px;background:var(--gold)}.asd404-help h2{margin:0;font-size:clamp(34px,4vw,46px);line-height:1.05}.asd404-help p{margin:0;max-width:380px;font-size:16px;line-height:1.55;color:#e7e2d9;font-weight:300}.asd404-contact{display:flex;align-items:center;gap:22px;background:var(--gold);color:var(--ink)!important;border-radius:40px;padding:5px 5px 5px 30px;font-size:14px;margin-top:8px}.asd404-contact span{width:42px;height:42px;border-radius:50%;border:1px solid #777;display:grid;place-items:center}
.asd404-footer{background:var(--navy);padding:44px clamp(24px,6.6vw,96px) 28px}.asd404-footer-top{display:grid;grid-template-columns:auto minmax(0,1fr) auto auto;gap:clamp(24px,4vw,64px);align-items:start;padding-bottom:36px;border-bottom:1px solid rgba(242,236,226,.12)}.asd404-footer-nav{display:flex;flex-wrap:wrap;justify-content:center;gap:clamp(18px,2.4vw,34px);font-size:13px;padding-top:6px}.asd404-footer-contact{display:flex;flex-direction:column;gap:12px;font-size:13px;color:#cfd2d8}.asd404-footer-contact b{color:var(--gold);font-weight:400;margin-right:8px}.asd404-socials{display:flex;gap:10px}.asd404-socials a{width:34px;height:34px;border-radius:50%;background:var(--gold);color:var(--navy)!important;display:grid;place-items:center;font-size:13px;font-weight:500}.asd404-footer-bottom{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;padding-top:22px;font-size:12px;color:#cfd2d8}.asd404-legal{display:flex;gap:24px}
@media(max-width:1050px){.asd404-nav{gap:14px;font-size:12px}.asd404-actions{gap:10px}.asd404-footer-top{grid-template-columns:auto 1fr}.asd404-footer-nav{justify-content:flex-start}}
@media(max-width:760px){.asd404-header{padding:18px 20px}.asd404-nav{display:none}.asd404-actions{gap:8px}.asd404-pill{padding-left:12px;font-size:11px;gap:8px}.asd404-hero{min-height:760px;grid-template-columns:1fr}.asd404-hero-img{inset:0}.asd404-hero-img:before{background:linear-gradient(90deg,rgba(11,22,37,.93),rgba(11,22,37,.55) 60%,rgba(11,22,37,.2))}.asd404-hero-copy{padding:150px 24px 100px}.asd404-curve{left:10%;width:85%}.asd404-explore-head{grid-template-columns:1fr;gap:20px}.asd404-explore-intro{max-width:360px}.asd404-cards{grid-template-columns:1fr}.asd404-card{min-height:180px}.asd404-card-img{min-height:180px}.asd404-card-copy{padding:17px 15px}.asd404-card-title{font-size:20px}.asd404-help{min-height:360px}.asd404-help-img{inset:0;opacity:.55}.asd404-help-img:after{background:linear-gradient(90deg,rgba(11,22,37,.98),rgba(11,22,37,.55))}.asd404-help-copy{padding:54px 24px}.asd404-footer-top{grid-template-columns:1fr;gap:26px}.asd404-footer-nav{justify-content:flex-start}.asd404-footer-bottom{flex-direction:column}}
@media(prefers-reduced-motion:reduce){.asd404 *{scroll-behavior:auto!important;transition:none!important;animation:none!important}}
`;

function Logo() {
  return <Link className="asd404-logo" to="/" aria-label="ASD Advisors Ltd home">
    <span className="asd404-logo-main">ASD<svg viewBox="0 0 60 20" aria-hidden="true"><path d="M2 18 Q20 2 40 0" fill="none" stroke="#c39a64" strokeWidth="2.5" /></svg></span>
    <span className="asd404-logo-sub">ADVISORS LTD</span>
  </Link>;
}

export default function NotFound404() {
  return <main className="asd404">
    <style>{css}</style>
   <Navbar />

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

          <Footer />

  </main>;
}
