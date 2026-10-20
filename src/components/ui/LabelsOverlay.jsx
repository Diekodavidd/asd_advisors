import Reveal from '../motion/Reveal';

/** Stacked uppercase words over a photo, sliding in one by one. */
export default function LabelsOverlay({ words, className = '', delay = 0.5 }) {
  return (
    <div className={'labels-overlay ' + className}>
      {words.map((w, i) => <Reveal key={w} dir="left" delay={delay + i * 0.1}>{w}</Reveal>)}
    </div>
  );
}
