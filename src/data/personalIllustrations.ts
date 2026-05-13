/**
 * Images placées dans `src/assets/travaux-hors-travail/`
 * (extensions : png, jpg, jpeg, webp, gif, svg) — chargées automatiquement, ordre alphabétique des noms de fichiers.
 */

export type PersonalIllustrationItem = Readonly<{
  src: string;
  alt: string;
}>;

function titleFromFilename(path: string): string {
  const base = path.split('/').pop() ?? path;
  const withoutExt = base.replace(/\.[^.]+$/, '');
  const spaced = withoutExt.replace(/[-_]+/g, ' ').trim();
  return spaced.length > 0 ? spaced : 'Illustration';
}

const modules = import.meta.glob<{ default: string }>(
  '../assets/travaux-hors-travail/*.{png,jpg,jpeg,webp,gif,svg}',
  { eager: true, import: 'default' },
);

export const PERSONAL_ILLUSTRATIONS: PersonalIllustrationItem[] = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({
    src,
    alt: `Illustration — ${titleFromFilename(path)}`,
  }));
