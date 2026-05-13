export default function About() {
  return (
    <section className="section about" id="qui-suis-je" aria-labelledby="about-heading">
      <div className="section__grid">
        <h2 id="about-heading" className="section__title">
          Qui suis-je ?
        </h2>
        <div className="about__content">
          <p className="lead">
            Je suis Elisa Lièvre, créatrice de contenu orientée image et réseaux. Mon travail touche à la
            production vidéo et à l’habillage des supports sociaux — des formats pensés pour être regardés,
            partagés et compris en un instant.
          </p>
          <p>
            Du cadrage au montage, en passant par les stories, les carrousels et les « à la une », je
            assemble une direction visuelle claire pour faire passer messages et émotions. Chaque livrable
            prolonge le même fil conducteur : rythme, identité et attention aux détails.
          </p>
          <ul className="about__skills">
            <li>Montage &amp; création vidéo</li>
            <li>Stories &amp; formats Instagram</li>
            <li>Publications &amp; carrousels</li>
            <li>Habillage social &amp; à la une</li>
            <li>Direction éditoriale visuelle</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
