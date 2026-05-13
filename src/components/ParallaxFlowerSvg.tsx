type PetalVariant = 5 | 6;
type Props = Readonly<{
  variant?: PetalVariant;
  className?: string;
}>;

/** Silhouettes florales minimalistes pour le fond (currentColor). */
export function ParallaxFlowerSvg({ variant = 5, className }: Props) {
  const petals = variant === 6 ? 6 : 5;
  const step = 360 / petals;
  const cy = variant === 6 ? -22 : -24;
  const rx = variant === 6 ? 11 : 12;
  const ry = variant === 6 ? 20 : 22;

  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden>
      <g transform="translate(50,50)">
        {Array.from({ length: petals }, (_, i) => (
          <ellipse
            key={i}
            cx="0"
            cy={cy}
            rx={rx}
            ry={ry}
            transform={`rotate(${i * step})`}
            opacity={0.88}
          />
        ))}
        <circle r={variant === 6 ? 8.5 : 9} opacity={0.95} />
      </g>
    </svg>
  );
}
