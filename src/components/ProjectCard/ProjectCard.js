import React from 'react';
import './ProjectCard.scss';

class ProjectCard extends React.Component {
  render() {
    let { data } = this.props;
    return(
      <article className="project-card">
        <div className="project-card__image" style={{
          backgroundImage:`url(${data.media[0].filename.url})`
        }}>
        </div>
        <div className="project-card__content">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      </article>
    )
  }
}

export default ProjectCard;
