import React from 'react';
import './App.css'
import projects from './data/projects'
import buttons from './data/buttons';
import Toolbar from './components/Toolbar'
import ProjectList from './components/ProjectList'

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All',
      projects,
      buttons
    }
  }

  filterProjects = (project) => {
    let filter;
    if (project === 'All') {
      filter = projects;
    } else {
      filter = projects.filter(el => el.category === project);
    }
    this.setState({selected: project, projects: filter});
  }

  render() {
    return (
      <div className="container">
        <Toolbar
        filters={this.state.buttons}
        selected={this.state.selected}
        onSelectFilter={(filter) => { this.filterProjects(filter.target.textContent)}} 
        />
        <ProjectList projects={this.state.projects} />
      </div>
    )
  }
}

export default Portfolio
