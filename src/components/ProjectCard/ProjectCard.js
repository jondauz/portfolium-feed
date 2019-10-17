import React from 'react';
import './ProjectCard.scss';

class ProjectCard extends React.Component {
  render() {
    let { data } = this.props;
    return(
      <article>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </article>
    )
  }
}

export default ProjectCard;
