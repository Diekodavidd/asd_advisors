import PageHero from '../ui/PageHero';
import TableOfContents from '../ui/TableOfContents';
import SideCard from '../ui/SideCard';
import LegalSection from '../ui/LegalSection';
import PillLink from '../ui/PillLink';
import SplitLines from '../motion/SplitLines';
import Reveal from '../motion/Reveal';
import ParallaxImage from '../motion/ParallaxImage';
import Footer from './Footer';
import { LEGAL_CTA_IMAGE } from '../../data/legal';
import './LegalPage.css';

/** Template for Terms / Privacy: hero, sticky contents + help card, numbered sections, closing band. */
export default function LegalPage({ doc }) {
  const { lines, text, image, alt, position, side, sections, splitAt = 6, ctaText } = doc;
  const toc = sections.map(({ id, label }) => ({ id, label }));
  return (
    <>
      <PageHero eyebrow="Legal" lines={lines} text={text} image={image} alt={alt} position={position} shape="arch" rail={false} compact />
      <section className="legal">
        <aside className="legal__aside">
          <div className="legal__sticky">
            <Reveal dir="fade"><TableOfContents items={toc} /></Reveal>
            <SideCard {...side} />
          </div>
        </aside>
        <div className="legal__body">
          {sections.slice(0, splitAt).map((s, i) => <LegalSection key={s.id} section={s} index={i} />)}
          <div className="legal__grid">
            {sections.slice(splitAt).map((s, i) => <LegalSection key={s.id} section={s} index={i + splitAt} />)}
          </div>
        </div>
      </section>
      <section className="legal-cta">
        <div className="legal-cta__copy">
          <SplitLines className="display legal-cta__title" lines={['Still Have Questions?']} />
          <Reveal as="p" className="lead legal-cta__text" delay={0.2}>{ctaText}</Reveal>
        </div>
        <Reveal delay={0.3}><PillLink to="/contact" variant="gold">Speak to a Consultant</PillLink></Reveal>
        <ParallaxImage className="legal-cta__image" src={LEGAL_CTA_IMAGE} alt="" reveal="left" strength={0.4} />
      </section>
      <Footer variant="full" />
    </>
  );
}
