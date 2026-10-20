import { Link } from 'react-router-dom';
import { PiArrowRight } from 'react-icons/pi';
import SplitHead from '../../ui/SplitHead';
import Reveal from '../../motion/Reveal';
import { SECTORS } from '../../../data/industries';
import './Sectors.css';

export default function Sectors() {
  return (
    <section id="sectors" className="sectors">
      <SplitHead
        className="sectors__head"
        eyebrow="Our Industries"
        lines={['Sector Expertise', 'for Real-World Impact.']}
        text="Our deep industry understanding enables us to provide practical, relevant and forward-looking solutions that help businesses navigate complexity, seize opportunities and achieve lasting value."
      />
      <div className="sectors__grid">
        {SECTORS.map((s, i) => (
          <Reveal key={s.n} delay={0.08 + (i % 3) * 0.11}>
            <Link to="/contact" className="sector">
              <div className="sector__media"><img src={s.img} alt={s.title} loading="lazy" /></div>
              <div className="sector__body">
                <div>
                  <div className="sector__num">{s.n}</div>
                  <h3 className="sector__title">{s.title}</h3>
                  <p className="sector__text">{s.text}</p>
                </div>
                <span className="sector__arrow"><PiArrowRight /></span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
