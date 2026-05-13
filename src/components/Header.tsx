import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

const nav = [
  { to: '/#mon-travail', label: 'Mon travail' },
  { to: '/hors-travail', label: 'Travaux hors travail' },
  { to: '/#qui-suis-je', label: 'Qui suis-je ?' },
];

/** Nombre de directions sur le contour (répartition régulière). */
const SPARK_COUNT = 20;

/** Fallback avant mesure (proche de l’ancien bouton rond ~52px). */
const FALLBACK_RX_PX = 26;
const FALLBACK_RY_PX = 22;

type HeaderSpark = {
  id: string;
  left: string;
  top: string;
  barRotDeg: number;
  delayMs: number;
};

/**
 * Étincelles sur une ellipse alignée avec le bouton pilule ;
 * orientation = normale sortante à l’ellipse (trait perpendiculaire au bord).
 */
function buildBurstSparks(rxPx: number, ryPx: number): HeaderSpark[] {
  const out: HeaderSpark[] = [];
  for (let i = 0; i < SPARK_COUNT; i++) {
    const rad = (i / SPARK_COUNT) * Math.PI * 2 - Math.PI / 2;
    const x = Math.cos(rad) * rxPx;
    const y = Math.sin(rad) * ryPx;
    const nx = Math.cos(rad) / rxPx;
    const ny = Math.sin(rad) / ryPx;
    const barRotDeg = (Math.atan2(ny, nx) * 180) / Math.PI;
    out.push({
      id: `spark-${i}`,
      left: `calc(50% + ${x.toFixed(3)}px)`,
      top: `calc(50% + ${y.toFixed(3)}px)`,
      barRotDeg,
      delayMs: Math.round((i / SPARK_COUNT) * 320),
    });
  }
  return out;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const [halfAxesPx, setHalfAxesPx] = useState({ rx: FALLBACK_RX_PX, ry: FALLBACK_RY_PX });

  const headerSparks = useMemo(
    () => buildBurstSparks(halfAxesPx.rx, halfAxesPx.ry),
    [halfAxesPx],
  );

  useLayoutEffect(() => {
    const el = ctaRef.current;
    if (!el) return;

    const update = () => {
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      setHalfAxesPx({ rx: w / 2, ry: h / 2 });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <Link className="logo" to="/">
          Elisa Lièvre
        </Link>
        <nav className="nav" aria-label="Navigation principale">
          <ul className="nav__list">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="nav__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          ref={ctaRef}
          className="header__cta"
          to="/#contact"
          aria-label="Aller à la section contact en bas de page"
        >
          <span className="header__cta__burst" aria-hidden="true">
            {headerSparks.map((s) => (
              <span
                key={s.id}
                className="header__cta__slot"
                style={{ left: s.left, top: s.top }}
              >
                <span
                  className="header__cta__spark-wrap"
                  style={
                    {
                      ['--bar-rot']: `${s.barRotDeg}deg`,
                      ['--spark-delay']: `${s.delayMs}ms`,
                    } as CSSProperties
                  }
                >
                  <span className="header__cta__spark-bar" />
                </span>
              </span>
            ))}
          </span>
          <span className="header__cta__label">Contactez-moi</span>
        </Link>
      </div>
    </header>
  );
}
