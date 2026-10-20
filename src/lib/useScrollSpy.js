import { useEffect, useState } from 'react';

/** Returns the id of the section currently in the reading zone of the viewport. */
export default function useScrollSpy(ids, rootMargin = '-30% 0px -60% 0px') {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join('|');

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return undefined;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, rootMargin]);

  return active;
}
