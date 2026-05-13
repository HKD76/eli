import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import { getWorkProjectBySlug } from '../data/workProjects';

export default function WorkProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getWorkProjectBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <Layout>
        <article className="work-detail">
          <p className="work-detail__missing">Cette page n&apos;existe pas.</p>
          <Link className="work-detail__back" to="/">
            ← Retour à l&apos;accueil
          </Link>
        </article>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="work-detail">
        <Link className="work-detail__back" to="/#mon-travail">
          ← Mon travail
        </Link>
        <div
          className="work-detail__cover"
          style={{ background: project.hue }}
          aria-hidden
        />
        <p className="work-detail__tag">{project.tag}</p>
        <h1 className="work-detail__title">{project.title}</h1>
        <p className="work-detail__intro">{project.intro}</p>
        <div className="work-detail__prose">
          {project.sections.map((block) => (
            <section key={block.title} className="work-detail__section">
              <h2 className="work-detail__heading">{block.title}</h2>
              <p className="work-detail__text">{block.text}</p>
            </section>
          ))}
        </div>
      </article>
    </Layout>
  );
}
