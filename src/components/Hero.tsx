import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__badge">
        <span className="hero__dot" aria-hidden />
        Contenu vidéo &amp; réseaux sociaux
      </div>
      <h1 className="hero__title">
        <span className="hero__kicker">Salut, je suis</span>
        <br />
        <span className="hero__name">
          Elisa <span className="hero__name-accent">Lièvre</span>
        </span>
      </h1>
      <p className="hero__lede">
        Je conçois des contenus pour Instagram et au-delà : vidéos, stories, publications et mises en avant — un univers visuel cohérent pour raconter une marque avec précision et personnalité.
      </p>
      <div className="hero__actions">
        <Link className="btn btn--primary" to="/#mon-travail">
          Mon travail
        </Link>
        <Link className="btn btn--outline" to="/#contact">
          Contactez-moi !
        </Link>
      </div>
      <div className="hero__meta">
        <span>France</span>
        <span className="hero__sep" aria-hidden>
          ·
        </span>
        <span>Vidéo · Social · Création de contenu</span>
      </div>
    </section>
  );
}
