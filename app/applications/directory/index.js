import * as desktopActions from "actions/desktop"
import {branch} from "baobab-react/higher-order"
import React, {Component} from "react"

class Directory extends Component {
  defaultProps = {
    entries: [],
    contentTitle: "Directory"
  };

  static propTypes = {
    entries: React.PropTypes.array,
    contentTitle: React.PropTypes.string
  };

  openUser(user, event) {
    event.stopPropagation()
    this.props.actions.getPaneFromRoute(user.username)
  }

  render() {
    return <section data-component="applications/directory">
      <h1>{this.props.contentTitle}</h1>

      {this.renderEntries()}
    </section>
  }

  renderEntries() {
    return this.props.entries.map((entry, i) => {
      return <div className="link entry" key={i} onClick={this.openUser.bind(this, entry)}>
        {entry.fullName}
      </div>
    })
  }
}

export default Object.assign(branch(Directory, {
  actions: {
    getPaneFromRoute: desktopActions.getPaneFromRoute
  }
}), {applicationTitle: "Spectra"})
