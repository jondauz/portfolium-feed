import React from 'react';
import './App.scss';
import { ProjectCard } from '../../components';
import retrieveCards from '../../services';
import debounce from 'lodash/debounce';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      params: {
        limit: 13,
        offset: 0,
        sort: 'recent'
      },
      isLoaded: false,
      isRetrieving: false,
      projects: []
    };
  }

  getCards() {
    retrieveCards(this.state.params)
      .then(res => res.json())
      .then(results => this.setState({
        projects: [...this.state.projects, ...results],
        isLoaded: true,
        isRetrieving: false
      }));
  }

  loadMore() {
    this.setState(state => {
      return {
        params: {
          ...state.params,
          offset: state.params.offset + state.params.limit
        },
        isRetrieving: true
      }
    }, this.getCards);
  }

  handleScroll() {
    let lastElement = document.querySelector('div.project-cards > .project-card:last-of-type');
    let lastElementOffset = lastElement.offsetTop + lastElement.clientHeight;
    let pageOffset = window.pageYOffset + window.innerHeight;

    if (pageOffset > lastElementOffset && !this.state.isRetrieving) {
      this.loadMore();
    }
  }

  componentDidMount() {
    this.getCards();

    window.addEventListener('scroll', debounce(() => this.handleScroll(), 300));
  }

  render() {
    let { projects, isLoaded, isRetrieving } = this.state;

    if (!isLoaded) {
      return <span className="app-loading">Loading...</span>;
    } else {
      return (
        <>
          <div className="project-cards">
            {projects.map((item, index) => (
              <ProjectCard key={index} data={item} />
            ))}
          </div>
          <div className="loading-more">
            { isRetrieving ? <span>Loading more...</span> : null }
          </div>
        </>
      );
    }
  }
}

export default App;
