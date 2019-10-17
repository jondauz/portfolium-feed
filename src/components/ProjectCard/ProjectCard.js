import React from 'react';
import './ProjectCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

class ProjectCard extends React.Component {
  
  getProfileImage(imageUrl) {
    return imageUrl.replace('{function}', 'crop').replace('{size}', '80x80');
  }

  render() {
    let { data } = this.props;
    return(
      <article className="project-card">
        <header>
          <img src={this.getProfileImage(data.profile.avatar.dynamic)} alt={`${data.profile.firstname} ${data.profile.lastname}`} />
          {data.profile.firstname} {data.profile.lastname}
        </header>
        <div className="project-card__image" style={{
          backgroundImage:`url(${data.media[0].filename.url})`
        }}>
        </div>
        <div className="project-card__content">
          <div className="project-card__title">
            {data.title}
          </div>
          <div className="project-card__desc">
            {data.description}
          </div>
          </div>
        <div className="project-card__category">
          {data.category}
        </div>
        <footer>
          <FontAwesomeIcon icon={faHeart} /> 
          <span>{data.likes}</span>
          <FontAwesomeIcon icon={faShareAlt} />
        </footer>
      </article>
    )
  }
}

export default ProjectCard;
