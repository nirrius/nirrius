import "./entries.styl"

import * as desktopActions from "actions/desktop"
import {branch} from "baobab-react/higher-order"
import React, {Component} from "react"

class Entries extends Component {
  defaultProps = {
    entries: []
  };

  static propTypes = {
    entries: React.PropTypes.array,
    username: React.PropTypes.string
  };

  handleNavigate(params, event) {
    event.stopPropagation()

    this.props.actions.getPaneFromRoute(params.username, params.entryID)
  }

  render() {
    return <section data-component="applications/entries">
     {this.renderTable()}
    </section>
  }

  renderEntries() {
    return this.props.entries.map((entry, i) =>
      <tr key={i}>
        <td className="entry-number">{i + 1}.</td>
        <td className="entry">
          <span className="link"
            onClick={this.handleNavigate.bind(this, {
              username: this.props.username,
              entryID: entry.id
            })}>
            {entry.contentTitle}
          </span>
        </td>
      </tr>
    )
  }

  renderTable() {
    return <table>
      <thead>
        <tr>
          <th className="entry-number">№</th>
          <th>Entry</th>
        </tr>
      </thead>

      <tbody>
        {this.renderEntries()}
      </tbody>
    </table>
  }
}

export default Object.assign(branch(Entries, {
  actions: {
    getPaneFromRoute: desktopActions.getPaneFromRoute
  }
}), {applicationTitle: "Directory"})

