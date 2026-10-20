import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PiArrowRight, PiPlus } from 'react-icons/pi';
import Eyebrow from '../../ui/Eyebrow';
import Motto from '../../ui/Motto';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import ParallaxImage from '../../motion/ParallaxImage';
import { CONTACT_IMAGES, FAQS } from '../../../data/contact';
import { EASE } from '../../../lib/motion';
import './FAQ.css';

export default function FAQ() {
  const [open, setOpen] = useState(-1);

  return (
    <section id="faq" className="faq">
      <div className="faq__intro">
        <Eyebrow rule={false}>Frequently Asked Questions</Eyebrow>
        <SplitLines className="display faq__title" delay={0.1} lines={['Quick', 'Answers.']} />
        <Reveal delay={0.35} className="faq__cta">
          <motion.a href="#form" className="faq__arrow" aria-label="Ask us a question" whileHover={{ x: 4 }}>
            <PiArrowRight />
          </motion.a>
        </Reveal>
      </div>

      <div className="faq__list">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.q} delay={0.1 + i * 0.09} className="faq__item">
              <button
                className="faq__q"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={'faq-' + i}
              >
                {item.q}
                <motion.span className="faq__icon" animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.5, ease: EASE }}>
                  <PiPlus />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={'faq-' + i}
                    className="faq__a"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                    <p>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          );
        })}
      </div>

      <ParallaxImage className="faq__image" src={CONTACT_IMAGES.faq} alt="Stone facade catching the setting sun" reveal="left" strength={0.45} />
      <Motto />
    </section>
  );
}
