import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import { PERSONAL_ILLUSTRATIONS } from '../data/personalIllustrations';

export default function HorsTravailPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <article className="hors-travail-page">
        <Link className="work-detail__back" to="/">
          ← Accueil
        </Link>
        <header className="hors-travail-page__header">
          <h1 className="section__title">Travaux hors travail</h1>
          <p className="hors-travail-page__intro">
            Une sélection d’illustrations et de créations personnelles, en marge des missions
            professionnelles.
          </p>
        </header>

        {PERSONAL_ILLUSTRATIONS.length === 0 ? (
          <p className="hors-travail-page__empty" role="status">
            Aucune image pour le moment : ajoute tes illustrations dans le dossier{' '}
            <code className="hors-travail-page__code">src/assets/travaux-hors-travail</code> pour
            qu’elles s’affichent ici.
          </p>
        ) : (
          <ul className="hors-travail-gallery" aria-label="Galerie d’illustrations">
            {PERSONAL_ILLUSTRATIONS.map((item) => (
              <li key={item.src} className="hors-travail-gallery__item">
                <figure className="hors-travail-gallery__figure">
                  <img
                    className="hors-travail-gallery__img"
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </li>
            ))}
          </ul>
        )}
      </article>
    </Layout>
  );
}
