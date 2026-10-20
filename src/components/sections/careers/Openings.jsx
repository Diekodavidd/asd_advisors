import { Link } from 'react-router-dom';
import { PiArrowRight, PiClock, PiMapPin } from 'react-icons/pi';
import Eyebrow from '../../ui/Eyebrow';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import { ROLES } from '../../../data/careers';
import './Careers.css';

export default function Openings() {
  return (
    <section id="openings" className="cr-openings">
      <div className="cr-openings__inner">
        <div className="cr-openings__head">
          <Eyebrow rule={false}>Open Opportunities</Eyebrow>
          <SplitLines className="display cr-openings__title" delay={0.1} lines={['Current', 'Openings.']} />
        </div>
        <div className="cr-openings__body">
          <Reveal dir="fade" className="cr-openings__all">
            <Link to="/contact" className="cr-all-link">View All Roles <span><PiArrowRight /></span></Link>
          </Reveal>
          <div className="cr-roles">
            {ROLES.map((r, i) => (
              <Reveal key={r.id} delay={0.15 + i * 0.12}>
                <Link to={'/contact?role=' + r.id} className="cr-role">
                  <div className="cr-role__info">
                    <span className="cr-role__tag">{r.tag}</span>
                    <h3 className="cr-role__title">{r.title}</h3>
                    <div className="cr-role__meta"><span><PiMapPin />{r.location}</span><span><PiClock />{r.type}</span></div>
                  </div>
                  <span className="cr-role__arrow"><PiArrowRight /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
