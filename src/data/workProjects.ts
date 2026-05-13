/** Rubriques alignées sur le portfolio Adobe (même titres & thématiques). */

export type WorkSection = Readonly<{
  title: string;
  text: string;
}>;

export type WorkProject = Readonly<{
  slug: string;
  title: string;
  tag: string;
  hue: string;
  /** Couleur du soulignement au survol (proche du bandeau de la carte) */
  titleUnderline: string;
  shortDescription: string;
  intro: string;
  sections: WorkSection[];
}>;

export const WORK_PROJECTS: WorkProject[] = [
  {
    slug: 'creations-de-videos',
    title: 'Créations de vidéos',
    tag: 'Vidéo',
    hue: 'var(--card-1)',
    titleUnderline: 'var(--card-1-underline)',
    shortDescription:
      'Montage, rythme et narration — des vidéos qui tiennent l’attention du premier à la dernière image.',
    intro:
      'Les créations vidéo sont au cœur de mon travail : concevoir un flux visuel clair, un son qui soutient le message, et une esthétique fidèle à ta marque. Du format très court pour les réseaux aux montages plus narratifs, chaque projet part d’un brief et d’une intention : qu’est-ce qu’on veut faire ressentir, et en combien de temps ?',
    sections: [
      {
        title: 'Ce que je prends en charge',
        text:
          'Découpage et rythme, transitions, habillage typographique, harmonisation colorimétrique, musique ou ambiance sonore (selon les droits et le projet), livraisons aux bons formats pour Instagram, site ou autre support.',
      },
      {
        title: 'Ma façon de travailler',
        text:
          'On cadr ensemble le message et le public, puis je propose une ligne directrice visuelle. Le montage avance par itérations : tu peux valider les temps forts avant la finition. L’objectif est toujours la lisibilité : une vidéo efficace est une vidéo qu’on comprend sans effort.',
      },
      {
        title: 'Ensuite',
        text:
          'Une fois la vidéo validée, je peux t’accompagner sur les déclinaisons : extraits pour les stories, teaser, ou cohérence avec tes publications et ta story à la une. Tout s’enchaîne pour que ton identité reste la même partout.',
      },
    ],
  },
  {
    slug: 'storyinstagram',
    title: 'Story Instagram',
    tag: 'Stories',
    hue: 'var(--card-2)',
    titleUnderline: 'var(--card-2-underline)',
    shortDescription:
      'Stories qui s’enchaînent avec du rythme : typo, mouvement et cohérence avec ton univers.',
    intro:
      'La story Instagram, c’est souvent la première impression : rapide, verticale, sans seconde chance. Je conçois des enchaînements de planches qui gardent la tension : accroche en une seconde, message central, appel à l’action si besoin — tout en restant dans ta charte graphique.',
    sections: [
      {
        title: 'Formats & contraintes',
        text:
          'Durées, zones sûres, texte lisible sur mobile, mentions et stickers : je respecte les usages de la plateforme pour que le rendu soit nickel une fois en ligne. Les fichiers sont préparés pour un export simple sur téléphone ou depuis ton outil habituel.',
      },
      {
        title: 'Style',
        text:
          'Mouvements légers, découpes nettes ou plus soft, palettes alignées sur ton feed : l’idée est que tes stories prolongent le même langage que tes posts et ta « à la une », pour que l’ensemble du profil raconte une seule histoire.',
      },
      {
        title: 'Collaboration',
        text:
          'Tu peux me transmettre des rushs, des visuels existants ou un simple brief texte ; je propose une première proposition graphique, puis on ajuste jusqu’à ce que le ton soit juste — ni trop sage, ni trop chargé.',
      },
    ],
  },
  {
    slug: 'publicationinstagram',
    title: 'Publication Instagram',
    tag: 'Feed',
    hue: 'var(--card-3)',
    titleUnderline: 'var(--card-3-underline)',
    shortDescription:
      'Posts et carrousels pour le fil : mise en page, hiérarchie et série cohérente.',
    intro:
      'Dans le fil, chaque publication doit tenir debout toute seule tout en s’harmonisant avec les autres. Je travaille la composition, la hiérarchie du texte, les contrastes et la continuité visuelle d’un carrousel à l’autre pour que ton feed reste reconnaissable en un coup d’œil.',
    sections: [
      {
        title: 'Carrousels & posts uniques',
        text:
          'Un carrousel, c’est une petite narration : couverture forte, développement clair, dernière planche qui conclut ou invite à commenter. Pour un post unique, je cherche l’équilibre entre impact immédiat et lisibilité dans le fil.',
      },
      {
        title: 'Cohérence de marque',
        text:
          'Typographie, couleurs, motifs : tout s’aligne sur ce que tu affiches déjà (ou sur une direction qu’on définit ensemble). L’objectif est un fil à la fois varié et homogène — comme une signature visuelle.',
      },
      {
        title: 'Livrables',
        text:
          'Je peux livrer des visuels prêts à poster (ratios 4:5, 1:1, etc.) ou des fichiers sources selon ton workflow. On valide ensemble les légendes si tu veux une cohérence texte + image.',
      },
    ],
  },
  {
    slug: 'storyalaune',
    title: 'Story à la une',
    tag: 'À la une',
    hue: 'var(--card-4)',
    titleUnderline: 'var(--card-4-underline)',
    shortDescription:
      'Icônes et couvertures de highlights pour structurer ton profil et guider les visiteurs.',
    intro:
      'Les stories « à la une » servent de sommaire : elles indiquent en un clin d’œil ce que les gens peuvent explorer — offres, coulisses, avis clients, liens utiles. Je crée des couvertures et une hiérarchie visuelle pour que ton profil soit clair avant même qu’on lise la bio.',
    sections: [
      {
        title: 'Couvertures & identité',
        text:
          'Formes simples, icônes ou typo pure : les couvertures reprennent tes couleurs et ton style pour former une rangée harmonieuse au-dessus du feed. On peut rester minimal ou plus illustré, selon ton univers.',
      },
      {
        title: 'Organisation',
        text:
          'Je peux t’aider à ordonner les chapitres pour que la navigation soit logique pour un nouveau visiteur : quoi mettre en avant en premier, comment nommer chaque bloc pour qu’on comprenne tout de suite.',
      },
      {
        title: 'Cohérence globale',
        text:
          'Les à la une dialoguent avec tes stories et tes posts : même palette, même ton. Ainsi, le passage du fil au profil entier donne une impression pro et réfléchie.',
      },
    ],
  },
];

export function getWorkProjectBySlug(slug: string): WorkProject | undefined {
  return WORK_PROJECTS.find((p) => p.slug === slug);
}
