
import TableOfContents from '../../ui/TableOfContents';
import OrbLink from '../../ui/OrbLink';
import SplitLines from '../../motion/SplitLines';
import Reveal from '../../motion/Reveal';
import ParallaxImage from '../../motion/ParallaxImage';
import ShareButtons from './ShareButtons';
import './Article.css';

function Section({ id, n, eyebrow, lines, children }) {
  return (
    <section id={id} className="asec">
      <Reveal dir="fade" className="lsec__eyebrow">
        {n}.&nbsp;&nbsp;&nbsp;{eyebrow}
      </Reveal>

      <SplitLines
        className="display asec__title"
        delay={0.1}
        lines={lines}
      />

      {children}
    </section>
  );
}

const P = ({ children, delay = 0.25 }) => (
  <Reveal as="p" className="asec__p" delay={delay}>
    {children}
  </Reveal>
);

export default function ArticleBody({ article, images }) {
  if (!article) return null;

  return (
    <section className="abody">
      <aside className="abody__aside">
        <div className="legal__sticky">
          <Reveal dir="fade">
            <TableOfContents items={article.toc} />
          </Reveal>

          <Reveal dir="fade" delay={0.2}>
            <ShareButtons />
          </Reveal>

          <Reveal className="abody__promo" delay={0.3}>
            <img
              src={images.quote}
              alt=""
              className="abody__promo-img"
            />

            <div className="abody__promo-copy">
              <h3>Turn insights<br />into opportunity.</h3>
              <p>
                Speak to our team to discuss how these insights
                apply to your business.
              </p>
            </div>

            <OrbLink to="/contact" />
          </Reveal>
        </div>
      </aside>

      <article className="abody__main">
        {article.sections.map((section, index) => (
          <div key={section.id}>
            <Section
              id={section.id}
              n={String(index + 1).padStart(2, '0')}
              eyebrow={section.eyebrow}
              lines={section.title}
            >
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <P key={paragraphIndex} delay={0.2 + paragraphIndex * 0.08}>
                  {paragraph}
                </P>
              ))}

              {section.challenges && (
                <div className="asec__grid">
                  {section.challenges.map(({ icon: Icon, text }, i) => (
                    <Reveal
                      key={text}
                      className="asec__chip"
                      delay={0.2 + i * 0.08}
                    >
                      <span className="icols__icon">
                        <Icon />
                      </span>
                      <span>{text}</span>
                    </Reveal>
                  ))}
                </div>
              )}

              {section.image && (
                <ParallaxImage
                  className="asec__image"
                  src={images.inline}
                  alt="Business environment and modern architecture"
                  reveal="left"
                  strength={0.4}
                />
              )}
            </Section>

            {index === 1 && (
              <Reveal dir="fade" className="aquote">
                <blockquote className="aquote__body">
                  <span className="aquote__mark">“</span>

                  <SplitLines
                    as="div"
                    className="aquote__text"
                    delay={0.3}
                    stagger={0.11}
                    lines={article.quote}
                  />

                  <figcaption className="aquote__cite">
                    <span />
                    ASD Advisors Ltd
                  </figcaption>
                </blockquote>

                <ParallaxImage
                  className="aquote__image"
                  src={images.quote}
                  alt=""
                  reveal="left"
                  strength={0.4}
                  delay={0.2}
                />
              </Reveal>
            )}
          </div>
        ))}
      </article>
    </section>
  );
}
