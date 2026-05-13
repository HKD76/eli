export default function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-heading">
      <div className="contact__panel">
        <h2 id="contact-heading" className="contact__title">
          Contactez-moi !
        </h2>
        <p className="contact__text">
          Une collaboration, un brief vidéo ou une question sur du contenu social — écris-moi et on voit ce
          qui peut matcher ton projet.
        </p>
        <a className="btn btn--primary btn--lg contact__email" href="mailto:elisa@exemple.fr">
          M’écrire par e-mail
        </a>
      </div>
    </section>
  );
}
