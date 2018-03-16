import "./icons.styl"

import * as applicationComponents from "applications"
import {branch} from "baobab-react/higher-order"
import * as desktopActions from "actions/desktop"
import React, {Component} from "react"

class Icons extends Component {
  defaultProps = {
    applications: []
  };

  static propTypes = {
    applications: React.PropTypes.array
  };

  getTitle(application) {
    return applicationComponents[application.component].applicationTitle
  }

  openApplication(application) {
    this.props.actions.createPane(application)
  }

  render() {
    return <section data-component="icons">
      {this.renderApplications()}
    </section>
  }

  renderApplications() {
    return this.props.applications.map((application, i) => {
      const title = this.getTitle(application)

      return <div
        className="application"
        data-application={title}
        key={i}
        onClick={this.openApplication.bind(this, application)}>
        <div className="icon">
          <span className="icon-letter">
            {title.substring(0, 1)}
          </span>
        </div>

        <span className="title">
          {title}
        </span>
      </div>
    })
  }
}

export default branch(Icons, {
  actions: {
    createPane: desktopActions.createPane
  }
})
