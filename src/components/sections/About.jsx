import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { PiArrowRight } from 'react-icons/pi';
import Eyebrow from '../ui/Eyebrow';
import SplitLines from '../motion/SplitLines';
import Reveal from '../motion/Reveal';
import ParallaxImage from '../motion/ParallaxImage';
import Counter from '../motion/Counter';
import { ABOUT_TAGS, IMAGES, STATS } from '../../data/content';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__copy">
        <Eyebrow>About ASD Advisors</Eyebrow>
        <SplitLines
          className="display about__title"
          delay={0.1}
          lines={['A Partner', 'for What’s', <span className="accent-deep">Next.</span>]}
        />
        <Reveal as="p" className="lead about__lead" delay={0.35}>
          ASD Advisors Ltd is a forward-thinking advisory firm dedicated to helping businesses develop, improve and grow. We work closely with business owners to understand their operations, identify opportunities and provide practical advice tailored to their goals.
        </Reveal>
        <Reveal delay={0.45}>
          <Link to="/about" className="circle-link">
            <span className="circle-link__label">Our Story</span>
            <span className="circle-link__icon"><PiArrowRight /></span>
          </Link>
        </Reveal>
      </div>

      <div className="about__visual">
        <ParallaxImage className="about__image" src={IMAGES.about} alt="Glass office tower at golden hour" reveal="up" position="52% center" strength={0.4} />
        <div className="about__stats">
          {STATS.map((s, i) => (
            <Reveal key={s.label} className="stat" delay={0.2 + i * 0.12}>
              <div className="stat__value"><Counter to={s.value} />+</div>
              <div className="stat__label">{s.label}</div>
            </Reveal>
          ))}
        </div>
        <Reveal dir="fade" delay={0.6} className="about__tags">
          {ABOUT_TAGS.map((t, i) => (
            <Fragment key={t}>
              {i > 0 && <span aria-hidden="true">|</span>}
              <span>{t}</span>
            </Fragment>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
