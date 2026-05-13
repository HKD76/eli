import { useEffect, useState } from 'react';
import { ParallaxFlowerSvg } from './ParallaxFlowerSvg';
import { PARALLAX_FLOWERS } from '../data/parallaxFlowers';

export default function ParallaxDecor() {
  const [scrollY, setScrollY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = globalThis.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);

    const onMedia = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', onMedia);

    const onScroll = () => setScrollY(globalThis.scrollY);
    globalThis.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      mq.removeEventListener('change', onMedia);
      globalThis.removeEventListener('scroll', onScroll);
    };
  }, []);

  const y = reducedMotion ? 0 : scrollY;

  return (
    <div className="parallax-decor" aria-hidden>
      <div
        className="parallax-decor__layer parallax-decor__layer--blobs"
        style={{ transform: `translate3d(0, ${y * 0.06}px, 0)` }}
      />
      <div className="parallax-decor__flowers">
        {PARALLAX_FLOWERS.map((f) => (
          <div
            key={f.id}
            className={`parallax-decor__flower parallax-decor__flower--${f.tone}`}
            style={{
              top: f.top,
              left: f.left,
              right: f.right,
              width: f.size,
              height: f.size,
              transform: `translate3d(${y * f.drift}px, ${y * f.speed}px, 0) rotate(${f.rotate}deg)`,
            }}
          >
            <ParallaxFlowerSvg variant={f.variant} />
          </div>
        ))}
      </div>
      <div
        className="parallax-decor__layer parallax-decor__layer--dots"
        style={{ transform: `translate3d(0, ${y * 0.1}px, 0)` }}
      />
      <div
        className="parallax-decor__layer parallax-decor__layer--rings"
        style={{ transform: `translate3d(0, ${y * 0.04}px, 0)` }}
      />
      <div
        className="parallax-decor__layer parallax-decor__layer--grain"
        style={{ transform: `translate3d(0, ${y * 0.02}px, 0)` }}
      />
    </div>
  );
}
