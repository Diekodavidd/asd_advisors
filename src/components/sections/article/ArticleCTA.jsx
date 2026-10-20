import { motion } from 'framer-motion';
import PillLink from '../../ui/PillLink';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import { ARTICLE } from '../../../data/article';
import { EASE, VIEWPORT } from '../../../lib/motion';
import './Article.css';

export default function ArticleCTA() {
  return (
    <section className="acta-band">
      <img src={ARTICLE.images.cta} alt="" className="acta-band__img" />
      <SplitLines className="display acta-band__title" lines={['Let’s Turn Insight', 'into Impact.']} />
      <motion.span className="st-vrule st-vrule--light" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={VIEWPORT} transition={{ duration: 1.2, delay: 0.3, ease: EASE }} />
      <Reveal as="p" className="lead acta-band__text" delay={0.3}>
        Speak to our team to discuss how these insights apply to your business and explore tailored strategies for sustainable growth.
      </Reveal>
      <Reveal delay={0.4} className="acta-band__action"><PillLink to="/contact" variant="gold">Speak to a Consultant</PillLink></Reveal>
    </section>
  );
}
