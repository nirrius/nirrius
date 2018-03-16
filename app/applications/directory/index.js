import * as desktopActions from "actions/desktop"
import {branch} from "baobab-react/higher-order"
import React, {Component} from "react"

class Directory extends Component {
  defaultProps = {
    entries: []
  };

  static propTypes = {
    entries: React.PropTypes.array
  };

  openUser(user, event) {
    event.stopPropagation()
    this.props.actions.getPaneFromRoute(user.username)
  }

  render() {
    return <section data-component="applications/directory">
      <h1>
        Users
      </h1>

      {this.renderEntries()}
    </section>
  }

  renderEntries() {
    return this.props.entries.map((entry, i) =>
      <div className="link entry" key={i} onClick={this.openUser.bind(this, entry)}>
        {entry.fullName}
      </div>
    )
  }
}

export default Object.assign(branch(Directory, {
  actions: {
    getPaneFromRoute: desktopActions.getPaneFromRoute
  }
}), {applicationTitle: "Directory"})
