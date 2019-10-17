import React from 'react';
import './App.scss';
import { ProjectCard } from '../../components';
import retrievedata from '../../services';

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
      projects: []
    };
  }

  componentDidMount() {
    retrievedata(this.state.params)
      .then(res => res.json())
      .then(result => this.setState({ projects: result, isLoaded: true }));
  }

  render() {

    let { projects, isLoaded } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {projects.map((item, index) => (
            <ProjectCard key={item.id} data={item} />
          ))}
        </ul>
      );
    }
  }
}

export default App;
