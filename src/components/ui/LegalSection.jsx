import { motion } from 'framer-motion';
import { PiEnvelopeSimpleFill, PiMapPinFill } from 'react-icons/pi';
import { EASE, VIEWPORT } from '../../lib/motion';
import './LegalSection.css';

/** One numbered block of a legal page: eyebrow, heading, paragraphs, and optional icon list / bullets / contact rows. */
export default function LegalSection({ section, index }) {
  const { id, eyebrow, title, paras = [], bullets = [], icons = [], email } = section;
  return (
    <motion.section
      id={id}
      className="lsec"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.9, ease: EASE }}
    >
      <div className="lsec__eyebrow">{String(index + 1).padStart(2, '0')}.&nbsp;&nbsp;&nbsp;{eyebrow}</div>
      <h2 className="lsec__title">{title}</h2>
      {paras.map((p) => <p key={p} className="lsec__p">{p}</p>)}
      {icons.length > 0 && (
        <div className="lsec__icons">
          {icons.map(({ icon: Icon, title: t, text }) => (
            <div key={t} className="lsec__icon-row">
              <span className="icols__icon"><Icon /></span>
              <div><div className="lsec__icon-title">{t}</div><div className="lsec__icon-text">{text}</div></div>
            </div>
          ))}
        </div>
      )}
      {bullets.length > 0 && (
        <ul className="lsec__list">
          {bullets.map((b, i) => (
            <motion.li
              key={b}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.07, ease: EASE }}
            >
              {b}
            </motion.li>
          ))}
        </ul>
      )}
      {email && (
        <div className="lsec__contact">
          <a href={'mailto:' + email}><PiEnvelopeSimpleFill />{email}</a>
          <span><PiMapPinFill />Lagos, Nigeria</span>
        </div>
      )}
    </motion.section>
  );
}
