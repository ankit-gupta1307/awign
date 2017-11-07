import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import DashboardHome from 'components/dashboard/dashboardHome';
import ProjectList from 'components/project/projectList';
import TaskList from 'components/tasks/taskList';
import CreateProject from 'components/project/createProject';
import InternList from 'components/intern/internList';
import CreateIntern from 'components/intern/createIntern';
@connect((store) => {
  return {
    isLoggedIn: store.loginReducer.isLoggedIn
  }
})

export default  class EnsureLoggedInContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if(!this.props.isLoggedIn) {
      this.props.history.replace('/');
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path="/projectList" component={ProjectList} />
        <Route exact path="/createProject" component={CreateProject} />
        <Route exact path="/taskList/:id/:title" component={TaskList} />
        <Route exact path="/internList" component={InternList} />
        <Route exact path="/createIntern" component={CreateIntern} />
      </Switch>
    )
  }
};
