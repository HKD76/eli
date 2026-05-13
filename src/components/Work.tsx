import { Link } from 'react-router-dom';
import type { CSSProperties } from 'react';
import { WORK_PROJECTS } from '../data/workProjects';

export default function Work() {
  return (
    <section className="section work" id="mon-travail" aria-labelledby="work-heading">
      <div className="work__intro">
        <h2 id="work-heading" className="section__title">
          Mon travail
        </h2>
        <p className="work__subtitle">
          Les quatre rubriques de mon portfolio Adobe — clique sur une carte pour en savoir plus sur
          chaque type de mission.
        </p>
      </div>
      <div className="work__grid">
        {WORK_PROJECTS.map((p) => (
          <Link
            key={p.slug}
            to={`/travail/${p.slug}`}
            className="work-card work-card--link"
            style={{ ['--work-card-underline' as string]: p.titleUnderline } as CSSProperties}
          >
            <div className="work-card__visual" style={{ background: p.hue }} aria-hidden />
            <div className="work-card__body">
              <span className="work-card__tag">{p.tag}</span>
              <h3 className="work-card__title">{p.title}</h3>
              <p className="work-card__desc">{p.shortDescription}</p>
              <span className="work-card__more">Lire la suite →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
