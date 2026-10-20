import { Link } from 'react-router-dom';
import { PiArrowCircleRight } from 'react-icons/pi';
import SplitHead from '../../ui/SplitHead';
import Reveal from '../../motion/Reveal';
import ArcLines from '../../motion/ArcLines';
import { SERVICE_LIST } from '../../../data/services';
import './ServiceGrid.css';

export default function ServiceGrid() {
  return (
    <section id="services" className="svc-grid">
      <ArcLines
        className="svc-grid__arc"
        viewBox="0 0 800 400"
        preserveAspectRatio="xMaxYMid slice"
        paths={[{ d: 'M200 400 Q560 360 800 40', stroke: '#c39a64', opacity: 0.35, duration: 2.6 }]}
      />
      <SplitHead
        light
        className="svc-grid__head"
        eyebrow="Our Services"
        lines={['How We', 'Support Your', 'Business.']}
        text="We offer a comprehensive range of advisory services designed to help businesses navigate complexity, seize opportunities and achieve meaningful, long-term success."
      />
      <div className="svc-grid__list">
        {SERVICE_LIST.map((s, i) => (
          <Reveal key={s.n} delay={0.08 + (i % 3) * 0.11}>
            <Link to={s.to} className="svc-tile">
              <div className="svc-tile__body">
                <div className="svc-tile__num">{s.n}<PiArrowCircleRight /></div>
                <h3 className="svc-tile__title">{s.title}</h3>
                <p className="svc-tile__text">{s.text}</p>
              </div>
              <div className="svc-tile__media"><img src={s.img} alt="" loading="lazy" /></div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
