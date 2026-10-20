import TableOfContents from '../../ui/TableOfContents';
import OrbLink from '../../ui/OrbLink';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import ParallaxImage from '../../motion/ParallaxImage';
import ShareButtons from './ShareButtons';
import { ARTICLE, ARTICLE_CHALLENGES, ARTICLE_TOC } from '../../../data/article';
import './Article.css';

function Section({ id, n, eyebrow, lines, children }) {
  return (
    <section id={id} className="asec">
      <Reveal dir="fade" className="lsec__eyebrow">{n}.&nbsp;&nbsp;&nbsp;{eyebrow}</Reveal>
      <SplitLines className="display asec__title" delay={0.1} lines={lines} />
      {children}
    </section>
  );
}

const P = ({ children, delay = 0.25 }) => <Reveal as="p" className="asec__p" delay={delay}>{children}</Reveal>;

export default function ArticleBody() {
  const { images } = ARTICLE;
  return (
    <section className="abody">
      <aside className="abody__aside">
        <div className="legal__sticky">
          <Reveal dir="fade"><TableOfContents items={ARTICLE_TOC} /></Reveal>
          <Reveal dir="fade" delay={0.2}><ShareButtons /></Reveal>
          <Reveal className="abody__promo" delay={0.3}>
            <img src={images.quote} alt="" className="abody__promo-img" />
            <div className="abody__promo-copy">
              <h3>Turn insights<br />into opportunity.</h3>
              <p>Speak to our team to discuss how these insights apply to your business.</p>
            </div>
            <OrbLink to="/contact" />
          </Reveal>
        </div>
      </aside>

      <article className="abody__main">
        <Section id="landscape" n="01" eyebrow="The current landscape" lines={['A More Complex,', 'More Connected World.']}>
          <P>Businesses today operate in an environment defined by rapid technological change, shifting market dynamics and increasing global interdependence. While these changes create uncertainty, they also open up new opportunities for organisations that are ready to adapt.</P>
          <ParallaxImage className="asec__image" src={images.inline} alt="Skyline seen through angular glass architecture" reveal="left" strength={0.4} />
          <P delay={0.2}>From evolving customer expectations to regulatory shifts and geopolitical developments, leaders must take a more deliberate and forward-looking approach to strategy.</P>
        </Section>

        <Section id="challenges" n="02" eyebrow="Key challenges" lines={['Navigating Uncertainty', 'with Confidence.']}>
          <P>Economic volatility, disrupted supply chains and increasing competitive pressure are forcing businesses to rethink traditional growth models. Many organisations are also grappling with:</P>
          <div className="asec__grid">
            {ARTICLE_CHALLENGES.map(({ icon: Icon, text }, i) => (
              <Reveal key={text} className="asec__chip" delay={0.2 + i * 0.08}>
                <span className="icols__icon"><Icon /></span><span>{text}</span>
              </Reveal>
            ))}
          </div>
        </Section>

        <Reveal as="figure" dir="fade" className="aquote">
          <blockquote className="aquote__body">
            <span className="aquote__mark">“</span>
            <SplitLines as="div" className="aquote__text" delay={0.3} stagger={0.11} lines={['Uncertainty is not a barrier', 'to growth. It is an invitation', 'to build differently.']} />
            <figcaption className="aquote__cite"><span />ASD Advisors Ltd</figcaption>
          </blockquote>
          <ParallaxImage className="aquote__image" src={images.quote} alt="" reveal="left" strength={0.4} delay={0.2} />
        </Reveal>

        <Section id="opportunities" n="03" eyebrow="Opportunities for growth" lines={['Turning Change into Competitive Advantage.']}>
          <P>Periods of disruption often create the conditions for meaningful innovation. Businesses that take a long-term view can identify new markets, strengthen operational resilience and build deeper customer relationships.</P>
        </Section>
        <Section id="strategies" n="04" eyebrow="Practical strategies" lines={['A Focused Approach to Lasting Impact.']}>
          <P>To navigate complexity, organisations need clear priorities, robust capabilities and the right strategic partners. This includes investing in people, leveraging data and technology, and embedding sustainability into core business decisions.</P>
        </Section>
        <Section id="ahead" n="05" eyebrow="Looking ahead" lines={['Building a More Resilient Future.']}>
          <P>While uncertainty will remain a constant, businesses that combine strategic thinking with practical execution will be best positioned to thrive. The question is not whether change will continue, but how prepared your organisation is to turn it into opportunity.</P>
        </Section>
      </article>
    </section>
  );
}
