const PORTFOLIO_ADOBE = 'https://elisalievre01.myportfolio.com/';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__brand">Elisa Lièvre</span>
        <p className="footer__note">
          Création de contenus vidéo et social — disponible pour projets et missions ponctuelles.
        </p>
        <div className="footer__links">
          <a href={PORTFOLIO_ADOBE} target="_blank" rel="noreferrer">
            Portfolio Adobe
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <p className="footer__copy">© {new Date().getFullYear()} Elisa Lièvre — Tous droits réservés</p>
      </div>
    </footer>
  );
}
