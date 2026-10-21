import { motion } from 'framer-motion';
import Eyebrow from '../../ui/Eyebrow';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import ParallaxImage from '../../motion/ParallaxImage';
import ContactForm from './ContactForm';
import { CONTACT_IMAGES, CONTACT_INFO } from '../../../data/contact';
import { EASE } from '../../../lib/motion';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <section id="form" className="csec">
      <div className="csec__form">
        <Eyebrow rule={false}>Send Us a Message</Eyebrow>
        <SplitLines className="display csec__title" delay={0.1} lines={['Speak to a Consultant']} />
        <Reveal as="p" className="lead csec__lead" delay={0.25}>
          Fill out the form below and a member of our team will get back to you promptly to schedule a conversation.
        </Reveal>
        <Reveal delay={0.35}><ContactForm /></Reveal>
      </div>

      <div className="csec__info">
        <Eyebrow light rule={false}>Get in Touch</Eyebrow>
        <SplitLines className="display csec__info-title" delay={0.1} lines={['Contact', 'Information']} />
        <Reveal as="p" className="lead csec__info-lead" delay={0.25}>
          We're here to answer your questions, explore opportunities and discuss how we can support your business.
        </Reveal>
        <div className="csec__list">
          {CONTACT_INFO.map(({ icon: Icon, title, text, href }, i) => (
            <Reveal key={title} dir="right" delay={0.3 + i * 0.11}>
              <a href={href} className="cinfo">
                <motion.span className="cinfo__icon" whileHover={{ scale: 1.08 }} transition={{ duration: 0.4, ease: EASE }}><Icon /></motion.span>
                <span>
                  <span className="cinfo__title">{title}</span>
                  <span className="cinfo__text">{text}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <ParallaxImage className="csec__image" src={CONTACT_IMAGES.side} alt="Stone facade lit by a warm strip of light" reveal="down" strength={0.6} />
    </section>
  );
}
