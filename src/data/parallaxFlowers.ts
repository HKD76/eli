/** Positions (%), taille, vitesse parallaxe scroll (plus élevé = plus « proche »), variante SVG. */
export type FlowerConfig = Readonly<{
  id: string;
  top: string;
  left?: string;
  right?: string;
  size: number;
  /** Vitesse verticale (px déplacés par px de scroll) — bien espacées entre les fleurs */
  speed: number;
  /** Dérive horizontale au scroll (sens & ampleur uniques par fleur) */
  drift: number;
  rotate: number;
  variant: 5 | 6;
  tone: 'violet' | 'salmon';
}>;

export const PARALLAX_FLOWERS: FlowerConfig[] = [
  { id: 'f1', top: '6%', left: '4%', size: 118, speed: 0.042, drift: 0.024, rotate: -18, variant: 5, tone: 'violet' },
  { id: 'f2', top: '14%', right: '6%', size: 96, speed: 0.198, drift: -0.019, rotate: 12, variant: 6, tone: 'salmon' },
  { id: 'f3', top: '38%', left: '2%', size: 84, speed: 0.061, drift: -0.011, rotate: -8, variant: 6, tone: 'violet' },
  { id: 'f4', top: '45%', right: '4%', size: 110, speed: 0.172, drift: 0.031, rotate: 22, variant: 5, tone: 'salmon' },
  { id: 'f5', top: '62%', left: '8%', size: 72, speed: 0.218, drift: 0.007, rotate: -14, variant: 5, tone: 'violet' },
  { id: 'f6', top: '72%', right: '10%', size: 100, speed: 0.035, drift: -0.027, rotate: 8, variant: 6, tone: 'salmon' },
  { id: 'f7', top: '88%', left: '15%', size: 88, speed: 0.129, drift: -0.005, rotate: -6, variant: 5, tone: 'violet' },
  { id: 'f8', top: '78%', right: '18%', size: 64, speed: 0.094, drift: 0.016, rotate: 16, variant: 6, tone: 'salmon' },
];
